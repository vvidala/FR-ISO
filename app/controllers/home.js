if(OS_IOS) {
	$.mainWindow.leftNavButton = Ti.UI.createButton({
		title: "Log Out",
		id: "logOut"
	});
	
	var bb1 = Titanium.UI.createButtonBar({
	    labels:['One', 'Two', 'Three'],
	    backgroundColor:'#336699',
	    top:50,
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height:25,
	    width:200
	});
	
	$.mainWindow.rightNavButton = bb1;
}

$.test.addEventListener('click', function(e){
	var win = Ti.UI.createWindow({
		title: "Test",
		hideTabBar: true
	});
	$.home.activeTab.open(win);
})
