function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createTabGroup({
        backgroundColor: "#2B6682",
        left: "100%",
        top: "0",
        navBarHidden: false,
        hideTabBar: true,
        id: "home"
    });
    $.__views.mainWindow = Ti.UI.createWindow({
        id: "mainWindow",
        title: "ISO",
        tabBarHidden: "true"
    });
    $.__views.test = Ti.UI.createButton({
        title: "Test",
        id: "test"
    });
    $.__views.mainWindow.add($.__views.test);
    $.__views.__alloyId11 = Ti.UI.createTab({
        window: $.__views.mainWindow,
        title: "whatever",
        id: "__alloyId11"
    });
    $.__views.home.addTab($.__views.__alloyId11);
    $.__views.home && $.addTopLevelView($.__views.home);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var logout = Ti.UI.createButton({
        title: "Log Out",
        id: "logOut"
    });
    logout.addEventListener("click", function() {
        Ti.API.info("closing view");
        Ti.App.fireEvent("app:gotoLogin");
    });
    $.mainWindow.leftNavButton = logout;
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.mainWindow.animate({
            right: 0
        });
    });
    var bb1 = Titanium.UI.createButtonBar({
        labels: [ "One", "Two", "Three" ],
        backgroundColor: "#336699",
        top: 50,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        height: 25,
        width: 200
    });
    $.mainWindow.rightNavButton = bb1;
    $.test.addEventListener("click", function() {
        var win = Ti.UI.createWindow({
            title: "Test",
            hideTabBar: true
        });
        $.home.activeTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;