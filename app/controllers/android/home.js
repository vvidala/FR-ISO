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
];

for(var i=0; i<10; i++){ 
	var row = Alloy.createController('IsoTableViewRow');
	row.websiteIcon.image = websites[Math.floor((Math.random()*3))];
	row.typeIcon.image = type[Math.floor((Math.random()*3))];
	rows.push(row.getView());
}

$.isoTable.data = rows;
$.isoTable.addEventListener('click', function(e){
	Ti.API.info($.home.title);
	var detailWindow = Alloy.createController('IsoDetailView').getView();
	detailWindow.data = e.rowData;
	detailWindow.open();
});
