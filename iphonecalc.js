const display=document.getElementById("display");
function toDisplay(input){
  display.value+=input;
  i
}
function clearDisplay(){
 display.value='';

}
function calculate(){
  try{
  display.value= eval(display.value);
  }
  catch(error){
    display='Error';
  }
}