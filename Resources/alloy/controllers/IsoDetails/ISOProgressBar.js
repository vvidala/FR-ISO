function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IsoDetails/ISOProgressBar";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.ISOProgressBar = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "130dp",
        hasChild: "false",
        touchEnabled: "false",
        id: "ISOProgressBar"
    });
    $.__views.ISOProgressBar && $.addTopLevelView($.__views.ISOProgressBar);
    $.__views.contents = Ti.UI.createView({
        backgroundColor: "#eee",
        height: "120dp",
        borderRadius: "12dp",
        width: "98%",
        id: "contents",
        layout: "vertical",
        touchEnabled: "false"
    });
    $.__views.ISOProgressBar.add($.__views.contents);
    $.__views.__alloyId33 = Ti.UI.createView({
        width: "98%",
        top: "10dp",
        height: "20dp",
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.contents.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#111",
        top: 0,
        ellipsize: true,
        text: "Order Status:",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#0574B1",
        top: 0,
        left: "10dp",
        ellipsize: true,
        text: "New",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: "98%",
        top: "10dp",
        height: "100dp",
        id: "__alloyId36"
    });
    $.__views.contents.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        image: "/images/statusbar-40px.png",
        top: "10dp",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        width: "98%",
        top: "10dp",
        height: "20dp",
        id: "__alloyId38"
    });
    $.__views.contents.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#111",
        top: 0,
        ellipsize: true,
        text: "Order Status",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;