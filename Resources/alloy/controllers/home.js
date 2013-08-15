function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createTabGroup({
        backgroundColor: "#cccccc",
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
    $.__views.isoTable = Ti.UI.createTableView({
        backgroundColor: "#cccccc",
        id: "isoTable",
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
    });
    $.__views.mainWindow.add($.__views.isoTable);
    $.__views.__alloyId46 = Ti.UI.createTab({
        window: $.__views.mainWindow,
        title: "whatever",
        id: "__alloyId46"
    });
    $.__views.home.addTab($.__views.__alloyId46);
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
    var bb1 = Titanium.UI.createButtonBar({
        labels: [ "One", "Two", "Three" ],
        backgroundColor: "#336699",
        top: 50,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        height: 25,
        width: 200
    });
    $.mainWindow.rightNavButton = bb1;
    var rows = [];
    var websites = [ "images/frc-apple-touch-icon.png", "/images/prc-apple-touch-icon.png", "/images/fru-apple-touch-icon.gif" ];
    var type = [ "images/new-icon.png", "images/thumbs-up-icon.png", "images/thumbs-down-icon.png" ];
    for (var i = 0; 10 > i; i++) {
        var row = Alloy.createController("IsoTableViewRow");
        row.websiteIcon.image = websites[Math.floor(3 * Math.random())];
        row.typeIcon.image = type[Math.floor(3 * Math.random())];
        rows.push(row.getView());
    }
    $.isoTable.data = rows;
    $.isoTable.addEventListener("click", function(e) {
        Ti.API.info("click recieved");
        var detailWindow = Alloy.createController("IsoDetailView").getView();
        detailWindow.data = e.rowData;
        $.home.activeTab.open(detailWindow);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;