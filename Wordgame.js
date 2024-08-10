let words = [
    {
        word: "bomb",
        hint: "something that is used to blow things up"
    },
    {
        word: "bomb1",
        hint: "something that is used to blow things up"
    },
    {
        word: "bomb2",
        hint: "something that is used to blow things up"
    },
    {
        word: "bomb34",
        hint: "something that is used to blow things up"
    }
]

let currentWord = 0;
let score = 0;

function compareWord(){
    sameWord = true;
    word = words[currentWord].word;
    word = word.toUpperCase();
    boxes = document.getElementById("writingBar").childNodes;
    for(let i = 0; i<word.length; i++){
        if(boxes[i].innerHTML == word[i]){
            boxes[i].style.backgroundColor = "green";
            boxes[i].innerHTML = "";
        } 
        else{ 
            boxes[i].style.backgroundColor = "red";
            boxes[i].innerHTML = "";
            sameWord = false;
        }
    }
    if(sameWord == true){
        score += 10;
        currentWord +=1;
        document.getElementById("score").innerHTML = "Score:" + score;
        changeWord(currentWord);
    }
}

async function createKeyboard(){
    for(let i = 0; i <26; i++){
        console.log(i);
        document.getElementById("keyboard").innerHTML+= `<span class = "key" onclick = "addLetter(this)">${String.fromCharCode(65 + i)}</span>`;
    }
}

function addLetter(text){
    boxes = document.getElementById("writingBar").childNodes;
    for(let i = 0; i <boxes.length; i++){
        if (boxes[i].innerHTML ==""){
            boxes[i].innerHTML = text.innerHTML;
            document.getElementById("writingBar").value +=text.innerHTML;
            break;
        }        
    }
    console.log(document.getElementById("writingBar").value);
}

function changeWord(i){
    word = words[i].word;
    document.getElementById("writingBar").value = "";
    document.getElementById("writingBar").innerHTML = ""
    for(let j = 0; j <word.length; j++){
        document.getElementById("writingBar").innerHTML += `<div class = "writingBarSpaces"></div>`
    }
}

function startGame(){
    changeWord(0);
    let countDownDate = new Date().getTime() + 30000;
    var x = setInterval(function() {

        var now = new Date().getTime();
          
        var distance = countDownDate - now;
        document.getElementById("timer").innerHTML =  `Time: ${Math.floor(distance/1000)}`;
        if (distance <= 0){
            document.getElementById("timer").innerHTML = "Over!"
            return;
        }
    }, 1000)
}