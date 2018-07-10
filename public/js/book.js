// *** Event handlers for the Book page ***
$(function () {

    // Create book in the database.
    $("#addbook").on("submit", function (event) {
        event.preventDefault();
        var userId = $(this).data("user.Id");
        var newBook = {
            title: $("#newbook").val().trim(),
            author: $("#newbookauthor").val().trim(),
            completed: 0,
            value: $("#value").val().trim(),
            estimated_time: $("#time").val().trim(),
            userId: userId
        };

        $.ajax("/book/create", {
            type: "POST",
            data: newBook
        }).then(function () {
            console.log("You've added a book!");
            location.reload();
        });
    });

    // Update book to true on completed.
    $(".completeBook").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var bookStatus = {
            completed: true
        }

        // Send the PUT request.
        $.ajax("/api/books/" + id, {
            type: "PUT",
            data: bookStatus
        }).then(function () {
            console.log("Book completed");
            location.reload();
        });
    });

    // Delete book from the database.
    $(".removeBook").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/books/remove/" + id
        }).then(location.reload());
    });

});