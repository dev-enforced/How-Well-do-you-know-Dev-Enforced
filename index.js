
var chalk = require('chalk')
var readlineSync = require('readline-sync')
var emoji = require("node-emoji")
var log = console.log
 
log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
log("Welcome to the Game: "+chalk.red.underline.bold("How well do you know Dev-Enforced?"))
log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

var playerName = readlineSync.question("State your name please: \n")
log(chalk.yellow.bold("\nAll the best ")+chalk.blue.underline(playerName)+chalk.yellow.bold(".Enjoy the trivia!!\n"))

log(chalk.blue.bgRed.underline("Game Rules :\n"))
log(chalk.yellowBright("1. This quiz consists of 5 questions for each of which you will have to give a one word answer."))
log(chalk.yellowBright("2. For each correct question, you will be awarded 4 points."))
log(chalk.yellowBright("3. For each incorrect question, you will be deducted 2 points."))
log(chalk.yellowBright("4. For each answer , the first letter should be in capital case followed by other letters in small case.\n"))

var highScores=[
  {
    name:"Raunak",
    pS:"20"
  },{
    name:"Rishav",
    pS:"14"
  },{
    name:"Vinay",
    pS:"  8"
  }
]
log(chalk.greenBright("HALL OF FAME:\n"))
for(var i=0;i<highScores.length;i++){
  log(chalk.cyanBright(highScores[i].name+"         "+highScores[i].pS))

}

var response=confirm("\nAre you ready? \n")
var score=0;
var correctAnswered=0;
function evaluation(questionAsked,answerGiven){
  var userAnswer= readlineSync.question(questionAsked)
  if(userAnswer.toUpperCase()===answerGiven.toUpperCase()){
    log(chalk.green("Yipppeee!!! "+userAnswer+" is the right answer ")+emoji.get(":smile:"))
    score+=4;
  }else{
    log(chalk.red("Unfortunately your answer is incorrect ")+emoji.get(":pensive:"))
    score-=2;
    log(chalk.red(answerGiven+ " is the correct answer"))
    
  }
  log("Total score is: ",score)
  log("---------------------------")
}

var questionList=[
  {
    q:"\nWhich language does Dev-Enforced like coding in since NeogCamp started?\n",
    a: "Javascript"
  },
  {
    q:"\nFavourite web series of Dev-Enforced?\n",
    a:"Mirzapur"
  },
  {
    q:"\nDev-Enforced's favourite outdoor Game?\n",
    a:"Football"
  },
  {
    q:"\nDev-Enforced's number of hours of sleeping\n",
    a:"Eight"
  },
  {
    q:"\nWhich country is Dev-Enforced a citizen of?\n",
    a:"India"
  }
]

if(response==true){
for(var i=0;i<questionList.length;i++){
  evaluation(questionList[i].q,questionList[i].a)
}
}else{
  log("Hope you find the time to play the game.")
}
log("Total points scored by "+playerName+": "+chalk.blue.bgYellow.underline(score))

for(i=0;i<highScores.length;i++){
  if(score>=highScores[i].pS){
    correctAnswered++;
  }
}

if(correctAnswered==3||correctAnswered==2||correctAnswered==1){
  log(chalk.yellowBright("Congratulations you are among the high Scorers ")+emoji.get(":smiley:"))
}

log("\n**********THE END*************")