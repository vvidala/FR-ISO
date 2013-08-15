var siteInfoView = Alloy.createController("IsoDetails/SiteInfo").getView();
var frcOrderView = Alloy.createController("IsoDetails/FRCOrder").getView();
var rows = [siteInfoView, frcOrderView];
$.isoDetailTable.data = rows;
