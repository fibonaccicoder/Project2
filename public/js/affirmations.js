// $("#success-btn").dialog({
//     autoOpen: false,
//     show: 'slide',
//     resizable: false,
//     position: 'center',
//     stack: true,
//     height: 'auto',
//     width: 'auto',
//     modal: true
// });

$(document).ready(function () {


    var successAffirmations = ["I am so happy and grateful now that I have clarity about my desires and each day I move closer to achieving them.", "I am so happy and grateful now that I am one with the riches of my subconscious mind.", "I am so happy and grateful now that everything is working out for my greatest good.", "I can handle massive success with grace.", "I have an attitude of gratitude and it propels me to new heights."];

    var wealthAffirmations = ["I am so happy and grateful now that money comes to me in increasing quantities on a continuous basis through many sources.", "I am a magnet for money.", "Money comes to me easily and effortlessly.", "Prosperity is drawn to me.", "I am worthy of abundance.", "I am open and receptive to all the wealth that life offers me.", "My actions create constant prosperity.", "I am aligned with the energy of abundance.", "I welcome an unlimited source of income and wealth in my life.", "I use money to better my life and the lives of others.", "Wealth constantly flows into my life.", "I constantly attract opportunities that create more money.", "My finances improve beyond my wildest dreams.", "Money and spirituality can co-exist in perfect harmony.", "I can handle massive success with grace.", "Money creates positive impact in my life."];


    var loveAffirmations = ["My heart is open and I radiate love.", "I am a conduit of love.", "I love myself and everybody else.", "All of my relationships are long lasting and loving.", "I deserve love and I get it in abundance.", "In life I always get what I give out, and I always give out love.", "Everywhere I go, I find life is joyous.", "I am so happy and grateful to be growing in perfect harmony with the love of my life.", "I give out love and it is returned to me multiplied many-fold."];

    var healthAffirmations = ["I meet each day with energy and vigor.", "I am a positive person.", "My body is one with infinite intelligence, and it is healing in accordance with the perfect model of health.", "I am whole and I am happy.", "I am strong, I am vibrant, I am in perfect health.", "I love every cell of my body.", "I return my body to optimal health by giving it what it needs on every level.", "I am pain free and totally in sync with life.", "My body is always doing its best to create perfect health.", "I lovingly do everything I can to assist my body in maintaining perfect health.", "I devote a portion of my time to helping others. It is good for my own health.", "I make healthy choices. I have respect for myself.", "I am grateful for my healthy body. I love life.", "My happy thoughts help create my healthy body."];

    function populateAffirmation(affirmationsArr) {

        var randomAffirmation = Math.floor(Math.random() * affirmationsArr.length);

        $("#affirmations-view").empty();
        var affirmation = $("<div>");
        affirmation.addClass("success-well-class");
        affirmation.attr("data-well", affirmationsArr[randomAffirmation]);
        affirmation.text(affirmationsArr[randomAffirmation]);
        $("#affirmations-view").append(affirmation);
    }

    $("#success-btn").on("click", function () {
        populateAffirmation(successAffirmations);

    });
    $("#wealth-btn").on("click", function () {
        populateAffirmation(wealthAffirmations);

    });
    $("#love-btn").on("click", function () {
        populateAffirmation(loveAffirmations);

    });
    $("#health-btn").on("click", function () {
        populateAffirmation(healthAffirmations);
    });
})