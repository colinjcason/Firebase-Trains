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

    var nextArrival = $("#frequency").val();

    function validateTime(str) {
      var temp = str.replace(":", "");
      return temp;
    }

    var frequency = validateTime($("#frequency").val());
    console.log(frequency);

    var diff = moment().diff(moment(frequency, "hh:mm"), "minutes");
    console.log(diff);

    var dur = moment.duration((diff * -1), "minutes");
    var text = dur.hours() + " hours " + dur.minutes() + " minutes";
    
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(band),
      $("<td>").text(moment(nextArrival, "HH:mm").format("h:mm A")),
      $("<td>").text(text)
    );

    $(".table").append(newRow);
  });