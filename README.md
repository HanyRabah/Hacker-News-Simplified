# Table of contents
* [General info](#general-info)
* [Screen Shot](#screen-shot)
* [Used Stack](#used-stack)
* [Development decisions](#development-decisions)
* [Folder Structure](#folder-structure)
* [Setup](#setup)
* [Future Enhancement](#future-enhancement)

# General Info 

Show New and Top stories from HackerNews
Using Hackernews Api https://github.com/hackernews/api
Showing User data and Enhance the UI 

# Screen Shot

![Image of the App](https://i.ibb.co/tsf3s6G/Screen-Shot-2020-09-02-at-12-11-14-PM.png)


# Used Stack
Created by `Create Next App` 
  - React.js
  - Next.js
  - Styled Components
  - Axios
  - Jest
  - React Testing Library


# Development decisions

Started by creating a simple design to enhance the UI, and the analysing HackerNews API, Then started setuping the project with `Create Next App` and creating the main strucutre for the components and routes, finally I added tests to the project which cover the main functionality.

<b>Why create Next app</b>
create react next prepare everything to start modern single page with react 
and save a lot of time in setup the build configuration and with next.js it cover the hassle of creating the routes in react by adding the main containers in the page folder.

<b>Styled components</b>
has full theming support by exporting a <ThemeProvider> wrapper component. 
This component provides a theme to all React components underneath itself via the context API.
Which make it easy to add themes colors and fonts to provide for the needed component.

<b>Components</b>
Separting the components so it will be easy to be reuseable with less logic possible.

<b>Service</b>
to Seperate the concern of coding by creating service which responsible only to fetch the data and then the component will manage the request.

<b>Test</b>
Adding tests for Api and main components, should use Cypress test for the UI

<b>404</b>
Error Page if the path provided is not the right one


# Folder Structure 

```
/src
  ├── __tests__       # For now it contains only App test
  ├── constansts      # Global constats
  ├── components      # All Components 
  │   ├── Header
  │   ├── Layout
  │   ├── Loader
  │   ├── Nav
  │   ├── Stories
  │   ├── Story
  ├── pages           # Contain ( index/Home , 404, Top Stories ) pages
  │   ├── index        # New News from hacker news
  │   ├── TopStories  # Top Stories from hacker news 
  │   ├── Error/404
  ├── service         # Service logic to connect to HackerNews Api
  ├── utils           # Utilites for hold helper functions
  ├── selectors       # To Clean the data coming from stories
  ├── styles          # Global Theme Styles
```

# Setup

Install dependencies:

```sh
yarn
```


Run dev
```sh
yarn dev
```

Run Tests 

```sh
yarn test
```

Run Tests Coverage
```sh
yarn coverage
```


# Future Enhancement

- Typescripts
- Enhance test Coverage 
- Write Cypress test
- Performance enhanching ( Speed Index and Time to Interactive, dns-prefetch )
- UI enhancment ( Search, Filters )
