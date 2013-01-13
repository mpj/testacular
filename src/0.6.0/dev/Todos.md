# Todos

I went through my list and these are the ones that I think are more important. Items within a section are ordered by priority.

## FEATURES

* auto reload config change (at least files,exclude)
* timeout (per spec/suite)
* handle unload event (full page reload)
* sudden death (first failure, stop execution)
* global ~/.testacular config [#64](https://github.com/vojtajina/testacular/issues/264)
* normalize browser errors
* use single port for web/cli (remove runner-port)
* don't synchronize browsers (don't wait for all browsers, just execute) + sharding


## INTERNAL/REFACTORING

* better e2e framework (for testing Testacular)
* reorganize: plugins (reporters, preprocessors, adapters, launchers) [#158](https://github.com/vojtajina/testacular/i158)
* refactor logger to support appending to files (log4js) [#188](https://github.com/vojtajina/testacular/pull/188)
* refactor web server using connect [#253](https://github.com/vojtajina/testacular/issues/253) and [#105](https://github.com/vojtajina/testacular/issues/105)
* don't watch non-matching files
* write some descriptions/comments to each module/component 

## BUGS

* chokidar https://github.com/paulmillr/chokidar/issues/16


## ORGANIZATION

* better release cycle, automate canary release ? [#210](https://github.com/vojtajina/testacular/issues/210)
* git commit msg convention + generating changelog
* pre-commit hook (unmerged stuff, iit, ddescribe)
* pre-commit hook (check msg convention)
* JS Validator, see [this](http://ariya.ofilabs.com/2012/10/javascript-validator-with-esprima.html) post either as pre-commit hook or as grunt task

## DOCS

* polish the docs and publish it on the homepage
