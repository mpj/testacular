section: config

# Configuration File

To configure Testacular you use a configuration file and supply this
file when starting Testacular.
Here is a list of all possible configuration values that can be used,
including their default values.

## basePath

**Type.** String

**Default.** `''`

**Description.**  Base path, that will be used to resolve files and exclude.

## files

**Type.** Array

**Default.**   `[]`

**Description.** List of files/patterns to load in the browser. See [[Files]] for more information.


## exclude
**Type.** Array

**Default.**   `[]`

**Description.** List of files to exclude.


## reporters
**Type.** Array

**Default.**   `['progress']`

**Possible Values.**

* `dots`

* `progress`

* `junit`

**Description.** A list of reporters to use. See [[Reporters]] for
  more.
  

## port
**Type.** Number

**Default.** `8080`

**Description.** Web server port 


## runnerPort
**Type.** Number

**Default.** `9100`

**Description.** Cli runner port 


## colors
**Type.** Boolean

**Default.**   `true`

**Description.**  Enable / disable colors in the output (reporters and logs).
  

## logLevel
**Type.** Constant

**Default.** `LOG_INFO`

**Possible values.**

* `LOG_DISABLE`
* `LOG_ERROR`
* `LOG_WARN`
* `LOG_INFO`
* `LOG_DEBUG` 

**Description.** Level of logging.


## autoWatch
**Type.** Boolean

**Default.**  `false`

**Description.** Enable/disable watching file and executing tests
  whenever any file changes.
  

## browsers
**Type.** Array

**Default.**  `[]` 

**Possible Values.**

* `Chrome`
* `ChromeCanary`
* `Firefox`
* `Opera`
* `Safari`
* `PhantomJS`

**Description.** A list of browsers to test in. See [[Browsers]] for more.
   

## singleRun
**Type.** Boolean

**Default.**   `false`

**Description.** Continuous Integration mode if `true`, it captures
  browsers, runs tests and exits.

## preprocessors
**Type.** Object

**Default.**   `{}`

**Description.** List modules to preprocess your files before they get
  served to the browser. 
  
  See [[Preprocessors]] for more.

## proxies
**Type.** Object

**Default.**   `{}`

**Description.** List path-proxy pairs.  For example: 

```javascript
proxies =  {
  '/static': 'http://gstatic.com', 
  '/web': 'http://localhost:9000'
};
```
