// EDIT THIS FILE to personalize the treasure hunt.
// For multiple accepted text answers, add more strings to the accepted array.
// For multiple-choice questions, answer is the zero-based correct option (first option = 0).
const CLUES = [
 {kind:"MEMORY GATE",title:"Where the story begins",question:"First place we met?",hint:"Think of the place where we first met in real life.",options:["The Moon 🌙","The Airport 🛬","A castle 🏰"],answer:1,wrong:"Hmm... our detective needs another guess!"},
 {kind:"MISSING MEMORY",title:"The memory in disguise",question:"A little clue about a favourite moment: it involved laughter, a screen, and two people who forgot what time it was. What kind of moment is it?",hint:"something like calll...",placeholder:"Type your guess...",accepted:["late night call","late-night call","video call","late night conversation","call"]},
 {kind:"EMOJI DECODER",title:"Decode this secret message",question:"Decode the emojis: 🧁 + 🎉 + 👑. What are we celebrating?",hint:"It's the reason this whole adventure exists.",options:["A royal cupcake party","Your birthday, birthday queen!","A baking competition"],answer:1},
 {kind:"THE BOYFRIEND TEST",title:"A very serious scientific quiz",question:"What is the most likely thing your boyfriend would do during a movie?",hint:"Choose the most believable chaos.",options:["Fall asleep in 10 minutes 😴","Ask 47 questions 🤔","Eat all the snacks 🍿 including you😋"],answer:2},
 {kind:"SECRET PASSWORD",title:"The password to the treasure",question:"I have hands but cannot clap. I go around in circles but never fall. What am I?",hint:"You might check me when you're running late.",placeholder:"Enter the password...",accepted:["clock","a clock"]},
 {kind:"FINAL TREASURE",title:"One last little question",question:"What is the most important ingredient in this birthday adventure?",hint:"It's not cake, glitter or Wi-Fi. It's what went into making this for you.",options:["A little bit of magic ✨","Love, obviously 💗","Unlimited cake 🍰"],answer:1}
];
const FINAL_MESSAGE = "Happy birthday, my favourite homan!🚺 You solved every clue, but the real treasure is getting to know you and make memories with you. I wish I could celebrate beside you today. Until then, I hope this little adventure made you smile. Your next surprise is waiting in the letters. ♡";
const OPEN_WHEN_LINK = "../open-when/index.html";