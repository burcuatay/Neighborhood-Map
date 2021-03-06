# Neighborhood Map (React) Project 

This project is one of the requirements of certification for Udacity's *Front End Development Nanodegree Programme*. It was completed as a part of the *Udacity Google Scholarship*.

The purpose of the application is to write an accesible and offline-first single page map application using React, Google Maps API and a third party API. For the purposes of this project, the third party API used is the Foursquare API.

## Installation
This project has been built using a [create-react-app](https://github.com/facebook/create-react-app).

### Development Mode
Once you have downloaded the project, open terminal and cd to the folder. Then run `npm install` to install all the dependencies and then `npm start` to start the server. You can find the project on `http://localhost:3000`.

### Production Build
To open the app in the production build, open terminal and cd to the folder. Then run `npm run build` and `serve -s build`. You can find the project on `http://localhost:5000`.

## Features of the App
The project is divided into two interconnected components: `Sidebar` and `Map`. It uses state changes on the parent component `NeighborhoodMap` for connection so that both components can run intuitively.

The project shows a Map (`Map`) that is created using the [Google Maps API](https://cloud.google.com/maps-platform/) and a list of Hotels on the left hand side (`Sidebar`). The hotels shown are also shown with `markers` on the map. When a user selects a hotel from the Sidebar or a marker on the Map, an `InfoWindow` of the hotel appears on the Map. The InfoWindow includes the name of the hotel and a photo taken using the [Foursquare API](https://developer.foursquare.com/).

The project uses [react-google-maps] (https://github.com/tomchentw/react-google-maps/) which is a Google Map library that uses react, which has features such as Markers and InfoWindows that are used in this project.



