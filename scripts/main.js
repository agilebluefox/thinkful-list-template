$(document).ready(function() {
    console.log("ready!");
    // Change the background color of the header tag under the first section
    $("#important-events h1").css('background-color', 'teal');

    // Give the first list item a steel blue background
    $("li:first-child").css('background-color', 'steelblue');

    // Set the background color of the direct child
    $("section > p").css('background-color', 'aliceblue');

    // Hide the list item when it's clicked
    $('#unimportant-events li').click(function() {
        $(this).hide(2000);
    });

    // Reveal the list when the header is clicked
    $('#unimportant-events h1').click(function() {
        $('#unimportant-events li').show();
    });

    // Change the background color of list items when the mouse hovers
    var $curr = $('#important-events li').last();
    $curr.css('background-color', 'yellow');
    $('#important-events li').mouseover(function() {
        $('#important-events li').css('background-color', '');
        $(this).css('background-color', 'yellow');
    });

    // Give the even rows a background color
    $("#unimportant-events li:even").css('background-color','lightgrey');

    // Get rid of the bullets
    $('#important-events ul').css('list-style', 'none');

    // Change the css of the top ten numbers for the list
    $('#important-events li span').css('color', 'indianred').css('font-size', '3em');

    var myHeaderText = $('#important-events h1').text();
    var myNumber = [];

    for ( var i = 0; i < myHeaderText.length; i++ ) {
<<<<<<< HEAD
        if (ParseInt(myHeaderText[i], 10)) {
=======
        if ( parseInt(myHeaderText[i], 10) ) {
>>>>>>> master
            myNumber.push(myHeaderText[i]);
        }
    }
    console.log(myHeaderText);
    console.log(myNumber);

});

