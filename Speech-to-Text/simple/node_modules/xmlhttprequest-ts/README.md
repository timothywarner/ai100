# xmlhttprequest-ts #

xmlhttprequest-ts is a typescript wrapper for the built-in http client to emulate the
browser XMLHttpRequest object and allow isomorphic code that runs in the browser and in node.js.

This can be used with JS designed for browsers to improve reuse of code and
allow the use of existing libraries.

Ready for AOT and treeshaking in combination with Angular and other modern typescript frameworks.

## Usage ##

Here's how to include the module in your project using the typescript method:

    import { XMLHttpRequest } from 'xmlhttprequest-ts';

    var xhr = new XMLHttpRequest();

Here's how to include the module in your project using the normal node.js method:

    const { XMLHttpRequest } = require("xmlhttprequest-ts");

    var xhr = new XMLHttpRequest();

Note: use the lowercase string "xmlhttprequest-ts" in your require(). On
case-sensitive systems (eg Linux) using uppercase letters won't work.

## Versions ##

Since the XMLHttpRequest API is stable this library's API is stable as
well. Major version numbers indicate significant core code changes.
Minor versions indicate minor core code changes or better conformity to
the W3C spec.

## License ##

MIT license. See LICENSE for full details.

## Supports ##

* Async and synchronous requests
* GET, POST, PUT, and DELETE requests
* All spec methods (open, send, abort, getRequestHeader,
  getAllRequestHeaders, event methods)
* Requests to all domains

## Known Issues / Missing Features ##

For a list of open issues or to report your own visit the [github issues
page](https://github.com/hmoog/xmlhttprequest-ts/issues).

* Local file access may have unexpected results for non-UTF8 files
* Synchronous requests don't set headers properly
* Synchronous requests freeze node while waiting for response (But that's what you want, right? Stick with async!).
* Cookies aren't persisted between requests
* Missing responseXML support (the DOM doesn't exist in node)

## Fixed Issues ##

This is a typescript port of [this library](https://github.com/driverdan/node-XMLHttpRequest/) and the following issues were fixed:

* writes the temp files to the temp folder with sync requests for compatibility with AWS Lambda
* unescapes pathname from url when loading from local filesystem
* added the constants to both prototype and class itself
* redirect code now correctly maintains protocol changes and hostname changes
* added timeout to requests
* prevents redirect loops by throwing an error
* prevents reset of headers upon abort
* correctly supports all events