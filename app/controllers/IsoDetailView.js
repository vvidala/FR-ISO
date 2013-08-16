var siteInfoView = Alloy.createController("IsoDetails/SiteInfo").getView();
var frcOrderView = Alloy.createController("IsoDetails/FRCOrder").getView();
var progressBarView = Alloy.createController("IsoDetails/ISOProgressBar").getView();
var rows = [progressBarView, siteInfoView, frcOrderView];
$.isoDetailTable.data = rows;
