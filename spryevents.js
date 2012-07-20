
dsOptions = {};
dsOptions.hideDataSourceElement = false;
dsOptions.firstRowAsHeaders = false;
dsOptions.rowSelector=".event";
dsOptions.dataSelector=".eventimage, h2, .location, .date, .description";
dsOptions.columnNames=["eventimage","name","location","displaydate","description"];

dsEvents = new Spry.Data.HTMLDataSet("events_static.html", "mainContent", dsOptions);


Spry.Utils.addLoadListener(function() {
	Spry.$$('#locationheader').setAttribute('spry:sort', 'location');
	Spry.$$('tr.eventrow').setAttribute('spry:repeat', 'dsEvents').setAttribute('spry:hover', 'rowHover').setAttribute('spry:select', 'rowSelected').setAttribute('spry:setrow', 'dsEvents');
	Spry.$$('#masterbox').setAttribute('spry:region', 'dsEvents');
	Spry.$$('#detailbox').setAttribute('spry:detailregion', 'dsEvents');
});
