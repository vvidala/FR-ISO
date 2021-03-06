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
        height: Ti.UI.SIZE,
        hasChild: "false",
        id: "FRCOrder"
    });
    $.__views.FRCOrder && $.addTopLevelView($.__views.FRCOrder);
    $.__views.contents = Ti.UI.createView({
        height: Ti.UI.SIZE,
        backgroundColor: "#eee",
        borderRadius: "12dp",
        width: "98%",
        top: "5dp",
        bottom: "5dp",
        id: "contents",
        layout: "vertical"
    });
    $.__views.FRCOrder.add($.__views.contents);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "98%",
        top: "10dp",
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
        height: Ti.UI.SIZE,
        width: "98%",
        top: "10dp",
        id: "__alloyId17"
    });
    $.__views.contents.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: Ti.UI.SIZE,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
        text: "# of spotlights:",
        id: "__alloyId22"
    });
    $.__views.__alloyId18.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: Ti.UI.SIZE,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
        text: "0",
        id: "numSpotlights"
    });
    $.__views.__alloyId23.add($.__views.numSpotlights);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: Ti.UI.SIZE,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
        text: "Translation Upg:",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: Ti.UI.SIZE,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
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
        width: Ti.UI.FILL,
        text: "NO",
        id: "translationUpg"
    });
    $.__views.__alloyId28.add($.__views.translationUpg);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "98%",
        top: "0",
        bottom: "10dp",
        layout: "horizontal",
        id: "__alloyId29"
    });
    $.__views.contents.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "20%",
        top: "0dp",
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
        width: Ti.UI.FILL,
        text: "Comments:",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: Ti.UI.SIZE,
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
        width: Ti.UI.FILL,
        text: "ISO Notes: CS Notes: 3/14 - Contacted. 3/4 Page is ready4/14/2011- 2nd Contacted for Welcome\n09/30 Resent 3rd  Welcome email to social contact and AE. Pending for Social Contact to be Admin.\n\n1/19/12: Resent MPE welcome email (CC'd AE)\n\n7-16. Followed up with welcome email to property, sent followup email to AE. 5x contacting\nhttps://www.facebook.com/pages/Pine-Creek-Village/172176792829624\n\n9.18. Fwded email to Lisa Cumar and copied in GSM Jason Villarreal to see if property is still interested in package.",
        id: "comments",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId32.add($.__views.comments);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;