var slide_to_view = Titanium.UI.createAnimation({
	left: '0%',
	//right: '0%',
	duration: 300
});

var slide_it_left = Titanium.UI.createAnimation({
	left: "100%",
	//right: "-100%",
	duration: 300
});

var slide_it_right = Titanium.UI.createAnimation({	
	left: "-100%",
	//right: "100%",
	duration: 300
}); 

var home;
$.loginButton.addEventListener('click', function(e) {
	home = Alloy.createController('home').getView();
	if(OS_IOS){
		$.index.animate(slide_it_right);
		home.open(slide_to_view);
	}
	else {
		home.open();
	}
});

Ti.App.addEventListener('app:gotoLogin', function(e){
	Ti.API.info('got login');
	home.close(slide_it_left);
	$.index.animate(slide_to_view);
});

$.forgotPassword.addEventListener('click', function(e) {
    Titanium.Platform.openURL('http://forrent.com/contactus.php');
});
$.index.open();
