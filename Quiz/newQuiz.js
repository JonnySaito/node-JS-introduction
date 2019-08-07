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

let userName;
let validUserName = false;

askName = () => {
  process.stdout.write('Welcome to my quiz.\n May I have your name?\n');
};

askQuestion = (num) => {
  process.stdout.write(`${questions[num]}\n`);
};

process.stdin.on('data', function(answer){
  const inputAnswer = answer.toString().trim();

  if(validUserName === false){
    userName = inputAnswer;
    const fileName = inputAnswer.replace(/\s/g, '').toLowerCase();
    if(fs.existsSync(`./results/${fileName}.txt`)){
      process.stdout.write(`Sorry, the name ${userName} is taken.\nPlease use a different name.`)
    } else {
      const data = `Quiz answers for ${inputAnswer}`;
      fs.writeFile(`./results/${fileName}.txt`, data, (err) => {
      if (err) throw err;
      validUserName = true;
      process.stdout.write(`\nCool cool cool. I made a file just for you, ${userName}. Now let's get quizzin'`);
      askQuestion(0);
      })
    }
  } else{
    // Run quiz here
    console.log(inputAnswer);
  }

});

askName();

function askQuestion(num){
  process.stdout.write(`${questions[num]}\n`)
};

process.stdin.on('data', function(answer){
  let inputAnswer = answer.toString().trim();
  console.log('----------------');
  console.log(inputAnswer);
  userAnswers.push(inputAnswer);
  if (usersAnswers.length === correctAnswers.length){
   process.exit();
  } else {
   askQuestion(usersAnswers.length);
    }
});

askQuestion(0);
process.on('exit', function(){
  process.stdout.write(`\nOK, that's it for all the questions.\nLet's see how you did...`);
  console.log(usersAnswers);
  for (var i = 0; i < usersAnswers.length; i++) {
      if (usersAnswers[i] === correctAnswers[i]){
        console.log(`Yay, you got question ${i + 1} correct!`);
      } else {
     console.log(`Boo, you got question ${i + 1} wrong!`);
        }
  }
});
