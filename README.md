# Summary

"Movie Picker" is a movie comparison website, where the user can introduce two movie titles and receive a color-based comparison between data from both movies.

See live:

Watch demo:

API used: [OMDb API](http://www.omdbapi.com/)

The app accesses third-party data from an external API, transforms it, renders a reusable autocomplete widget removed from the HTML file, and displays the parsed data in appropriate format.

In short, the following components interact to deliver the expected results:

- Network requests
- Reusable autocomplete widget
- Template generation
- Utility functions (debounce, input parsing...)

# Main technologies

HTML, CSS, JavaScript

Bulma

Testing of some features is performed with Mocha and Chai

# Getting started

## Clone this repository

`git clone https://github.com/bmm00000/movie-picker.git`

## Run app

`cd movie-picker`

`open index.html`
