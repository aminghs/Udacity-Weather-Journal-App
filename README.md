# Weather-Journal App Project

## Table of Contents

- [Overview](#overview)
- [Instructions](#instructions)
- [Extras](#extras)
- [Development](#development)
- [Done](#done)

## Overview

This project requires you to create an asynchronous web app that uses Web API
and user data to dynamically update the UI.

## Instructions

This will require modifying the `server.js` file and the `website/app.js` file.
You can see `index.html` for element references, and once you are finished with
the project steps, you can use `style.css` to style your application to
customized perfection.

## Extras

If you are interested in testing your code as you go, you can use `tests.js` as
a template for writing and running some basic tests for your code.

## Development

If you want to continue coding you need to have `nodejs and npm` locally
installed. You can check that by running `node -v && npm -v` in the terminal,
which should result in two versions shown in the terminal.

Once `nodejs and npm` installed you simple run `npm start` which runs a express
server locally and serves the static files. In addition in enables two
endpoints. One is a get for projectdata and the second for post projectdata.

## Done

What was done? I enhanced the `server.js` with two endpoints and required
middleware to enable body-parser and cors.

In `website/app.js` I created several functions for fetching weather data from
OpenWeatherAPI, saving the data through the post request and updating the UI
dynamically.

Try it out!
