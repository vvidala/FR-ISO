$.loginButton.addEventListener('click', function(e) {
	var slide_it_left = Titanium.UI.createAnimation();
    slide_it_left.left = 0; // to put it back to the left side of the window
    slide_it_left.duration = 300;

    var slide_it_right = Titanium.UI.createAnimation();
    slide_it_right.left = "-100%";
    slide_it_right.duration = 300; 
    
    var home = Alloy.createController('home').getView();
	$.index.animate(slide_it_right);
	home.open(slide_it_left);
});

$.forgotPassword.addEventListener('click', function(e) {
    Titanium.Platform.openURL('http://forrent.com/contactus.php');
});
$.index.open();
