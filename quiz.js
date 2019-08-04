const process = require('process');

const questions = [
  'What is 2 + 2?',
  'How many sides are there on an octagon?',
  'How old is Matt?'
];

const correctAnswers = [
  '4',
  '8',
  '25'
];

let usersAnswers = [];
let num = 0;

function askQuestions(num){
  process.stdout.write(`${questions[num]}\n\n`);
  process.stdin.on('data', function(answer){
    usersAnswers = answer.toString().trim();
    if(usersAnswers[num] === correctAnswers[num]){
      process.stdout.write(`\nCorrectamundo!\n`);
      num ++;
      if (num > questions.length){
        process.exit();
      }
    } else{
      process.stdout.write(`\n${usersAnswers[num]} is the wrong answer, please try again\n`);
    }
  });
};

askQuestions(0);



// process.stdin.on('data', function(answer){
//   usersAnswers = answer.toString().trim();
//   if(usersAnswers[i] === correctAnswers[i]){
//     process.stdout.write(`\nWell done, you got the right answer!\n`);
//     process.exit();
//   } else {
//     process.stdout.write(`\n${userAnswers} is the wrong answer, please try again\n`);
//   }
// });



// process.stdout.write(`\n\nWhat is 2 + 2?\n\n`);
// process.stdin.on('data', function(answer){
//   // console.log(answer.toString().trim());
//   let inputAnswer = answer.toString().trim();
//   if(inputAnswer === '4'){
//     process.exit();
//   } else {
//     process.stdout.write(`\n${inputAnswer} is the wrong answer, please try again\n`);
//   }
// });
//
// process.on('exit', function(){
//   process.stdout.write(`\nWell done, you got the right answer!\n`);
// })
