// Import stylesheets
import './style.css';
const moment = require('moment');

// Write Javascript code!
let data = {};
async function asyncCall() {
  data = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(res => res.json())
    .then(json => data = json);
    let fact = data.text;
    let factText = document.getElementById('fact');
    factText.innerHTML = fact;
}
asyncCall();
setInterval(() => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1>Hello There Today is ${moment().format('ddd MMM DD hh:mm:ss A')}</h1>`;
}, 1000);
