function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.IsoTableView = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "IsoTableView"
    });
    $.__views.IsoTableView && $.addTopLevelView($.__views.IsoTableView);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        id: "__alloyId0"
    });
    $.__views.IsoTableView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;