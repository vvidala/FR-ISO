function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IsoDetailView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.IsoDetailView = Ti.UI.createWindow({
        backgroundColor: "#cccccc",
        navBarHidden: false,
        hideTabBar: true,
        title: "River View Park Apartment Homes",
        id: "IsoDetailView"
    });
    $.__views.IsoDetailView && $.addTopLevelView($.__views.IsoDetailView);
    $.__views.isoDetailTable = Ti.UI.createTableView({
        backgroundColor: "#cccccc",
        separatorColor: "transparent",
        id: "isoDetailTable",
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
    });
    $.__views.IsoDetailView.add($.__views.isoDetailTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var siteInfoView = Alloy.createController("IsoDetails/SiteInfo").getView();
    var frcOrderView = Alloy.createController("IsoDetails/FRCOrder").getView();
    var progressBarView = Alloy.createController("IsoDetails/ISOProgressBar").getView();
    var rows = [ progressBarView, siteInfoView, frcOrderView ];
    $.isoDetailTable.data = rows;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;