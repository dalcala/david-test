
dsEvents = new Spry.Data.XMLDataSet("aquoevents.xml", "events/event");


Spry.Utils.addLoadListener(function() {
	Spry.$$('#eventheader').setAttribute('spry:sort', 'date');
	Spry.$$('#locationheader').setAttribute('spry:sort', 'location');
	Spry.$$('tr.eventrow').setAttribute('spry:repeat', 'dsEvents').setAttribute('spry:hover', 'rowHover').setAttribute('spry:select', 'rowSelected').setAttribute('spry:setrow', 'dsEvents');
	Spry.$$('#masterbox').setAttribute('spry:region', 'dsEvents');
	Spry.$$('#detailbox').setAttribute('spry:detailregion', 'dsEvents');
});
