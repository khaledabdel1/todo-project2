var userName = prompt("Please enter your name");
var userGender = prompt("Please enter your gender");
var userAge =prompt("enter your age");

if (userAge <=0) {
    alert ("please enter a positive value")
}

var skipe = confirm("Do you want to skip welcoming message?");
console.log(skipe);

if (userGender == 'male' && skipe == false){
    alert('welcome Mr.' + userName);
} else if (userGender == 'female' && skipe == false){
    alert('welcome Ms.' + userName );
} else if (userGender !== 'male' && userGender !== 'femal' && skipe == false){
    alert('welcome '+ userName);
}

let jordan =prompt("do you live in jordan?");
let code = prompt("do you like to code?");
let education = prompt("do have a diploma?");

let arr = [jordan, code, education];
 function arrTest() {
    for (let i = 0; i < arr.length; i++){
    if (arr[i] == '') {
        arr[i] = "invalid"
        console.log(arr)
    }
 }
 }

 arrTest();


