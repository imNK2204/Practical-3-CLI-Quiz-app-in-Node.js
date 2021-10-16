var rs = require("readline-sync")
const chalk = require("chalk")

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse

var score = 0;
var highscore = 15;

let questions = [
  {
    no: '1',
    question: `Who penned the lyrics to the songs from "Dilwale Dulhania Le Jayenge"?`,
    A: 'R D Burman',
    B: 'Anand Bakshi',
    C: 'Cliff Richards',
    D: 'Sonu Nigam',
    answer: 'b',
  },
  {
    no: '2',
    question: `Who was the composer of "Kuch Kuch Hota Hai"?`,
    A: 'Neil Sedaka',
    B: 'O P Nayyar',
    C: 'Jatin-Lalit',
    D: 'Rahat Fateh Ali Khan',
    answer: 'c',
  },
  {
    no: '3',
    question: `The first song, "Chali Aayee", is sung by whom?`,
    A: 'Neil Sedaka',
    B: 'Stevie Wonder',
    C: 'Mohammad Raffi Saab',
    D: 'Chitra and KK',
    answer: 'd',
  },
  {
    no: '4',
    question: `Which of these is a song from the movie "Veer-Zaara"?`,
    A: 'Main Yahaan Hoon',
    B: 'Chup Chup Ke',
    C: 'Silsila Ye Chahaat Ka',
    D: 'Yeh Bandhan Toh',
    answer: 'a',
  },
  {
    no: '5',
    question: `'Mughal-E-Azam' was one of the greatest films made in Bollywood, featuring many hit songs. Who was the music director of this film?`,
    A: 'Elvis Presley',
    B: 'Naushad',
    C: 'Anu Malik',
    D: 'Remo D-souza',
    answer: 'b',
  },
];

log(cyan("Welcome to the..."), title("Bollywood Trivia!\n"))
let user = rs.question("Enter Your Name : ")
log(green(`Hello ${user}`))

log(blueBright("\nA Quiz from our favourite music industry..."))
log("\nThere will be 5 questions.")
log(green("+5"), "points for correct answer.", red("-2"), "points for wrong answer.\n")

for (q of questions) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('A: ' + q.A));
  log(cyan('B: ' + q.B));
  log(cyan('C: ' + q.C));
  log(cyan('D: ' + q.D));

  //input answer
  var ans = rs.question('Answer : ');

  //compare answer
  if (ans.toLowerCase() === q.answer.toLowerCase()) {
    log(green("\n+5"), "Your answer is", green("correct"), ".");
    score += 5;
    log("Your current score is", green(score), "\n");
  } else {
    log(red("+2"), "Your answer is", red("incorrect"), ".");
    score -= 2;
    log("Your current score is", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation..!You Beat the best score."))
} else {
  log(red("You couldn't beat the highscore. Better luck next time!\n"))
}

log(yellow("Scoreboard:"))
log('Hello '+red(user)+' Your final score is : '+green(score)+' / 25')