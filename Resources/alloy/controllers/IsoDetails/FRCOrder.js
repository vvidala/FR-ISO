function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IsoDetails/FRCOrder";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.FRCOrder = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "320dp",
        hasChild: "false",
        id: "FRCOrder"
    });
    $.__views.FRCOrder && $.addTopLevelView($.__views.FRCOrder);
    $.__views.contents = Ti.UI.createView({
        backgroundColor: "#eee",
        height: "310dp",
        borderRadius: "12dp",
        width: "98%",
        id: "contents",
        layout: "vertical"
    });
    $.__views.FRCOrder.add($.__views.contents);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: "98%",
        top: "10dp",
        height: "25dp",
        id: "__alloyId15"
    });
    $.__views.contents.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#111",
        top: 0,
        left: "5dp",
        width: "100%",
        ellipsize: true,
        text: "ForRent.Com Order",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        width: "98%",
        top: "10dp",
        height: "110dp",
        id: "__alloyId17"
    });
    $.__views.contents.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        width: "25%",
        left: "0%",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Campaign Start:",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Print Ad Size:",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "FRU Package:",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "# of spotlights:",
        id: "__alloyId22"
    });
    $.__views.__alloyId18.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "vertical",
        width: "25%",
        left: "25%",
        id: "__alloyId23"
    });
    $.__views.__alloyId17.add($.__views.__alloyId23);
    $.__views.campaignDate = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "2013-09-12",
        id: "campaignDate"
    });
    $.__views.__alloyId23.add($.__views.campaignDate);
    $.__views.printAdSize = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "------",
        id: "printAdSize"
    });
    $.__views.__alloyId23.add($.__views.printAdSize);
    $.__views.fruPackage = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "------",
        id: "fruPackage"
    });
    $.__views.__alloyId23.add($.__views.fruPackage);
    $.__views.numSpotlights = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "0",
        id: "numSpotlights"
    });
    $.__views.__alloyId23.add($.__views.numSpotlights);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "vertical",
        width: "25%",
        left: "50%",
        id: "__alloyId24"
    });
    $.__views.__alloyId17.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Billing Date:",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Internet Pkg:",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Translation Upg:",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        width: "25%",
        left: "75%",
        id: "__alloyId28"
    });
    $.__views.__alloyId17.add($.__views.__alloyId28);
    $.__views.billDate = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "2013-09-15",
        id: "billDate"
    });
    $.__views.__alloyId28.add($.__views.billDate);
    $.__views.internetPkg = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "------",
        id: "internetPkg"
    });
    $.__views.__alloyId28.add($.__views.internetPkg);
    $.__views.translationUpg = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "NO",
        id: "translationUpg"
    });
    $.__views.__alloyId28.add($.__views.translationUpg);
    $.__views.__alloyId29 = Ti.UI.createView({
        width: "98%",
        top: "0",
        height: "150dp",
        layout: "horizontal",
        id: "__alloyId29"
    });
    $.__views.contents.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        width: "20%",
        left: "0%",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Comments:",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "vertical",
        width: "78%",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    $.__views.comments = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        width: "100%",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: "comments"
    });
    $.__views.__alloyId32.add($.__views.comments);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;