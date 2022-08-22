/**creation d un numbre random  avec la fonction random  entre 0 to 10 en le multiplié fois 10  / to 100 en multipliéer par 100 *
 --> type de ce randon est float 
const num1 = Math.random()*100;*/

/**  creation d'un nombre entiere  entre    0 et 10 ou 0 et 100*/
const num1= Math.ceil(Math.random()*10);
const num2 =Math.ceil(Math.random()*10);

const scoreElement= document.getElementById("score");

const questionElement =  document.getElementById("question");

const formElement = document.getElementById("form");

const answerElement = document.getElementById("input");

//score update local storage et l affichage dans HTML
 let score = JSON.parse(localStorage.getItem("score"));
 if (!score){
    score = 0;
 }

scoreElement.innerText=`  Score: ${score}`;
//affichage the random number in HTML PART
questionElement.innerText=`What is ${num1} Multiply by ${num2} ?`;

// test the answer
const correctAswer = num1 * num2;
 formElement.addEventListener("submit", ()=>{
     const userAnswer = +answerElement.value;
    if (userAnswer  === correctAswer){
        score++;
        updateLocalStorage();
    }
    else{
       score--;
       updateLocalStorage();
    }
    
 });
// fonction for localize the score end store it 
 function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
 }
 

