snippets
========
HTML snippet library for generative applications.

## Usage

run ```bower install https://github.com/regenerate/snippets.git```
and use either ```bower_components/snippets/database.json``` or ```bower_components/snippets/database/*```

```
#tip: testing prior to commit can be staged as follows
# cd ../snippets/; node build.js; cd ../random/; cp ../snippets/database.json ./bower_components/snippets/
```

## Compilation Steps
Run build in the main directory, it will clobber the ./database.json

## Legal

* Build system is under Apache License Version 2.0, January 2004, see LICENSE
* See LICENSES for library code.