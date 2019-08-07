 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAasOw-jkn8R-zQU0kjSirJywHvCbOkL88",
    authDomain: "train-schedule-3e8b3.firebaseapp.com",
    databaseURL: "https://train-schedule-3e8b3.firebaseio.com",
    projectId: "train-schedule-3e8b3",
    storageBucket: "",
    messagingSenderId: "36052195189",
    appId: "1:36052195189:web:98c395979d40f73a"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-train").on("click", function() {
    console.log("click");

      event.preventDefault();

    // Gets user input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var band = $("#band").val().trim();
    var arrival = $("#train-arrival").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        band: band,
        arrival: arrival,
        frequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.band);
    console.log(newTrain.arrival);
    console.log(newTrain.frequency);

  });