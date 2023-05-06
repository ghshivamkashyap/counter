// select the HTML element with the ID 'count' and assign it to the variable countval
const countval = document.querySelector("#count");

// create a function called 'increment' that will increase the value of 'countval' by 1 when called
const increment = () => {
  // get the current value of 'countval' and parse it as an integer using 'parseInt'
  let val = parseInt(countval.innerText);
  // increase the value of 'val' by 1
  val = val + 1;
  // set the inner text of 'countval' to the new value of 'val'
  countval.innerText = val;
};

// create a function called 'decrement' that will decrease the value of 'countval' by 1 when called
const decrement = () => {
  // get the current value of 'countval' and parse it as an integer using 'parseInt'
  let val = parseInt(countval.innerText);
  // decrease the value of 'val' by 1
  val = val - 1;
  // set the inner text of 'countval' to the new value of 'val'
  countval.innerText = val;
};
