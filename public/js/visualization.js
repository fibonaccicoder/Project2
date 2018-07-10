// function get_instagram_likes() {

//     // # SET UP VARIABLES
//     // # GETTING AN ACCESS TOKEN:
//     // # http://instagram.com/developer/authentication/
//     ACCESS_TOKEN = '632495.f59def8.8b48cda0981046519c73fa8513c573be';

//     BASE_URL = 'https://api.instagram.com/v1/users/self/media/liked?access_token='
//     URL = BASE_URL + ACCESS_TOKEN

//     // # GRAB LATEST LIKES 
//     // # FOR USER FROM INSTAGRAM
//     // # http://instagram.com/developer/endpoints/users/
//     response = requests.get(URL)
//     content = response.content
//     json_result = json.loads(content)

//     return json_result
// };

// get_instagram_likes();

// module.exports
$(document).ready(function () {

    // var visionBoardImages = ["../assets/images/elon.jpg"];

    var visionBoardImages = ["../assets/images/luxuryhome.jpg", "../assets/images/tesla.jpg", "../assets/images/elon.jpg", "../assets/images/idealbody.jpg", "../assets/images/relationshipgoals.jpg", "../assets/images/paris.jpg"];

    function visionBoardDisplay() {

        // var pic = $("<img>");
        // pic.attr("src", visionBoardImages[0]);
        // pic.addClass("vbimgs");
        // $("#vision-board-container").append(pic);

        for (var i = 0; i < visionBoardImages.length; i++) {
            var pic = $("<img>");
            pic.attr("src", visionBoardImages[i]);
            pic.addClass("vbimgs");
            $("#vision-board-container").append(pic);
        }
    }
    visionBoardDisplay();

})