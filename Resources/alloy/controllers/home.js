function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        id: "home",
        title: "Internet Service Order",
        navBarHidden: "false"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.home.activity.onCreateOptionsMenu = function(e) {
        var __alloyId17 = {
            id: "menuItem",
            title: "Search",
            icon: "/images/action_search.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId17, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId17, Alloy.Android.menuItemCreateArgs));
        var __alloyId18 = {
            id: "menuItem",
            title: "Refresh",
            icon: "/images/navigation_refresh.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId18, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId18, Alloy.Android.menuItemCreateArgs));
        var __alloyId19 = {
            id: "menuItem",
            title: "Item 3",
            icon: "/images/action_about.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER
        };
        $.__views.menuItem = e.menu.add(_.pick(__alloyId19, Alloy.Android.menuItemCreateArgs));
        $.__views.menuItem.applyProperties(_.omit(__alloyId19, Alloy.Android.menuItemCreateArgs));
    };
    $.__views.isoTable = Ti.UI.createTableView({
        backgroundColor: "#cccccc",
        id: "isoTable",
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
    });
    $.__views.home.add($.__views.isoTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.home;
    Ti.API.info("Building android menu");
    var rows = [];
    var websites = [ "/images/frc-apple-touch-icon.png", "/images/prc-apple-touch-icon.png", "/images/fru-apple-touch-icon.gif" ];
    var type = [ "/images/new-icon.png", "/images/thumbs-up-icon.png", "/images/thumbs-down-icon.png" ];
    for (var i = 0; 10 > i; i++) {
        var row = Alloy.createController("IsoTableViewRow");
        row.websiteIcon.image = websites[Math.floor(3 * Math.random())];
        row.typeIcon.image = type[Math.floor(3 * Math.random())];
        rows.push(row.getView());
    }
    $.isoTable.data = rows;
    $.isoTable.addEventListener("click", function(e) {
        Ti.API.info("click recieved");
        Ti.UI.createWindow({
            title: "River View Park Apartment Homes",
            data: e.rowData
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;