let text='Hello again';
document.write(text);
let name = "john" ,nachname = "Hinsberger";
document.write('<br>'+ "Name:" + name + '<br>' + "Nachname:" + nachname);
document.getElementById('info').innerHTML += '<h1>Hello World</h1>' + '<h2>How are you';
document.getElementById('container').innerHTML += '<p>start of th Element </p>';
document.write("  end of the Element")
document.getElementById('gallery').innerHTML='<figure style="margin-right:30px;display:inline-block;"><img style="display:inline-block;" src="https://source.unsplash.com/100x100"><figcaption>fig1</figcaption></figure>';
document.getElementById('gallery').innerHTML +='<figure style="margin-right:30px;display:inline-block;"><img style="display:inline-block;" src="https://source.unsplash.com/100x100"><figcaption>fig2</figcaption></figure>';
document.getElementById('gallery').innerHTML +='<figure style="margin-right:30px;display:inline-block;"><img style="display:inline-block;" src="https://source.unsplash.com/100x100"><figcaption>fig3</figcaption></figure>';
//window.alert=("Hallo Welt")
//window.prompt("Bitte geben Sie Ihren Namen ein")
//window.prompt("Bitte geben Sie Ihren Namen ein" , "Cancel")
//window.confirm("Stimmen Sie meiner Meinung zu?")
let alter= prompt ("Gib mir bitte dein Alter:")
console.log(alter);
let b = 5
let a = 5*b-3;
alert(a)
let man = "Rober Waldow ist der größte der Welt:";
let grosse="272cm";
alert(man + grosse)
/*var z = 34;
z = 67 ;
console.log("z=",z)*/
function intro() {
    a = 1+3;
    console.log("hello World");
    console.log("3+1=" + a);

}

intro()
 
function intro2(parameter) {
var varname="supercoder";
console.log("hi, "+varname +" mein Name ist " +parameter);
}

intro2("Hisham")

function intro3(name , alter, stadt) {
    name="Hisham"
    alter="27"
    stadt="Essen"
    console.log("Hallo Supercoder, mein Name ist" + name + " ich bin " + alter + " und komme aus " + stadt)
}

intro3()

function math(x ,y) {
    console.log(x * y)
    console.log(x/y)
}

math(10 ,2)
math(100 ,100)
math(30, 20)
math(5, 0)
math(45, 173)
math(1, 1000)