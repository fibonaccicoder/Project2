// *** Event handlers for the Book page ***
$(function () {

    // Create book in the database.
    $("#addjournal").on("submit", function (event) {
        alert("you clicked a button");
        event.preventDefault();
        var userId = $(this).data("user.Id");
        var newJournal = {
            title: $("#newjournaltitle").val().trim(),
            body: $("#newjournalbody").val().trim(),
            userId: userId
        };

        $.ajax("/journal/create", {
            type: "POST",
            data: newJournal
        }).then(function () {
            console.log("You've added a journal entry!");
            location.reload();
        });
    });

    // Update journal entry.
    $(".editjournal").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var editedjournal = {
            body: $("#editedBody").val().trim(),
        }

        // Send the PUT request.
        $.ajax("/api/journal/" + id, {
            type: "PUT",
            data: editedJournal
        }).then(function () {
            console.log("Journal updated");
            location.reload();
        });
    });


    $(".update-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var updatedEntry = {
            title: $("#newjournaltitle").val().trim(),
            body: $("#newjournalbody").val().trim()
        };

        var id = $(this).data("id");

        // Send the POST request.
        $.ajax("/api/journal/" + id, {
            type: "PUT",
            data: updatedEntry
        }).then(
            function () {
                console.log("updated quote");
                // Reload the page to get the updated list
                location.assign("/");
            }
        );
    });



    // Delete book from the database.
    $(".removeJournal").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/journal/remove/" + id
        }).then(location.reload());
    });

});