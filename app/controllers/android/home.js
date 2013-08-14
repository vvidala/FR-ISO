var self = $.home;

Ti.API.info("Building android menu");
/*
var activity = $.home.activity;
activity.actionBar.title = "TiBHClassic";
activity.actionBar.displayHomeAsUp = true; 
activity.invalidateOptionsMenu();

activity.onCreateOptionsMenu = function(e) {
    Ti.API.info($.home.activeTab.title + ' onCreateOptionsMenu');
    var menu = e.menu;
    var m1 = menu.add({ 
    	title : L('add'),
    	icon: '/images/ic_action_add_icon.png',
    	visible: 'true',
    	showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
     });
    m1.addEventListener('click', function(e) {
    	//open in tab group to get free title bar (android)
        Ti.API.info($.home.activeTab.title + ' add clicked');
    });
};
*/

$.test.addEventListener('click', function(e){
	var win = Ti.UI.createWindow({
		title: "Test",
		hideTabBar: true
	});
	$.home.activeTab.open(win);
});
