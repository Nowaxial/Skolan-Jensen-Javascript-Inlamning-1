// Uppgift 1a1:
function buttonAction1() 
{
  alert("Välkommen! Här är dagens datum! \n\n" + (new Date)); //Kod här!
} // Slut!

// Uppgift 1a2 här:
function buttonAction2() 
{
  ask = prompt("Raus!", "Skriv här!");
  alert(ask.toUpperCase());
} // Slut!

// Uppgift 1a3 här:
function buttonAction3() 
{
  document.getElementById("result3").innerHTML=ask;
}// Slut!

// Uppgift 1a4 här:
function buttonAction4(){
let start = new Date();
  let time = function () 
  {
  let end = new Date;
  let result = end - start;
  alert("Det tog dig " +  result /1000  + " sekunder!");
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  } 
  document.getElementsByName("button4")[0].onclick = time;
}// Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  num1 = document.getElementById("number1").value;
  num2 = document.getElementById("number2").value;
  if(num1 >= 0 && num2 >= 0 && num1<= 1000 && num2 <= 1000){
  document.getElementById("result5").innerHTML = num1 + num2;} 
  else{
  alert("Tyvärr! Du får bara använda siffror mellan 0 - 1000")
  };
  document.getElementById("result5").innerHTML = num1 * num2;
}// Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  var ord = document.getElementById("textInput").value;
  var counts = 0;
  var split = ord.split(" ");
  for (var i = 0; i < split.length; i++) {
    if (split[i] !="") {
        counts += 1;
    }
  }
  document.getElementById("wordCount").innerHTML = counts;
}// Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  var text = prompt();
  var text2 = ""; 
  for(i=0; i<10; i++){ 
  text2 +=text+ "\n"; 
} 
  alert(text2);
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  var hiddenBtn = document.getElementById("hiddenButton");

  if (hiddenBtn.style.visibility === "visible") {
    hiddenBtn.style.visibility = "hidden";
  } 
  else {
    hiddenBtn.style.visibility = "visible";
  }

  {
  document.getElementById("hiddenButton").onclick = function (){
  alert("Neeeej!\nDu startade precis...\nKaffekokaren!");
  } 
  }
}//Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  var ord = document.getElementById("arrayInput").value;
  var ordArray = ord.split(",");


  var rad = 7,
    table = document.createElement("table"),
    row = table.insertRow();
  
    for (var i = 0; i < ordArray.length; i++) {
      var cell = row.insertCell();
      cell.innerHTML = ordArray[i];
      cell.style.border = "solid 1px #9b0a18"; // Överkurs (border style i cellen)
      cell.style.textAlign = "center"; // Överkurs (text centrerad i cellen)

      var next = i + 1;
      if (next%rad==0 && next!=ordArray.length) {
      row = table.insertRow();      
    }
  }
  document.getElementById("tableContainer").style.tableLayout = "fixed"; // Överkurs
  table.style.border = "solid 3px #0b0b0d"; // Överkurs (border style i table)
  table.style.width = "100%"; // Överkurs (table bredd)
  table.style.backgroundColor = "#79a196"; // Överkurs (table bakgrundsfärg)

  document.getElementById("tableContainer").append(table);
  document.getElementById("arrayInput").value = "";


}//Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
