// globally declared variables because they are used in both the main functions
var playing = false; 
var score;
var correctAnswer ;

// if we click on the start/reset button
document.querySelector("#startreset").onclick = function() {    

    // if(we are playing)
    if(playing == true){
        // reload the page
        location.reload() ;
    }

    //else(we are not playing) 
    else{ 
        // starting the game
        // changing mode to playing 
        playing = true ;

        // set the score to 0
        score = 0 ;
        document.querySelector("#scorevalue").innerHTML = score ;

        // change the start/reset button to reset
        document.querySelector("#startreset").innerHTML = "Reset Game" ;

        // show the countdown
        document.getElementById("time").style.visibility = "visible" ;
        var time = 60 ;
        var targetTimer = document.querySelector("#timeremainingvalue") ;
        targetTimer.innerHTML = time + " sec" ;


        //  hide the game over box
        document.querySelector("#gameover").style.display = "none" ;

        // reduce time by 1s in loop
        function startCountdown(){
            var timer = setInterval(reduceTime, 1000) ;
            function reduceTime(){
                time-- ;
                var targetTimer = document.querySelector("#timeremainingvalue") ;
                targetTimer.innerHTML = time + " sec" ;
                if(time < 0){
                    clearInterval(timer) ;
                    document.querySelector("#gameover").style.display = "flex" ;
                    document.querySelector("#totalscore").innerHTML = score ;
                    document.getElementById("time").style.visibility = "hidden" ;
                    document.querySelector("#correct").style.display = "none" ;
                    document.querySelector("#wrong").style.display = "none" ;
                    document.querySelector("#startreset").innerHTML = "Start Game" ;
                    playing = false ;
                }
              }
            }
        }
         startCountdown() ;

        //  generate new Q&A

    generateQA() ;
}

// if we click on the answer box
for(i = 1; i <= 4; i++){
document.querySelector("#option" + i).onclick = function() {

    // if(we are playing)
    if(playing == true){
        // clicked answer is correct?
        // if(yes)
        if(this.innerHTML == correctAnswer){
            // increase the score by 1
            score++ ;
            document.querySelector("#scorevalue").innerHTML = score ;

            // show correct box for 1s
            document.querySelector("#wrong").style.display = "none" ;
            document.querySelector("#correct").style.display = "block" ;
            setTimeout(function(){
                document.querySelector("#correct").style.display = "none" ;
            }, 1000) ;

            // generate new Q&A
            generateQA() ;
        }
        else {
            // show wrong box for 1s
            document.querySelector("#correct").style.display = "none" ;
            document.querySelector("#wrong").style.display = "block" ;
            setTimeout(function(){
                document.querySelector("#wrong").style.display = "none" ;
            }, 1000) ;
        }

    }
}
}





// if we click on the answer box
     // if(if we are playing)
         // clicked answer is correct?
              // else(no) {show try again box for 1s}

              // if(yes)
                   // increase the score by 1
                   // show correct box for 1s
                   // generate new Q&A

      // else(we are not playing)
        // no action to be taken

// declaration of functions
        function generateQA() {
            var x = 1 + Math.round(9 * Math.random()) ;
            var y = 1 + Math.round(9 * Math.random()) ;
            correctAnswer = x * y ;

            // displaying the question
            document.querySelector("#question").innerHTML = x + " x " + y ;

            var correctPosition = 1 + Math.round(3 * Math.random()) ;

            // filling any one box with the correct answer
            document.querySelector("#option" + correctPosition).innerHTML = correctAnswer ;

            var answers = [correctAnswer] ;

            // filling the other boxes with wrong answer 
            for(i = 1; i < 5 ; i++){
                if(i !== correctPosition){
                    for(j = 0; j >=0 ; j++){
                        var wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())) ;

                        //checking whether the wrongAnswer is equal to the previous answers
                        if(answers.includes(wrongAnswer) == false){
                            break ;
                        }
                    }
                    document.querySelector("#option" + i).innerHTML = wrongAnswer ;
                    answers.push(wrongAnswer) ;
                }
            }
    }