function testObjectfun()

//Instance of an object
{
  const student = new Object();
  student.id = 4;
  student.name = "twinkal"
  document.getElementById("testObj1").innerHTML = student.id + " " + student.name;

//Object Literal 
  const emp = { id: 2, name: "twinkal", area: "fatehgunj" }
  document.getElementById("testObj2").innerHTML = emp.id + "" + emp.area;

//Object Constructor
  function testObject(id,name,dept){
    this.id=id;
    this.name=name;
    this.dept=dept;
  }
  e=new testObject(4,"twinkal","trainee");
  document.getElementById("testObj3").innerHTML = e.id+e.name+e.dept;
}

function testObject1fun()

//new keyword
{
const cities = new Array("baroda","rajkot","ahemdabad");
document.getElementById("testObj4").innerHTML = cities;
  
}

function testString()

//String
{
let escape = "i'm twinkal \"tinku\" from in india.";
document.getElementById("testString1").innerHTML = escape;

//Slice
let fruits = "apple,banana,grape";
document.getElementById("testString2").innerHTML = fruits.slice(8,16);
Document.getElementById("testSliceNegative").innerHTML = fruits.slice(-7,-5);
document.getElementById("testSlicepositive").innerHTML = fruits.slice(6);

}

function testArray()

//Array
{
const vegetables = ("potato","tomato","onion");
document.getElementById("testArrayveggy").innerHTML = vegetables;

const fruits = [];
fruits[0]="apple";
fruits[1]="orange";
fruits[2]="banana";
fruits[3]="pineapple";
document.getElementById("testArrayfruits").innerHTML = fruits;
}

// function testcontinue()

