# Getting Started with Backend

This project developed by Node.js and Typescript.
This backend project return a polygon by random coordinates located inside the polygon posted from the front-end.

## Used programming languages & libraries

- Express.js for running the server.
- Lodash for get min and max of [lng,lat] in received bounds.
- @Turf for checking the backend random coordinates to be inside the frontside' coordinates bounderies
- cors for cross origin configuration.
- dotenv for `.env` file configuration.

## Instruction

1- Clone the backend project in to your delicated directory.
2- Open the terminal and head to the directory and then run `npm i`. 3- The next step is running `npm run dev`.

### Available scripts

#### `npm run dev`

Runs the app in the development mode.

#### `npm start`

Runs the app in the product mode.

#### `npm run build`

Builds the app for production deployment and places into the `build` folder.

## Assupmtions

- The polygon received from the frontend can have unlimited number of coordinates.
- The number of coordinates which should be returned from the backend posted by front-side and can be populated by the user.
