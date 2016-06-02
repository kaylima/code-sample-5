# CrownPeak Coding Sample - Exercise 5

## Instructions

Write some code that can be used in a templating engine.

This should take a map of variables ("day" => "Thursday", "name" => "Billy") as well as a string template ("${name} has an appointment on ${Thursday}") and perform substitution as needed.

This needs to be somewhat robust, throwing some kind of error if a template uses a variable that has not been assigned, as well as provide a way to escape the strings ("hello ${${name}}" -> "hello ${Billy}")

## Approach

Why make an appointment for something dreadful (like going to the dentist), when you could request ice cream instead?!

Demo available here: http://52.39.147.91/

This application uses JavaScript, Express, EJS for templating, Node.js, Mongoose and responsive HTML/CSS.
