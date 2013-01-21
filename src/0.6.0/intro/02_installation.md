section: intro

# Installation

Testacular uses [Node.js] and is available as a node module via npm. 
If you already got [Node.js] and npm installed and know how to install 
node modules go ahead, and look for it under `testacular`.

If you have never installed a node module or need a quick reminder continue
reading.

## Requirements

First, you need to install [Node.js]. There are installers for both
Macintosh and Windows. On Linux, we recommend using [NVM].

## With NPM

You can install Testacular either globally,
```bash
$ npm install -g testacular
# Executing
$ testacular start
```
or locally
```bash
$ npm install testacular
# Executing
$ ./node_modules/.bin/testacular start
```

## Without NPM

If you want to install it without npm you can do so:
```bash
# replace x.y.z with latest version
$ curl http://registry.npmjs.org/testacular/-/testacular-x.y.z.tgz | tar -xvz && mv package testacular

# create symlinks (optional)
cd testacular
$ sudo ln -s $PWD/bin/testacular /usr/local/bin/testacular
```



[Node.js]: http://nodejs.org/
[NVM]: https://github.com/creationix/nvm
