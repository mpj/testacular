# CoffeeScript

If you want to use CoffeeScript for any files that Testacular uses, you can. 
With the Testacular preprocessors you can automagically 
compile your files whenever they change and let compiled versions be served by 
Testacular.

## Configuration
If you add this
```javascript
preprocessors = {
  '**/*.coffee': 'coffee'
}
```
to your configuration file all files that you added under the `files` option, that 
end in `.coffee` will be processed by CoffeeScript before Testacular serves them
to the browser. For more information on how to configure preprocessors, see [[Preprocessors#Minimatch]].
