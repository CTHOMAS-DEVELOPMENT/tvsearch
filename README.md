
## TV Schedualer


## This application has two modules that require setup.

The API setup

A small Express.js application / Server that:

(1) Implements a service. It accesses data cross site on starting it.

(2) Serves the list of episodes to the front-end via a route.

The Front end setup

A front end application (Written using the Angular 4 framework) that:

(1)Makes an API GET request to the api setup described above using a route to fetch the episodes.

(2)Displays the episodes (as thumbnail & title) in a grid.

(3)Has a text-box to enable filtering of the episodes by title.

(4)Contains unit tests as appropriate, with the testing framework that comes with the default angular cli (See below).

NB: The above demo is only that and a full install of the two modules above should be undertaken to view the whole application working as it should (npm install in both root directories. Please see below for correct operation of the front end application)

# Tv Schedual -Building, Testing and Deploying the front end application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

(https://github.com/angular/angular-cli/blob/master/README.md).
