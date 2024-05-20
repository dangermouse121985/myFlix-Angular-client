# MyFlixAngularClient

# myFlix Angular App

This repository contains the client-side code for the myFlix application built using [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2. The app interfaces with an existing server-side (REST API and database) and provides a responsive, single-page application for users to explore movies, directors, and genres. It also allows users to create profiles and save their favorite movies.

## Table of Contents

- [Overview](#overview)
- [Objective](#objective)
- [Context](#context)
- [The 5 W's](#the-5-ws)
- [Design Criteria](#design-criteria)
- [Technical Requirements](#technical-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Development Server](#development-server)
- [Code Scaffolding](#code-scaffolding)
- [Build](#build)
- [Run Unit Tests](#running-unit-tests)
- [Run End-to-End Tests](#running-end-to-end-tests)
- [Further Help](#further-help)
- [License](#license)

## Overview

The myFlix app is designed to provide movie enthusiasts with information about different movies, directors, and genres. It includes user authentication and profile management features, allowing users to save their favorite movies. The project also emphasizes good documentation practices, making it easy for other developers to understand and contribute to the codebase.

## Objective

Using Angular, the objective is to build the client-side for the myFlix application based on its existing server-side code, with comprehensive supporting documentation.

## Context

As remote work becomes increasingly common, effective communication and collaboration skills are essential. This project not only demonstrates your ability to build a complex application with Angular but also your ability to document and share your work with others, which is crucial in a professional setting.

## The 5 W's

- **Who**: The users of the myFlix movie app and codebase, including other developers and designers.
- **What**: A single-page, responsive movie app built with Angular, featuring multiple interface views and routing, supporting user requests through a REST API.
- **When**: Users can use the app at any time to access movie information or update their user profiles.
- **Where**: The app will be hosted online and is designed to be responsive, usable on any device.
- **Why**: To provide movie enthusiasts with easy access to movie information and demonstrate Angular development skills and documentation capabilities.

## Design Criteria

### User Stories

- As a user, I want to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to create a profile to save data about my favorite movies.

### Key Features

- **Welcome View**: Users can log in or register an account.
- **Main View**: Authenticated users can view all movies.
- **Single Movie View**: Users can see additional movie details and navigate to director and genre views.
- **Director View**: Displays details about the movie's director.
- **Genre View**: Displays details about the movie's genre.
- **User View**: User's can view and update their profile information.

## Technical Requirements

- The application is writte using [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.
- It requires the latest version of Node.js and npm package.
- It must contain user registration and login forms.
- It is designed using Angular Material.
- The project is hosted on [GitHub Pages](https://dangermouse121985.github.io/myFlix-Angular-client/welcome).

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dangermouse121985/myFlix-Angular-client
   ```

2. **Navigate to the project directory:**

   ```bash
   cd myFlix-angular
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

## Usage

To start the project, run:

```bash
npm start
```

\*You may need to update the URLs in the nav bar to reflect your local environment. You can find them in the following file

```bash
src/app/app.component.html
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

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

## License

This project is licensed under the MIT License.

**This readME File was built using the help of ChatGPT**
