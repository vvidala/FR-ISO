function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IsoDetails/FRSocialOrder";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.FRSocialOrder = Ti.UI.createTableViewRow({
        backgroundColor: "transparent",
        height: "160dp",
        hasChild: "false",
        id: "FRSocialOrder"
    });
    $.__views.FRSocialOrder && $.addTopLevelView($.__views.FRSocialOrder);
    $.__views.contents = Ti.UI.createView({
        backgroundColor: "#eee",
        borderRadius: "12dp",
        width: "98%",
        id: "contents",
        layout: "vertical"
    });
    $.__views.FRSocialOrder.add($.__views.contents);
    $.__views.__alloyId33 = Ti.UI.createView({
        width: "98%",
        top: "5dp",
        height: "25dp",
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
        left: "5dp",
        ellipsize: true,
        width: "100%",
        text: "FRSocial Order",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        width: "98%",
        top: "5dp",
        id: "__alloyId35"
    });
    $.__views.contents.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        width: "15%",
        left: "0%",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Apt Name:",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "PMC:",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "City Office:",
        id: "__alloyId39"
    });
    $.__views.__alloyId36.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Employee:",
        id: "__alloyId40"
    });
    $.__views.__alloyId36.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "vertical",
        width: "45%",
        left: "15%",
        id: "__alloyId41"
    });
    $.__views.__alloyId35.add($.__views.__alloyId41);
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
    $.__views.__alloyId41.add($.__views.aptName);
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
    $.__views.__alloyId41.add($.__views.pmc);
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
    $.__views.__alloyId41.add($.__views.cityOffice);
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
    $.__views.__alloyId41.add($.__views.employee);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "vertical",
        width: "15%",
        left: "60%",
        id: "__alloyId42"
    });
    $.__views.__alloyId35.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Site Id:",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Assigned To:",
        id: "__alloyId44"
    });
    $.__views.__alloyId42.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Account #:",
        id: "__alloyId45"
    });
    $.__views.__alloyId42.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        font: {
            fontFamily: "Open Sans, Verdana, Geneva",
            fontSize: "16dp"
        },
        color: "#333",
        top: "5dp",
        left: "5dp",
        text: "Contract #:",
        id: "__alloyId46"
    });
    $.__views.__alloyId42.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "vertical",
        width: "25%",
        left: "75%",
        id: "__alloyId47"
    });
    $.__views.__alloyId35.add($.__views.__alloyId47);
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
    $.__views.__alloyId47.add($.__views.siteId);
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
    $.__views.__alloyId47.add($.__views.assignedTo);
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
    $.__views.__alloyId47.add($.__views.accountNum);
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
    $.__views.__alloyId47.add($.__views.contractNum);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;