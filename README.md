# React memory game

A simple memory game created in ReactJS.

## Game rules
The main board contains simply a bunch* of cards. Each of them contains some image, but all of them are hidden actually.
Each of card has one matching card equivalent on the board, with the same image.
You need to find all the matching cards. When you discover 2 cards and they don't match, they are hiding again and 
the best thing to do is just try to remember what cards you discovered and where. It will help you with finding matching
pairs.

(*) depending on selected game level

## Game levels
There 4 difficult levels in the game. You need to select that one which you prefer:
* easy - 30 cards (15 unique)
* medium - 60 cards (30 unique)
* hard - 90 cards (45 unique)
* very hard - 120 cards (60 unique)

## Run the game locally
```
yarn install (or npm install)
yarn start (or npm run start)
```
The browser should be opened automatically (under http://localhost:300)
