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

    var frequency = moment($("#frequency").val(), "HH:mm");
    console.log(frequency);

    var time = moment().format("hh:mm");
    console.log(time);

    var difference = moment().diff(moment(frequency), "minutes");
    console.log(difference);

    // var a = moment(2300, "hh").from();
    // console.log(a);

    // var newTime = moment.unix(a);
    // console.log(newTime);



    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(band),
      $("<td>").text(frequency),
      $("<td>").text(now)
    );

    $(".table").append(newRow);

  });