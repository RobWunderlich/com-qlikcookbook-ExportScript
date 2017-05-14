 define( [
	 	"qlik",
 		"./lib/download",				// download.js module
		 "./lib/dropzone-amd-module",	// dropzone.js require.js module
		 "text!./com-qlikcookbook-ExportScript.html",
		 "css!./lib/css/com-qlikcookbook-ExportScript.css"
 ], function (qlik, download, dropzone, html) {
	
	var paintInitialized = false;
	return {
		support : {
			snapshot: false,
			export: false,
			exportData : false
		},
		paint: function ($element, layout) {
			if (!paintInitialized) {	// Do following code only if first time init
				$element.html(html);	// Inject the html from our template
				init(qlik, download, dropzone)	// Intialize
				paintInitialized = true;
			} 
		}
	};

});


function init(qlik, download, dropzone) {
// Script Export section
	$('#com-qlikcookbook-ExportScript-scriptExport').click(function() {	
		var engineApp = qlik.currApp(this).model.engineApp
		var filename = qlik.currApp(this).model.layout.qTitle + ".txt";	// App title will be used as filename
		engineApp.getScript().then(function (reply) {
			var script = reply.qScript;
			// Prepare script text for download
			var data = 'data:text/plain;charset=utf-8,' + encodeURIComponent(script);
			download(data, filename, "text/plain");	// Download in the browser
			$("#scriptExportStatus").html("Script exported");
		});	
	});

	// Script Upload section
	$("#com-qlikcookbook-ExportScript-scriptUpload").dropzone({ 	// Inject dropzone functionality into the "Import Script" button
		url: "#",	// url required, this is dummy
		previewsContainer: false,	// suppress preview display
		autoProcessQueue: false,	// don't let dropzone process files, we will do it ourself in accept() function
		accept: function(file, done) // Function executed when a file is selected or dropped
		{	
			var reader = new FileReader();
			reader.onload = function(){	// Callback for read complete
			// Ask user to confirm script replace
				var r = confirm("Confirm replace of application script with " + file.name + "?");
				if (r == true) {
					var engineApp = qlik.currApp(this).model.engineApp
					engineApp.setScript(reader.result);	// Replace the script in the app
					$("#com-qlikcookbook-ExportScript-scriptExportStatus").html("Script replaced from " + file.name);
				} else {
					$("#com-qlikcookbook-ExportScript-scriptExportStatus").html("Script replace cancelled");
				}
				
			};
			reader.readAsText(file);	// Read the file contents, onload() will fire when done					
			done();
		}	// end of accept function
	});
};				

