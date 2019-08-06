const fs = require('fs');
const process = require('process');

const questions = [
  'How many faces are there on a dodecahedron?',
  'How old is William Shatner?',
  'What is the capital city of Estonia?',
  'Who famously kung-fu-kicked a rowdy Crystal Palace fan in 1995?'
];

const correctAnswers = [
  '12',
  '88',
  'Tallinn',
  'Eric Cantona'
];

let userAnswers = [];

// let userNames = [];

function startMessage(){
  process.stdout.write('Welcome to my quiz.\n May I have your name?\n');
}

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();

  if (fs.existsSync(`${inputAnswer}.txt`)) {
    console.log('Sorry, that name is taken.\nPlease use a different name.');
  } else {
      const data = `Quiz answers for ${inputAnswer}`;
      fs.writeFile(`${inputAnswer}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`Cool cool cool. I made a txt file just for you, ${inputAnswer}!\n Now let's get quizzin'!`);
        askQuestion(0);
      });
    }

});

startMessage();

function askQuestion(num){
  process.stdout.write(`${questions[num]}\n`);
  process.stdin.on('data', function(answer){
    let inputAnswer = answer.toString().trim();
    let questionNum = userAnswers.length;
    if(inputAnswer === correctAnswers[questionNum]){
      userAnswers.push(inputAnswer);
      if(userAnswers.length === questions.length){
        process.exit();
      } else {
        askQuestion(userAnswers.length);
      }
    }
  });
}



// askQuestion(0);

process.on('exit', function(){
  process.stdout.write(`\nOK, that's it for all the questions.\nLet's see how you did...`);
});
