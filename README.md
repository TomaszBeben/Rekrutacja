# Recruitment technical test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Structure of files

    src
    |---__tests__
        |---Header.test.js
        |---SearchBar.test.js
        |---Users.test.js
    |---api
        |---fetch.js
    |---components
        |---header
            |---header.css
            |---Header.js
        |---searchBar
            |---searchBar.css
            |---SearchBar.js
        |---users
            |---users.css
            |---Users.js
    |---context
        |---Context.js
    |---App.css
    |---App.js
    |---index.js
    |---index.css
    |---setupTests.js

## About Project

As description says, app collecting data from api [https://jsonplaceholder.typicode.com/users] and renders only few keys, name and username.

### Variables
All important variables and states are keep in src/[Context.js](https://github.com/TomaszBeben/rekrutacja/blob/main/src/context/Context.js) file.

### Api
Api are fetched by using axios library.
Definition of axios function you can find in src/api/[fetch.js](https://github.com/TomaszBeben/rekrutacja/blob/main/src/api/fetch.js).
Axios takes data from api and put it to users state.

### [Header](https://github.com/TomaszBeben/rekrutacja/blob/main/src/components/header/Header.js)
component shows header of application.

### [SearchBar](https://github.com/TomaszBeben/rekrutacja/blob/main/src/components/searchBar/SearchBar.js)
component is an input which take a value and put it to search state.

### [Users](https://github.com/TomaszBeben/rekrutacja/blob/main/src/components/users/Users.js)
component takes information from user state.
before app fetched data, Users component shows Loading... information.
after app fetched data, Users component shows list of all users.
after typing to search bar some data Users component filtering available users by name.

### [Tests](https://github.com/TomaszBeben/rekrutacja/tree/main/src/__tests__)
Are in tests folder
Tests created with React Testing Library and Jest

### Styles
component styled by using css and flexbox.