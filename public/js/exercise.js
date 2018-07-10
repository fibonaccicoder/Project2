// *** Event handlers for the Exercise page ***
$(function () {

    // Create task in the database.
    $("#addExercise").on("submit", function (event) {
        event.preventDefault();
        var userId = $(this).data("user.Id");
        var newTask = {
            task_name: $("#newtask").val().trim(),
            category: $("#category").val().trim(),
            completed: 0,
            value: $("#value").val().trim(),
            // estimated_time: $("#time").val().trim(),
            frequency: $("#exercise-frequency").val(),
            userId: userId
        };

        $.ajax("/exercise/create", {
            type: "POST",
            data: newTask
        }).then(function () {
            console.log("You've added a task!");
            location.reload();
        });
    });

    // Update task to true on completed.
    $(".completeExercise").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var taskStatus = {
            completed: true
        }

        // Send the PUT request.
        $.ajax("/exercise/update/" + id, {
            type: "PUT",
            data: taskStatus
        }).then(function () {
            console.log("Task completed");
            location.reload();
        });
    });

    // Delete task from the database.
    $(".removeExercise").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/tasks/" + id
        }).then(location.reload());
    });

});