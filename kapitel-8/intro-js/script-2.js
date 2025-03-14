// var namn = prompt ("vad heter du?");
// var ålder = prompt ("Hur gammal är du?");
// alert("Hej, " + nman + " du är " + ålder + " gammal");
// console.log("Det verkar funka ")


// var tal1String = prompt("Skriv ett tal");
// var tal2String = prompt("Skriv ett tal");
// var summa = parseInt(tal1String) + parseInt(tal2String);
// alert("summan är " + summa);


// var ålder = prompt ("Hur gammal är du?");
// var studentÅlder = parseInt(ålder) + 1;
// alert("You will be " + studentÅlder + " next year");

// document.writeln("<h2>Du är " + studentÅlder + " när du tar studenten!<h2>");

var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
console.log(slumptal1, slumptal2);
var summa = slumptal1 + slumptal2;

var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ?");
if (gissning == summa) {
    document.writeln("<h1>Good Job!<h1>");
} else {
    document.writeln("<h1>Sucker! <h1>");
}
