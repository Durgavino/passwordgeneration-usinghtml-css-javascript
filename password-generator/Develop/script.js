// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomint(min,max)
{
  if(!max){
    max=min
    min=0
  }
  var rand= Math.random()
return Math.floor(min*(1 -rand) + rand*max) 
}

function getrandomitem(list){
  return list[randomint(list.length)]
}

function generatePassword()
{
   //Prompt the user for password criteria
  var passvalue = window.prompt("Enter the Length of a Password","")
  
 //Evaluating the user input

  if(passvalue ===0){
    window.alert("Enter the Length for the password")

  }
   else if(isNaN(passvalue)){
    window.alert("Enter the number")
   }

if(passvalue < 8 || passvalue > 128){
  window.alert("The Length should be between 8 and 128 characters")
  return
}
 

  
  // confirm box for the characters
var usernumber= window.confirm("Click ok to add numbers in the Password")
var usersymbol= window.confirm("Click ok to add symbols in the Password")
var userlowercase= window.confirm("Click ok to add lowercase in the Password")
var useruppercase= window.confirm("Click ok to add uppercase in the Password")


  //Declaring the values
var numberList=["0","1","2","3","4","5","6","7","8","9"]
var symbolList=["!","#","$","%","&","*","(",")",",",".","-","/"]
var lowerList=["a","b","c","d,","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperList=["A","B","C","D,","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  //validate the input
var selectedlist = []

if (usernumber === true)
{
  selectedlist.push(numberList)
}

if (usersymbol === true)
{
  selectedlist.push(symbolList)
}

if (userlowercase === true)
{
  selectedlist.push(lowerList)
}

if (useruppercase === true)
{
  selectedlist.push(upperList)
}

if(selectedlist.length === 0){
  selectedlist.push(lowerList)
}

var generatedpassword = ""

for(var i=0; i< passvalue; i++)
{
var randomList = getrandomitem(selectedlist)
var randomcharacter= getrandomitem(randomList)
generatedpassword += randomcharacter
}
  //display the password to page
return generatedpassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
