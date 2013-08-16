var logout = Ti.UI.createButton({
	title: "Log Out",
	id: "logOut"
});

logout.addEventListener('click', function(e){
	Ti.API.info('closing view');
	Ti.App.fireEvent('app:gotoLogin');
});

$.mainWindow.leftNavButton = logout;

var bb1 = Titanium.UI.createButtonBar({
    labels:['One', 'Two', 'Three'],
    backgroundColor:'#336699',
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});


$.mainWindow.rightNavButton = bb1;

var rows = [];
var websites = [
	"images/frc-apple-touch-icon.png", 
	"/images/prc-apple-touch-icon.png", 
	"/images/fru-apple-touch-icon.gif"
];

var type = [
	"images/new-icon.png",
	"images/thumbs-up-icon.png",
	"images/thumbs-down-icon.png"
];
for(var i=0; i<10; i++){ 
	var row = Alloy.createController('IsoTableViewRow');
	row.websiteIcon.image = websites[Math.floor((Math.random()*3))];
	row.typeIcon.image = type[Math.floor((Math.random()*3))];
	rows.push(row.getView());
}
$.isoTable.data = rows;
$.isoTable.addEventListener('click', function(e){
	Ti.API.info('click recieved');
	var detailWindow = Alloy.createController('IsoDetailView').getView();
	detailWindow.data = e.rowData;
	$.home.activeTab.open(detailWindow);
	//$.mainWindow.containingTab.open(win);
});
