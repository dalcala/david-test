// observer functions
var dsEventsObserver = new Object;
dsEventsObserver.onPostLoad = function(dataSet, data)
{
	mainContent.loadContent("spryevents_masterdetail.html", {id:"masterdetail"});
};
var mainContent;
var dsEvents;

Spry.Utils.addLoadListener(function()
{
	// create dataset, add observer, and load data
	dsEvents = new Spry.Data.HTMLDataSet(null, "mainContent", {hideDataSourceElement:false, firstRowAsHeaders:false, rowSelector:".event", dataSelector:".eventimage, h2, .location, .date, .description", columnNames:["eventimage","name","location","displaydate","description"]});
	dsEvents.addObserver(dsEventsObserver);
	dsEvents.loadData();
	
	// create htmlpanel and add observer
	mainContent = new Spry.Widget.HTMLPanel("mainContent");
	var mainContentObserver = new Object;
	mainContentObserver.onPostUpdate = function(dataSet, data)
	{
		// attach spry attributes to markup that was loaded into panel
		Spry.$("masterbox").setAttribute('spry:region', 'dsEvents');
		Spry.$("eventheader").setAttribute('spry:sort', 'date');
		Spry.$("locationheader").setAttribute('spry:sort', 'location');
		Spry.$("detailbox").setAttribute('spry:detailregion', 'dsEvents');
		Spry.$$(".eventrow").setAttribute('spry:repeat', 'dsEvents');
		Spry.$$(".eventrow").setAttribute('spry:hover', 'rowHover');
		Spry.$$(".eventrow").setAttribute('spry:select', 'rowSelected');
		Spry.$$(".eventrow").setAttribute('spry:setrow', 'dsEvents');
		
		// now process the spry region (resolve data references)
		Spry.Data.initRegions();
	  
	};
	mainContent.addObserver(mainContentObserver);

});



