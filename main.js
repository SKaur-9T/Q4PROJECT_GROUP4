function feedback() {
    var content = parseInt(document.getElementById("content").value);
    var project = parseInt(document.getElementById("project").value);
    var teamwork = parseInt(document.getElementById("teamwork").value);
    var creativity = parseInt(document.getElementById("creativity").value);
    var rating = parseInt((content + project + teamwork + creativity) / 4)

    if (rating === 1) {
        alert('You have given us an average rating of ' + rating + '. We are sorry to hear the performance was unsatisfactory. We will work on improving.');
    } 
    else if (rating === 2) {
        alert('You have given us an average rating of ' + rating + '. Thanks for the feedback. There is definitely room for improvement.');
    }
    else if (rating === 3) {
        alert('You have given us an average rating of ' + rating + '. Good job! We are glad it was a solid performance.');
    }
    else if (rating === 4) {
        alert('You have given us an average rating of ' + rating + '. Great! You found the performance impressive!');
    }
    else {
        alert('You have given us an average rating of ' + rating + '. Excellent! Thank you for your outstanding feedback!');
    }

}

function feedback2() {
    var C = parseInt(document.getElementById("Cajucom").value);
    var Z = parseInt(document.getElementById("Zosa").value);
    var K = parseInt(document.getElementById("Kaur").value);
    var G = parseInt(document.getElementById("Gano").value);
    var A = parseInt(document.getElementById("Arias").value);
    var indrating = parseInt((C + Z + K + G + A) / 5)

    if (indrating === 1) {
        alert('You have given us an average rating of ' + indrating + '. We are sorry to hear the performance was unsatisfactory. We will work on improving.');
    } 
    else if (indrating === 2) {
        alert('You have given us an average rating of ' + indrating + '. Thanks for the feedback. There is definitely room for improvement.');
    }
    else if (indrating === 3) {
        alert('You have given us an average rating of ' + indrating + '. Good job! We are glad it was a solid performance.');
    }
    else if (indrating === 4) {
        alert('You have given us an average rating of ' + indrating + '. Great! You found the performance impressive!');
    }
    else {
        alert('You have given us an average rating of ' + indrating + '. Excellent! Thank you for your outstanding feedback!');
    }

}
