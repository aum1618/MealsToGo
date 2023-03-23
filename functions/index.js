const functions = require("firebase-functions");
const {geocodeRequest}=require("./geocode")
const {placesRequest}=require("./places")

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
 exports.geocode = functions.https.onRequest((request, response) => {
   geocodeRequest(request,response)
 });

 exports.placasNearby = functions.https.onRequest((request, response) => {
    placesRequest(request,response)
  });