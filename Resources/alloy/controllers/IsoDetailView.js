function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.IsoDetailView = Ti.UI.createWindow({
        backgroundColor: "#cccccc",
        navBarHidden: false,
        hideTabBar: true,
        id: "IsoDetailView"
    });
    $.__views.IsoDetailView && $.addTopLevelView($.__views.IsoDetailView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;