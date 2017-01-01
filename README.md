# hasDeepProperty
Check if object has deep/nested properties.

Checks if a nested property exists. Rather than check write out the full path for each level you want to check, now you can check the full path all at once
```javascript
// old messy way
if(obj.someProperty
    && obj.someProperty.anotherProp
    && obj.someProperty.anotherProp.moreProps
    && obj.someProperty.anotherProp.moreProps.youGetThePicture) {
    // do something
}

// new clean way
var hasDeepProperty = require('has-deep-property');
if(hasDeepProperty(obj, ['someProperty', 'anotherProp', 'moreProps', 'youGetThePicture'])) {
    // do something
}
```

## Installation

```
$ npm install --save hasDeepProperty
```

## API
hasDeepProperty takes two parameters:
* the object to check
* an array of properties to check

and returns `true` or `false` depending on whether the full path of properties exists
```
var hasDeepProperty = require('has-deep-property');

var obj = {
    foo: {
        bar: {
            baz: 'exists'
        }
    }
}

hasDeepProperty(obj, ['foo']); // true
hasDeepProperty(obj, ['foo', 'bar', 'baz']); // true
hasDeepProperty(obj, ['foo', 'buzz']); // false
```
