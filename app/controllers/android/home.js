Ti.API.info("Building android menu");

var rows = [];
var websites = [
	"/images/frc-apple-touch-icon.png", 
	"/images/prc-apple-touch-icon.png", 
	"/images/fru-apple-touch-icon.gif"
];

var type = [
	"/images/new-icon.png",
	"/images/thumbs-up-icon.png",
	"/images/thumbs-down-icon.png"
]
for(var i=0; i<10; i++){ 
	var row = Alloy.createController('IsoTableViewRow');
	row.websiteIcon.image = websites[Math.floor((Math.random()*3))];
	row.typeIcon.image = type[Math.floor((Math.random()*3))];
	rows.push(row.getView());
}
$.isoTable.data = rows;
$.isoTable.addEventListener('click', function(e){
	//alert('click recieved');
	Ti.API.info($.home.title);
	var win = Ti.UI.createWindow({
		title: "River View Park Apartment Homes"
	});
	//Titanium.UI.currentWindow.open(win,{animated:true});
	//$.home.open(win, {animated: true});
	win.open();
	//$.mainWindow.containingTab.open(win);
})