console.log('JS');
var questionNumber;

var people = [
    {
        name: 'Liz',
        githubUsername: 'decameters'
    },
    {
        name: 'Jake',
        githubUsername: 'jakebray13'
    },    
    {
        name: 'Dave',
        githubUsername: 'clark535'
    },    
    {
        name: 'Drew',
        githubUsername: 'abgeiger'
    }
];

$(document).ready(readyNow);

function readyNow(){
    resetGame(people);
    $(document).on('click', 'img' , guessWho);
    appendImages(people);
    // $('#imageDiv').append("<div><img src='https://github.com/decameters.png' alt='Profile image of Liz'></div>");
    // $('#imageDiv').append("<div><img src='https://github.com/jakebray13.png' alt='Profile image of Jake'></div>");
    // $('#imageDiv').append("<div><img src='https://github.com/clark535.png' alt='Profile image of Dave'></div>");
    // $('#imageDiv').append("<div><img src='https://github.com/abgeiger.png' alt='Profile image of Drew'></div>");
}

function appendImages(array) {
    for (let i = 0; i < array.length; i++) {
        var appendString = "<div data-index='" + i + "'><img src='https://github.com/" + array[i].githubUsername + ".png' alt='Profile image of " + array[i].name + "'></div>";
        $('.imageDiv').append(appendString);
        $('.imageDiv').children().css('float', 'left');
    }
}

function guessWho() {
    if (questionNumber == $(this).parent().data('index')) {
        // $('#messageDiv').children().remove();
        $('.messageDiv').append('<p>Success! Play again?</p>');
        $(this).parent().css('background-color', 'green')
        setTimeout(function() {resetGame(people)}, 2000);
        // resetGame(people);
    } else {
        $('.messageDiv').append('<p>Try again!</p>');
    }
    //$('#guessText').html('<h2>' +);
}

function resetGame(array){
    // $('div').removeAttr('style');
    $('div').css('background-color', 'white');
    questionNumber = Math.floor(Math.random() * array.length);
    $('#guessText').html('Which GitHub user is: ' + array[questionNumber].name + '?');
}