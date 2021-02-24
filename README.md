# Movies Api - Code Challenge

You're in charge of creating a new movie search web-app. A user will be able to open your application and see our full list of movies. They will then be able to use a search bar to search for their favorite movies based on the overview description.

## Prerequisite

- Node version: 12.18.3 - `nvm install 12.18.3 && nvm alias default 12.18.3`
- Yarn version: 1.22.4
- React version: 17.0.1

## Getting Started

In order to get the app running. First of all you'll have to rename the file `.env.example` as `.env`. After that, install the dependencies (run `yarn`). Finally, you can run the project (run `yarn start`)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Notes

- Different approaches can be applied for making the keyword filter:

* Make an autocomplete input component, in order to get title suggestions while the user write overviews
* We can have in account another fields on the input like movie titles or authors.

- Add [husky](https://www.npmjs.com/package/husky) in order to keep the consistency across all the code base

- Add unit testing for all components and functions
