// var quotesQueryURL = "https://quotes.rest/qod.json"

// $.ajax({
//     url: quotesQueryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(quotesQueryURL);
//     console.log(response);
//     console.log(response.contents.quotes[0].quote);
//     console.log(response.contents.quotes[0].author);

//     //create space for quote to go on page
//     var quoteDiv = $("<div>");
//     var quote = $("<p id= quote>").text(response.contents.quotes[0].quote);
//     var author = $("<p id= author>").text("-" + response.contents.quotes[0].author);
//     $("#inspirational-quote").append(quote, author);
// });