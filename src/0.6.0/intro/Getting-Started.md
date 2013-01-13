# Getting Started

## Requirements

First, you need to install [Node.js]. There are installers for both
Macintosh and Windows. On Linux, we recommend using [NVM].

## Installation 
### Global
```bash
$ npm install -g testacular
```

### Local
or install in a local folder (you have to create symlinks to binaries on
your own)

```bash
$ npm install testacular
```
### Without NPM
You can install Testacular even without NPM, just get the latest package
and create symlinks:

```bash
# replace x.y.z with latest version
$ curl http://registry.npmjs.org/testacular/-/testacular-x.y.z.tgz | tar -xvz && mv package testacular

# create symlinks (optional)
cd testacular
$ sudo ln -s $PWD/bin/testacular /usr/local/bin/testacular
```

## Basic Setup

Go into your project and create a testacular configuration. Basically
you need to specify the source files that you want to execute.

For an example configuration, see [test/client/testacular.conf.js]
which contains most of the options.
```bash
# create config file (testacular.conf.js by default)
$ testacular init

# start server
$ testacular start

# open browsers you want to test (if testacular is not configured to do it for you)
$ open http://localhost:8080

# if you want to run tests manually (without auto watching file changes), you can:
$ testacular run
```

[test/client/testacular.conf.js]: https://github.com/vojtajina/testacular/blob/master/test/client/testacular.conf.js
[adapter/jasmine.src.js]: https://github.com/vojtajina/testacular/blob/master/adapter/jasmine.src.js
[Node.js]: http://nodejs.org/
[NVM]: https://github.com/creationix/nvm
