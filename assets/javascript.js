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

      event.preventDefault();

    // Gets user input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var band = $("#band").val().trim();
    var frequency = $("#frequency").val();

    var newTrain = {
        name: trainName,
        destination: destination,
        band: band,
        frequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.band);
    console.log(newTrain.frequency);

    var frequency = $("#frequency").val();

    var currentTime = moment();
    console.log(currentTime);

    var diffTime = moment().diff(currentTime, "minutes");

    var remainder = diffTime % frequency;

    var minutesTillNext = frequency - remainder;

    var nextTrain = moment().add(minutesTillNext, "minutes");

    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(band),
      $("<td>").text(frequency),
      $("<td>").text(nextTrain)
    );

    $(".table").append(newRow);

  });