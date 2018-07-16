Adding Package Manager Support

***Website***
-	Create new selector component for the specified package manager (mimic selectors like NpmSelector.js, NuGetSelector.js, RubyGemsSelector.js, etc.)
***The type is the package type and the provider is the website where the package is hosted***
-	Create new route in clearlyDefined.js API to call service API to search for packages 
-	Create new version picker component for the specified package manager (mimic selectors like Npm VersionPicker.js, NuGetVersionPicker.js, RubyGemsVersionPicker.js, etc.)
-	Create new route in clearlyDefined.js API to call service API to search for package versions
-	Add case for package manager in getRevisionUrl() and getComponentURL() in DefinitionEntry.js
-	Add package manager logo image to image folder
-	Add case in getImage() in DefinitionEntry.js and HarvestQueueList.js

***Service***
-	Create new origin route for the specified package manager (mimic origins like originNPM.js, originNuget.js, originRubyGems.js, etc.)
-	‘/:name’ : Returns array of objects mapping “id” to package name (ex. [{id: package1}, {id: package2}, {id: package3}])
-	‘/:name/revisions’: Returns array of all versions of a specific package
-	Add package type to array in _getEntry(entry, type) function in file.js
-	Add route of new origin to app.js
-	Add type and provider to schema enum arrays in definition.json and curation.json

***Crawler***
-	Create new fetcher for the specified package manager (mimic fetcher like mavenFetch.js, npmjsFetch.js, rubyGemsFetch.js, etc)
-	canHandle(): return true if the specific fetcher can be used to process the request
-	handle(): fetch all possible information about a package (registry data, source code files, metadata, manifests, etc.)
***Make sure you unzip all possible files/directories and store the locations of the unzipped files/directories in the request document object***
-	Create a new extractor for the specified package manager (mimic extractor like mavenExtract.js, npmExtract.js, gemExtract.js, etc)
-	canHandle(): return true if the specific extractor can be used to process the request
-	handle(): create a new document with all the compiled information from the fetcher. Look for key data like release date, source location, and declared licenses. 
-	If the source code was found for a specific request call the scancode extractor
-	If the request is of type source call the source extractor
-	Add new block to map.js for the specified package manager and any other block it belongs to (package and entities)
-	If the new block was also placed in package then add package manager to array in canHandle() in package.js
-	Add new entry in cdConfig.js for fetch and process for the specified package manager
-	Add new entry in index.js for fetch and process for the specified package manager
