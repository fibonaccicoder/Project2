function get_instagram_likes() {

    // # SET UP VARIABLES
    // # GETTING AN ACCESS TOKEN:
    // # http://instagram.com/developer/authentication/
    ACCESS_TOKEN = '632495.f59def8.8b48cda0981046519c73fa8513c573be';

    BASE_URL = 'https://api.instagram.com/v1/users/self/media/liked?access_token='
    URL = BASE_URL + ACCESS_TOKEN

    // # GRAB LATEST LIKES 
    // # FOR USER FROM INSTAGRAM
    // # http://instagram.com/developer/endpoints/users/
    response = requests.get(URL)
    content = response.content
    json_result = json.loads(content)

    return json_result
};

get_instagram_likes();

module.exports