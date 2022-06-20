const userNumber = Math.floor((Math.random() * 6)+1);
console.log(userNumber)


const computerNumber = Math.floor((Math.random() * 6)+1);
console.log(computerNumber);

if(userNumber > computerNumber){
    console.log('hai vinto')
} else if (userNumber < computerNumber){
    console.log('hai perso')
} else if(userNumber = computerNumber) {
    console.log('pareggio, ritira')
}
