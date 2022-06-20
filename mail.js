const userEmail = prompt ('inserisci la tua email')
console.log(userEmail);

const emailList = [ 'a@outlook.com', 'b@gmail.it', 'c@myspace.nd'];
console.log(emailList)

let registered = false;

for (i=0; i < emailList.length; i++){
    if(userEmail==emailList[i]){
        registered=true
    }
}

if (registered==true){
    console.log('benvenuto')
} else {
    console.log('registra la tua email')
}