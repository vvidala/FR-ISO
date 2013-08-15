function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.IsoTableViewRow = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "62dp",
        hasChild: "false",
        id: "IsoTableViewRow"
    });
    $.__views.IsoTableViewRow && $.addTopLevelView($.__views.IsoTableViewRow);
    $.__views.contents = Ti.UI.createView({
        backgroundColor: "#eee",
        height: "60dp",
        id: "contents"
    });
    $.__views.IsoTableViewRow.add($.__views.contents);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "8%",
        left: "0%",
        id: "__alloyId1"
    });
    $.__views.contents.add($.__views.__alloyId1);
    $.__views.websiteIcon = Ti.UI.createImageView({
        id: "websiteIcon",
        image: "/images/fru-apple-touch-icon.gif",
        height: "80%"
    });
    $.__views.__alloyId1.add($.__views.websiteIcon);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        width: "52%",
        left: "8%",
        id: "__alloyId2"
    });
    $.__views.contents.add($.__views.__alloyId2);
    $.__views.aptName = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        top: "5dp",
        left: "5dp",
        color: "#333",
        text: "River View Park Aparment Homes",
        id: "aptName"
    });
    $.__views.__alloyId2.add($.__views.aptName);
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        top: "5dp",
        left: "5dp",
        color: "#333",
        text: "Norfolk, VA (Pine Creek Investments)",
        id: "location"
    });
    $.__views.__alloyId2.add($.__views.location);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "vertical",
        width: "32%",
        left: "60%",
        id: "__alloyId3"
    });
    $.__views.contents.add($.__views.__alloyId3);
    $.__views.timeFrame = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        top: "7dp",
        left: "5dp",
        color: "#333",
        text: "Mar 01, 2011 - Mar 31, 2011",
        id: "timeFrame"
    });
    $.__views.__alloyId3.add($.__views.timeFrame);
    $.__views.assignedTo = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        top: "5dp",
        left: "5dp",
        color: "#333",
        text: "Assigned To: sderbes",
        id: "assignedTo"
    });
    $.__views.__alloyId3.add($.__views.assignedTo);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "8%",
        right: "0%",
        id: "__alloyId4"
    });
    $.__views.contents.add($.__views.__alloyId4);
    $.__views.typeIcon = Ti.UI.createImageView({
        id: "typeIcon",
        image: "/images/thumbs-up-icon.png",
        height: "80%"
    });
    $.__views.__alloyId4.add($.__views.typeIcon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;