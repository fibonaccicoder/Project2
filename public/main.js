// *** Page load display functions ***
$(document).ready(function () {

    // ========== Global Displays ==========
    // Display user name in navbar... perhaps more later
    $.get("/userinfo", function (data) {
        // console.log("User name: " + data);
        $(".username").html(data);
    });

    // ========== Exercise Displays ==========
    // Specific call to find sum of exercise points
    $.get("/exercise/points", function (data) {
        // console.log("Sum of exercise points: " + data);
        $("#exercise-sum").empty();
        if (!data) {
            $("#exercise-sum").html("");
        } else {
            $("#exercise-sum").html(data);
        }
    });

    // Check if any incomplete exercise tasks exist
    $.get("/exercise/alltasks", function (data) {
        // console.log(data);
        if (data) {
            console.log("Exercise incomplete.");
        } else {
            console.log("Exercise complete.");
        }
    });

    // ========== Reading Displays ==========
    // Specific call to find sum of reading points
    $.get("/reading/points", function (data) {
        // console.log("Sum of reading points: " + data);
        $("#reading-sum").empty();
        if (!data) {
            $("#reading-sum").html("");
        } else {
            $("#reading-sum").html(data);
        }
    });

});