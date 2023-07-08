# GifsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Installation to Angular-Tailwindcss

- [Documentation Tailwindcss](https://tailwindcss.com/docs/guides/angular)

## Setting up Tailwind CSS in an Angular Project

This guide will walk you through the steps to set up Tailwind CSS in your Angular project.

## Prerequisites
Before getting started, make sure you have the following:
- Node.js and NPM installed on your machine.
## Step 1: Install Tailwind CSS
Install tailwindcss via npm, and then run the init command to generate a __tailwind.config.js__ file.
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init`

## Step 2: Configure your template paths
Add the paths to all of your template files in your `tailwind.config.js` file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./src/**/*.{html,ts}",
 ],
 theme: {
   extend: {},
 },
 plugins: [],
}
```

## Step 3: Add the Tailwind directives to your CSS
Add the __@tailwind__ directives for each of Tailwind’s layers to your `./src/styles.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Step 4: Start your build process
Run your build process with `ng serve`.
- `ng serve`

## Step 5: Start using Tailwind in your project
Start using __Tailwind’s__ utility classes to style your content.
```
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
```

