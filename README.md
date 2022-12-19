# Travel App

## Description
An app to obtains a desired trip location, start date  from the user then displays weather discription  and an image of the location using information obtained from external APIs .The app suitable for all screen's size.

## Built with
* Html5.
* Scss.
* JS dom.
* Node js.
* Express.
* Geonames api.
* Weatherbit api.
* Pixabay api.

# How to use it:
## 1.Getting started

cd into your new folder and run:
`npm install`

## 2.Setting up the APIs

1. Create an account with Geonames [http://www.geonames.org/export/web-services.html],
   weatherbit [https://www.weatherbit.io/account/create] and Pixabay[https://pixabay.com/api/docs/].

```
 Use npm or yarn to install the dotenv package 
 npm install dotenv.
 This will allow us to use environment variables we set in a new file
 Create a new .env file in the root of your project
 Go to your .gitignore file and add .env
 Fill the .env file with your API keys and username like this:

```
```
API_KEY_weatherbit=****************************************
API_KEY_pixabay=*******************************************
Geonames_user_name = *****
```

## Start the project

`npm run build-prod`
`npm run start`

