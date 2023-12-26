function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting =""
  if (feet <= 400){
    greeting = "This one is on me!"
  }else if(feet>400 && feet<=2000){
    greeting ="That will be twenty bucks."
  }else if(feet>2000&&feet<2500){
    greeting ="I will gladly take your thirty bucks."
  }else {
    greeting = "No can do."

  }
  return greeting;

}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  let messageT="";
  messageT = (city == "NYC") ? "Ok, sounds good.": "No go." ;
  return messageT;

}
ternaryCheckCity("NYC");
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(tip){
  // Write your code here!
  let messagesS=""
  switch(tip){
    case "generous" :
      messagesS = "Thank you so much."
      break;
    case "not as generous":
      messagesS = "Thank you."
      break;
   default :
   messagesS ="Bye."

  }
  return messagesS;



}