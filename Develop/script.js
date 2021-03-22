const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

const textBox1 = document.getElementById("textBox1");
const textBox2 = document.getElementById("textBox2");
const textBox3 = document.getElementById("textBox3");
const textBox4 = document.getElementById("textBox4");
const textBox5 = document.getElementById("textBox5");
const textBox6 = document.getElementById("textBox6");
const textBox7 = document.getElementById("textBox7");
const textBox8 = document.getElementById("textBox8");
const textBox9 = document.getElementById("textBox9");

const storedInput1 = localStorage.getItem("textinput1");
const storedInput2 = localStorage.getItem("textinput2");
const storedInput3 = localStorage.getItem("textinput3");
const storedInput4 = localStorage.getItem("textinput4");
const storedInput5 = localStorage.getItem("textinput5");
const storedInput6 = localStorage.getItem("textinput6");
const storedInput7 = localStorage.getItem("textinput7");
const storedInput8 = localStorage.getItem("textinput8");
const storedInput9 = localStorage.getItem("textinput9");

const timeSlot1 = document.getElementById("timeSlot1");
//display current day at the top of the calendar
function getHeaderDate() {
  var currentHeaderDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();

//each block should be color coded to indicate past, present or future

// Local Storage for Block 1
if (storedInput1) {
  textBox1.textContent = storedInput1;
}

textBox1.addEventListener("input", (letter) => {
  textBox1.textContent = letter.target.value;
});

let saveToLocalStorage1 = () => {
  localStorage.setItem("textinput1", textBox1.textContent);
};

button1, addEventListener("click", saveToLocalStorage1);

// local storage for block 2
if (storedInput2) {
    textBox2.textContent = storedInput2;
  }
  
  textBox2.addEventListener("input", (letter) => {
    textBox2.textContent = letter.target.value;
  });
  
  let saveToLocalStorage2 = () => {
    localStorage.setItem("textinput2", textBox2.textContent);
  };
  
  button2, addEventListener("click", saveToLocalStorage2);


// local storage for block 3
if (storedInput3) {
    textBox3.textContent = storedInput3;
  }
  
  textBox3.addEventListener("input", (letter) => {
    textBox3.textContent = letter.target.value;
  });
  
  let saveToLocalStorage3 = () => {
    localStorage.setItem("textinput3", textBox3.textContent);
  };
  
  button3, addEventListener("click", saveToLocalStorage3);


// local storage for block 4
if (storedInput4) {
    textBox4.textContent = storedInput4;
  }
  
  textBox4.addEventListener("input", (letter) => {
    textBox4.textContent = letter.target.value;
  });
  
  let saveToLocalStorage4 = () => {
    localStorage.setItem("textinput4", textBox4.textContent);
  };
  
  button4, addEventListener("click", saveToLocalStorage4);


// local storage for block 5 
if (storedInput5) {
    textBox5.textContent = storedInput5;
  }
  
  textBox5.addEventListener("input", (letter) => {
    textBox5.textContent = letter.target.value;
  });
  
  let saveToLocalStorage5 = () => {
    localStorage.setItem("textinput5", textBox5.textContent);
  };
  
  button5, addEventListener("click", saveToLocalStorage5);5


// local storage for block 6
if (storedInput6) {
    textBox6.textContent = storedInput6;
  }
  
  textBox6.addEventListener("input", (letter) => {
    textBox6.textContent = letter.target.value;
  });
  
  let saveToLocalStorage6 = () => {
    localStorage.setItem("textinput6", textBox6.textContent);
  };
  
  button6, addEventListener("click", saveToLocalStorage6);


// local storage for block 7
if (storedInput7) {
    textBox7.textContent = storedInput7;
  }
  
  textBox7.addEventListener("input", (letter) => {
    textBox7.textContent = letter.target.value;
  });
  
  let saveToLocalStorage7 = () => {
    localStorage.setItem("textinput7", textBox7.textContent);
  };
  
  button7, addEventListener("click", saveToLocalStorage7);


// local storage for block 8
if (storedInput8) {
    textBox8.textContent = storedInput8;
  }
  
  textBox8.addEventListener("input", (letter) => {
    textBox8.textContent = letter.target.value;
  });
  
  let saveToLocalStorage8 = () => {
    localStorage.setItem("textinput8", textBox8.textContent);
  };
  
  button8, addEventListener("click", saveToLocalStorage8);


// local storage for block 9
if (storedInput9) {
    textBox9.textContent = storedInput9;
  }
  
  textBox9.addEventListener("input", (letter) => {
    textBox9.textContent = letter.target.value;
  });
  
  let saveToLocalStorage9 = () => {
    localStorage.setItem("textinput9", textBox9.textContent);
  };
  
  button9, addEventListener("click", saveToLocalStorage9);

//clicking save button for the time block will save text to local storage
// utilizes event listeners on the save button
// when save button is clicked we are only grabbing associated text area from the specific row

//page persists after refreshing page
