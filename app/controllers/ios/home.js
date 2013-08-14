var logout = Ti.UI.createButton({
	title: "Log Out",
	id: "logOut"
});

logout.addEventListener('click', function(e){
	Ti.API.info('closing view');
	Ti.App.fireEvent('app:gotoLogin');
});

$.mainWindow.leftNavButton = logout;


Ti.Gesture.addEventListener('orientationchange', function(e) {
	
	$.mainWindow.animate({
		right: 0
	});
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

$.test.addEventListener('click', function(e){
	var win = Ti.UI.createWindow({
		title: "Test",
		hideTabBar: true
	});
	$.home.activeTab.open(win);
});
