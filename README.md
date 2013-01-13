# Testacular Docs


## Installation & Building

Install modules

```bash
$ npm install
```
Install [grunt-cli]
```bash
$ npm install -g grunt-cli
```
Run build
```bash
$ grunt
```



## Templates

The templates are run through [panda-docs] and provide the following 
variables:

### provided by panda-docs

* `content` is the transformed HTML content of your Markdown file
* `metadata` is an object containing your document-based metadata values
* `manifest` is an object containing the Manifest.json properties
* `toh` is an object containing the headings for each file (`h1`, `h2`, _e.t.c._). See below for more information on this object.
* `headingTable` is a function you can use to generate a list of your page's table of contents. See below for more information on using this
* `fileName` is the name of the resulting file (without the extension)
* `title` is the title of the documentation
* `pageTitle` is the title of the current page
* `mtime` indicates the last modified time of your source file
* `markdown` references the Markdown converter; since this is based on namp, you'll want to add `.html` at the end to get the actual HTML

### provided buy `tasks/pandadoc.js`

* `versions` is a list of all available versions as found in `src`.
* `currentVersion` is the current version that is being built.
* `fileList` is an object containing the necessary information about
  the available documents for the current build.

[grunt-cli]:
[panda-docs]: https://github.com/gjtorikian/panda-docs
