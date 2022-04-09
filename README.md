# Description:

Meow Pairs is a simple card match game.

It has 3 levels of difficulty, and after completing them, the time score is saved.

# Features:

- Three levels of difficulty. Each game adds 2 additional pairs.

- The chronometer takes the time spent to complete all the levels.

- Cards are chosen randomly.

- Random sounds during the game.

- Random messages after completing levels and ending the game.

- At the end of the game, user can save their score.

- Scores by country by clicking the flags on the score list or on the modal with all the country flags

# Tech Stack

- Express.js

- Node.js

- React

- React Hooks

- Webpack

- DB: MongoDB

- Aux Sources:

- country-flag-emoji (List of country codes and its flag emojis) https://github.com/risan/country-flag-emoji

- Meow Facts - https://meowfacts.herokuapp.com/

# Installation

Node.js installation required.

Install npm dependencies --> npm install

Initialize nodemon --> npm run dev

Initialize webpack watch --> npm run watch

# How to use MeowPairs

After clicking the start button, the game will start with the most basic level, and the stopwatch will initialize.

When all the pairs are discovered, the stopwatch stops until pressing continue, when a new level with 2 more pairs will initialize.

The last level adds 2 more pairs of cards.

After finishing, a modal form will appear, to save score.

After, saving a chart with the top ten will appear.

Clicking the flags, a score chart by country is displayed.

# API Documentation

- Version: v1

- Path: /api/v1

- Endpoints

- /scores

- /scores/country

* Route: /scores

- Method: GET

- Desc: Get all the scores

- Res format: JSON

> Response Example

HTTP/1.1 200 OK

X-Powered-By: Express

Content-Type: application/json; charset=utf-8

Content-Length: 1912

ETag: W/"778-kwI0NHdzNYznTro6EgmxrV3r0SU"

Date: Wed, 06 Apr 2022 22:58:57 GMT

Connection: close

[

{

"\_id": "624d3ffcfaeefa2c27cc4819",

"nickname": "billy",

"country": "Uruguay",

"time": "00:16"

},

{

"\_id": "624d40e34bdea32512ae9278",

"nickname": "Mandy",

"country": "Uruguay",

"time": "00:25"

}

]

- Route: /scores/:country

- Method: GET

- Desc: Get all the scores from a country

- Res format: JSON

> Response Example

> /api/v1/scores/Uruguay

HTTP/1.1 200 OK

X-Powered-By: Express

Content-Type: application/json; charset=utf-8

Content-Length: 1736

ETag: W/"6c8-cLrBOqz1fiz5V+yxeR3BYpOiLdg"

Date: Fri, 08 Apr 2022 13:28:39 GMT

Connection: close

[

{

"\_id": "624d3ffcfaeefa2c27cc4819",

"nickname": "billy",

"country": "Uruguay",

"time": "00:16"

},

{

"\_id": "624d40e34bdea32512ae9278",

"nickname": "Mandy",

"country": "Uruguay",

"time": "00:25"

}

]

- Route: /scores

- Method: POST

- Desc: Post a new score

- Res format: JSON

> Response Example

HTTP/1.1 201 Created

X-Powered-By: Express

Content-Type: application/json; charset=utf-8

Content-Length: 172

ETag: W/"ac-0SZvX4OIwWljBqV3OiCop9V+qRk"

Date: Wed, 06 Apr 2022 23:01:43 GMT

Connection: close

{

"nickname": "Mia",

"country": "Uruguay",

"time": "00:22",

"\_id": "624e1bd73b2cc02a72635ced",

"createdAt": "2022-04-06T23:01:43.061Z",

"updatedAt": "2022-04-06T23:01:43.061Z",

"\_\_v": 0

}
