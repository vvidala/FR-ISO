function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/Splash.jpg",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        height: "50dp",
        width: "100%",
        top: "2%",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        image: "/images/frc-logo-white.png",
        id: "__alloyId6"
    });
    $.__views.header.add($.__views.__alloyId6);
    $.__views.loginMask = Ti.UI.createView({
        borderRadius: "10dp",
        borderWidth: "2dp",
        borderColor: "#ffffff",
        backgroundColor: "#000000",
        opacity: "0.6",
        width: "400dp",
        height: "300dp",
        bottom: "17.5%",
        id: "loginMask"
    });
    $.__views.index.add($.__views.loginMask);
    $.__views.login = Ti.UI.createView({
        backgroundColor: "transparent",
        width: "280dp",
        height: "280dp",
        bottom: "18.5%",
        layout: "vertical",
        id: "login"
    });
    $.__views.index.add($.__views.login);
    $.__views.message = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "20dp"
        },
        color: "#ddd",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "5",
        text: "Management Console Login",
        id: "message"
    });
    $.__views.login.add($.__views.message);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        id: "__alloyId8"
    });
    var __alloyId9 = [];
    __alloyId9.push($.__views.__alloyId8);
    $.__views.__alloyId10 = Ti.UI.createTextField({
        paddingLeft: "10dp",
        autoCorrect: "false",
        hintText: "Username",
        width: "100%",
        height: "40dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTextField({
        paddingLeft: "10dp",
        autoCorrect: "false",
        hintText: "Password",
        width: "100%",
        height: "40dp",
        passwordMask: "true",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId7 = Ti.UI.createTableView({
        data: __alloyId9,
        style: Ti.UI.iPhone.TableViewStyle.grouped,
        borderRadius: "10dp",
        height: "80dp",
        scrollable: "false",
        top: "10",
        id: "__alloyId7"
    });
    $.__views.login.add($.__views.__alloyId7);
    $.__views.__alloyId13 = Ti.UI.createView({
        top: "10",
        layout: "horizontal",
        height: "40dp",
        id: "__alloyId13"
    });
    $.__views.login.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createButton({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp",
            fontWeight: "bold"
        },
        backgroundLeftCap: "18dp",
        backgroundTapCap: "18dp",
        height: "40dp",
        left: "10",
        color: "#ddd",
        title: "Sign in with Google",
        backgroundImage: "/images/buttons/orangeButton.png",
        width: "150dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.loginButton = Ti.UI.createButton({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp",
            fontWeight: "bold"
        },
        backgroundLeftCap: "18dp",
        backgroundTapCap: "18dp",
        height: "40dp",
        left: "10",
        color: "#ddd",
        title: "Sign In",
        id: "loginButton",
        backgroundImage: "/images/buttons/blueButton.png",
        width: "100dp"
    });
    $.__views.__alloyId13.add($.__views.loginButton);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: "1dp",
        width: "100%",
        borderColor: "#ddd",
        backgroundColor: "#ddd",
        top: "30",
        id: "__alloyId15"
    });
    $.__views.login.add($.__views.__alloyId15);
    $.__views.forgotPassword = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#ddd",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "20",
        text: "Forgot Password?",
        id: "forgotPassword"
    });
    $.__views.login.add($.__views.forgotPassword);
    $.__views.copyright = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#ddd",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: "10dp",
        text: "© 2013 Dominion Enterprises",
        id: "copyright"
    });
    $.__views.index.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var slide_to_view = Titanium.UI.createAnimation({
        left: "0%",
        duration: 300
    });
    var slide_it_left = Titanium.UI.createAnimation({
        left: "100%",
        duration: 300
    });
    {
        Titanium.UI.createAnimation({
            left: "-100%",
            duration: 300
        });
    }
    var home;
    $.loginButton.addEventListener("click", function() {
        home = Alloy.createController("home").getView();
        home.open();
    });
    Ti.App.addEventListener("app:gotoLogin", function() {
        Ti.API.info("got login");
        home.close(slide_it_left);
        $.index.animate(slide_to_view);
    });
    $.forgotPassword.addEventListener("click", function() {
        Titanium.Platform.openURL("http://forrent.com/contactus.php");
    });
    $.index.open();
    $.loginButton.fireEvent("click");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;