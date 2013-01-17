section: dev

# Events

#### browser_register(browser)
* **Description.** Browser sent name and id.

#### function:: browser_complete(browser)
* **Description.** Browser completed an execution run. (All tests were executed/skipped or browser disconnected). 

#### browser_error(browser, error)
* **Description.** Browser sent error (probably syntax error during loading).

#### browser_dump(browser, dump)
* **Description.** Browser sent dump.

#### browsers_change(collection)
* **Description.** Collection of captured browsers changed:
  - new browser
  - browser disconnected
  - browser changed status

#### spec_complete(browser, result)
* **Description.** Single spec completed.

#### run_start(collection)
* **Description.** Starting new execution run.

#### run_complete(collection)
* **Description.** Whole execution run finished (all browsers finished).
