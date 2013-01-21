section: intro

# Configuration

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
