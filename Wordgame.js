async function createKeyboard(){
    for(let i = 0; i <26; i++){
        console.log(i);
        document.getElementById("keyboard").innerHTML+= `<span class = "key">${String.fromCharCode(65 + i)}</span>`
    }
}