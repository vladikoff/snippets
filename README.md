Snippets [ARCHIVED]
========
HTML snippet library for generative applications.

## Opening Ceremony

* The repository opens with 53 snippets from bootsnipp and snipplicious.
* A lot of those files (source) are dated and require validation and repair. That is the first step.
* Consider this Library to contain MIT licensed Web-Design Patterns.

## Mission

* To store a Library of easy to edit snippets.
* Let them Evolve, let them Grow, let them seed many a project.

## Definition

* A snippet is the last component of a framework.
* It is the snippet and not component that makes the page.
* Snippets are the forlorn heroes of the code world.
* Snippets are both, one step short of components, and their supersets.

* Snippets are a community effort. They are the Artist's Sketch.
* Artists are busy people they will not always be able to give their snippets the exposure it deserves.
* Snippets Expire, as frameworks and CSS systems alter over time.

* Here stands a repository of snippets.
* It is equipped to evolve over a long stretch of time giving proper credit to creators and those that expand upon their works.

## Usage
run ```bower install https://github.com/regenerate/snippets.git```
and use either ```bower_components/snippets/database.json``` or ```bower_components/snippets/database/*```
```
#tip: testing prior to commit can be staged as follows
# cd ../snippets/; node build.js; cd ../random/; cp ../snippets/database.json ./bower_components/snippets/
```

## Compilation Steps
* Run build in the main directory, it will clobber the ./database.json

## PAGE CATEGORIES
* Think of Page Categories as a folder in a Start From Template Page.

![example](documentation/assets/start-from-tempate.gif "Something like this")


## MODULE POSITIONS
* There are but a few layouts, relativley speaking.
* There is no specific layout rule, it is up to the artist.
* Here is what is on their mind when they begin.
![example](documentation/assets/joomla_positions.png "Something like this")

```
title
toolbar
top
left
icon
central
more
right
status

footer

one
two
three
four

debug
```

*** note it is from these positions that one or more random selections are made ***

## File System Structure
* Start/Stop are considered part of the spec. Unspecifed, plugin will default to start/restart. There used to be separate .js files for init but that was a silly idea. From bootstrap carousel to caloan's async just use js, use js. Use es6 for that matter multiline strings go a long way in themplate worlds. AWESOME! :)
* Comnfiguration should store enough to seed all generator needs.
* .html - Format all HTML files, pls.
* Use minimal HTML. Use HTML for fallback rather than base. Don't beat the poor dead horse. Consider HTML to be a an xml node with useful attrributes. FOcus on plugin development and a NOSCRIPT fallback.
* There are no settings, there are just defaults that can be oveloaded. Use reasonable defaults prep for 

## Legal
* Build system is under Apache License Version 2.0, January 2004, see LICENSE
* See LICENSES for library code.
