/**function login(){
    const username ="Ruvindu"
    const password ="1234"

   let textusernamevalue= document.getElementById("textusername").value;
   let textpasswordvalue= document.getElementById("textpassword").value;

if(textusernamevalue =username && textpasswordvalue == password){
    alert("login succses : )");
} else {
    alert("login faild :(");
}
}
**/

/**let numbers =[10,20,30,40,50,60,70,80,90,100];
let sume =0;

for(let i=0;i<numbers.length; i++){
    console.log(numbers[i]);
    sume+=numbers[i];


}

console.log("sum is :"+ sume);
console.log(numbers);**/



//let isTrue =10 =="10";
//console.log(isTrue);


//isTrue =10=="10";
//console.log(isTrue);


///let numbers =[10,20,30,40,50,60,70,80,90,100];



//numbers.forEach(number =>{
    //console.log (number);
    //document.write(`<h1>${number}</h1>`);
//});




function Calc() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let totalDisplay = document.getElementById("total_display");
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        num1 / num2;
    } else {
        result = "Invalid operator";
    }

    totalDisplay.innerHTML = result;
}




//function calc (){
  ///  let displayText = document.getElementById("displayText").ariaValue;
   // let lblOutput = document.getElementById("lblOutput");
    //let sum = eval (displayText);
    //lblOutput.innerHTML=sum;
    //alert(sum);
//}