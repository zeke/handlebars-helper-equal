# handlebars-helper-equal

A Handlebars helper for testing equality

Found it on [some blog](http://doginthehat.com.au/2012/02/comparison-block-helper-for-handlebars-templates/).

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install handlebars-helper-equal --save
```

## Usage

In your JavaScript file:

```js
var express = require("express")
var hbs = require("hbs")
hbs.registerHelper("equal", require("handlebars-helper-equal"))
var app = express()
app.set("view engine", "hbs")
// etc...
```

In your Handlebars template:

```hbs
{{#equal unicorns ponies }}
  That's amazing, unicorns are actually undercover ponies
{{/equal}}
```

## Tests

```sh
npm install
```
