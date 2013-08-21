function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IsoDetails/SiteInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.SiteInfo = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        hasChild: "false",
        id: "SiteInfo"
    });
    $.__views.SiteInfo && $.addTopLevelView($.__views.SiteInfo);
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
    $.__views.SiteInfo.add($.__views.contents);
    $.__views.__alloyId52 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "98%",
        top: "5dp",
        id: "__alloyId52"
    });
    $.__views.contents.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        color: "#111",
        top: 0,
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "Apartment Information",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "98%",
        top: "5dp",
        bottom: "10dp",
        id: "__alloyId54"
    });
    $.__views.contents.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "15%",
        left: "0%",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Apt Name:",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "PMC:",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "City Office:",
        id: "__alloyId58"
    });
    $.__views.__alloyId55.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Employee:",
        id: "__alloyId59"
    });
    $.__views.__alloyId55.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "45%",
        left: "15%",
        id: "__alloyId60"
    });
    $.__views.__alloyId54.add($.__views.__alloyId60);
    $.__views.aptName = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "River View Park Aparment Homes",
        id: "aptName"
    });
    $.__views.__alloyId60.add($.__views.aptName);
    $.__views.pmc = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "Pine Creek Investments",
        id: "pmc"
    });
    $.__views.__alloyId60.add($.__views.pmc);
    $.__views.cityOffice = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "Atlanta, GA",
        id: "cityOffice"
    });
    $.__views.__alloyId60.add($.__views.cityOffice);
    $.__views.employee = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "WHITNEY A SULLENDER",
        id: "employee"
    });
    $.__views.__alloyId60.add($.__views.employee);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "15%",
        left: "60%",
        id: "__alloyId61"
    });
    $.__views.__alloyId54.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Site Id:",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Assigned To:",
        id: "__alloyId63"
    });
    $.__views.__alloyId61.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Account #:",
        id: "__alloyId64"
    });
    $.__views.__alloyId61.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Contract #:",
        id: "__alloyId65"
    });
    $.__views.__alloyId61.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "25%",
        left: "75%",
        id: "__alloyId66"
    });
    $.__views.__alloyId54.add($.__views.__alloyId66);
    $.__views.siteId = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "1000010783",
        id: "siteId"
    });
    $.__views.__alloyId66.add($.__views.siteId);
    $.__views.assignedTo = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "sderbes",
        id: "assignedTo"
    });
    $.__views.__alloyId66.add($.__views.assignedTo);
    $.__views.accountNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "1300574",
        id: "accountNum"
    });
    $.__views.__alloyId66.add($.__views.accountNum);
    $.__views.contractNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontWeight: "bold",
            fontSize: "16dp"
        },
        color: "#111",
        top: "5dp",
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "---------",
        id: "contractNum"
    });
    $.__views.__alloyId66.add($.__views.contractNum);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;