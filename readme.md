# Qlik Sense ExportScript
> Export/Import Script button for Qlik Sense



![](https://github.com/RobWunderlich/com-qlikcookbook-ExportScript/raw/master/docs/images/ExportScript-image.png)

## Purpose and Description
The Visualization Extension ***com-qlikcookbook-ExportScript*** for Qlik Sense allows you to add a button to a Qlik Sense sheet to provide for exporting the app script to an external file, or import script from an external file. 

This extension will only work when used from a browser window.  It will not work when used from the Qlik Sense desktop.  You can use a browser window with Qlik Sense desktop by opening a browser window to http://localhost:4848

Click the "Export Script" button to export the current script to an external file. The export file will be created in the browser download folder and will be named "appname.txt". 

To import a script file, click the "Import Script" button to choose a file or drag a file to the "Import Script" button.  The imported script will completey replace the existing script. 

## Installation & Download
1. Download the [latest version](https://github.com/RobWunderlich/com-qlikcookbook-ExportScript/raw/master/build/com-qlikcookbook-ExportScript_latest.zip) or [any other version](https://github.com/RobWunderlich/com-qlikcookbook-ExportScript/tree/master/build) you want to install.
2. Then install on either *Qlik Sense Desktop* or *Qlik Sense Server*:

* Qlik Sense Desktop
	* To install, unzip all files and copy the content to the folder `"C:\Users\%USERNAME%\Documents\Qlik\Sense\Extensions\com-qlikcookbook-ExportScript"`
* Qlik Sense Server
	* See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/sense/2.0/en-US/online/#../Subsystems/ManagementConsole/Content/import-extensions.htm)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/RobWunderlich/com-qlikcookbook-ExportScript/issues).
The process for contributing is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.


## Author
**Rob Wunderlich**

* [QlikCookbook.com](http://qlikviewcookbook.com)  
* [twitter/qvcookbook](http://twitter.com/qvcookbook)  
* [github.com/robwunderlich](http://github.com/robwunderlich)  

## License
Released under the MIT license.