// console.log("good buy");
// // window.alert("i really love pizz!");

// let age =21
// console.log(age);
// let firstnamw  = "bolaji "


// console.log(firstnamw);

// document.getElementById('p1').innerHTML = "bolaji"+ age + firstnamw;
// document.getElementById('p2').innerHTML = 18

// console.log(age%x=5)

// let username = window.prompt('what is your name?')
// console.log(username)

// let username;
// document.getElementById("myButton").onclick= ()=>{
//     username = document.getElementById('myText').value;
//     console.log(username)
//     document.getElementById("myLabel").innerHTML = "hi man " + username
// }

// let age = window.prompt("Enter your old age here :")
// age =Number(age)
// age +=1;
// console.log("Your new age is ", age,"years")

// let SideA;
// let SideB;
// let SideC;


// document.getElementById('submit').onclick= ()=>{
//     SideA = document.getElementById('sideA').value
//     SideB = document.getElementById('sideB').value
//     SideA = Number(SideA)
//     SideB = Number(SideB)
//     SideC = Math.sqrt(Math.pow(SideA,2)+ Math.pow(SideB,2))
//     console.log(SideC)
//     document.getElementById('sideC1').innerHTML = "The hyptheneous value for  sideA is " + SideA + "cm"+ " and for sideB  " + SideB + "cm"+ "is" + SideC

// }




// document.getElementById('submit').onclick=()=>{
//     Math.sqrt(Math.pow(SideA, 2) + Math.pow(SideB, 2))
//     result1=document.getElementById('sideC1').innerHTML
//     console.log(result1)
// }

// let pi = 3.143;
// let radius = window.prompt("Enter your radius here");

// radius=Number(radius)

// circumference = 2 * pi * radius

// console.log("The circumference of the circle with ", radius , "is ", circumference, "cm")

// x = Math.PI
// console.log(x)

// let sideA = window.prompt("Enter side A value here: ")
// let sideB = window.prompt("Enter side B value here: ")

// sideA = Number(sideA);
// sideB = Number(sideB);

// SideC = Math.sqrt(Math.pow(sideA,2)+ Math.pow(sideB,2))
// console.log("the hyptheneous of the Side A ",sideA, "side B of" , sideB, " is equals ", SideC)


// counter =0;
// document.getElementById('decreaseBtn').onclick=()=>{
//     counter-=1
//     document.getElementById('counter').innerHTML = counter
// }
// document.getElementById('reset').onclick=()=>{
//     counter=0;
//     document.getElementById('counter').innerHTML = counter
// }
// document.getElementById('increaseBtn').onclick=()=>{
//     counter+=1
//     document.getElementById('counter').innerHTML = counter
// }

// let x; 
// let y;
// let z;

// document.getElementById('rollBtn').onclick=()=>{
//     x = Math.floor(Math.random() *6)+1
//     y= Math.floor(Math.random() *6)+1
//     z= Math.floor(Math.random() *6)+1
//     document.getElementById('dice1').innerHTML =x;
//     document.getElementById("dice2").innerHTML =y;
//     document.getElementById('dice3').innerHTML =z;
// }

// let username = "rapheal ogunnaike";
// console.log(username.length)
// console.log(username.charAt(9))
// console.log(username.indexOf('a'))
// console.log(username.toUpperCase())
// console.log(username.toLocaleLowerCase())
// console.log(username.replace('r', 'Z'))

// let firstname = username.slice(0, username.indexOf("o"))
// console.log(firstname)
// lastname =username.slice(username.indexOf("o")-1)
// console.log(lastname)

// let age = window.prompt("Type Your age here :")

// age=Number(age);

// if(age > 10){
//     console.log("Your age", age, " is a genzeni")
// }
// else if (age <= 0 ){
//     console.log("Your age", age, " is for the unborn or aborted ")
// }else{
//     console.log("Your age", age, " is for the millenia! ")
// }

// document.getElementById("submitBtn").onclick = ()=>{
//     let tvSub = document.getElementById("tvSub")
//     let MasterCard = document.getElementById("MasterCard")
//     let Paypal = document.getElementById("Paypal")
//     let Visa = document.getElementById("Visa")
//     let result = document.getElementById("subStatus")

//     if(tvSub.checked){
//         console.log("you have subscribe for DSTv for this month")
        
//     }else{
//         console.log("you have unsubscribe for DSTv for this month")
        
//     }

//     if(MasterCard.checked){
//        console.log("you have subscribe using MasterCard for this month")
        
//     }
//     else if(Paypal.checked){
//         console.log("you have subscribe using Paypal for this month")
             
//     }
//     else if(Visa.checked){
//         console.log("you have subscribe using Visa for this month")
       
//     }else{
//       console.log("you have not picked your mode of payment for this month")
        
//     }

// }

// let grade = window.prompt("please enter your grade here")
// grade = Number(grade)

// switch(true){

//     case grade>70:
//         console.log(`your score ${grade} is an A`)
//         break;
//     case  grade > 69:
//         console.log(`your score ${grade} is an A2`)
//         break;
//     case grade > 60:
//         console.log(`your score ${grade} is a B`)
//         break;
//     case grade >= 59:
//         console.log(`your score ${grade} is a C`)
//         break;
//     case grade >= 50:
//         console.log(`your score ${grade} is a C1`)
//         break;
//     case grade >= 49:
//         console.log(`your score ${grade} is a P`)
//         break;
//     case grade >= 40:
//         console.log(`your score ${grade} is a P`)
//         break;
//     default:
//         console.log(`your grade ${grade} has no definite score`)
    
// }

// let temp = window.prompt("please enter your temp here")
// temp= Number(temp)
// switch(true){
//     case !(temp<0 || temp>30):
//         console.log(`the temperature ${temp} is harsh`)
//         break;
//     default:
//         console.log(`the temperature ${temp} is normal`)
// }

// let userName = "";

// while(userName==""|| userName == null){
//     userName = window.prompt("enter your name")
// }

// console.log('hello', userName)

// for(let i=1; i<=4; i+=2){       
//     for(let j=1; j<=3; j+=2){       
//         console.log(j)
//     }
// }

// let  symbol = window.prompt('enter the desired symbol')
// let rows = window.prompt('enter the number of rows')
// // let column = window.prompt('enter the number of column')

// // for(let i=1; i<=rows; i+=1){
// //     for (let j=1; j<= column; j+=1){
// //         document.getElementById('myRectangle').innerHTML +=symbol;       
// //     }
// //     document.getElementById('myRectangle').innerHTML +='<br>'  
// // }
// // start()

// // function start (){
// //     let username ='jimoh';
// //     age =2;
// // apiBir(username, age)
// // }

// // function apiBir(username, age){
// //     console.log('happiest birthday to you')
// //     console.log('happiest birthday to you')
// //     console.log('happiest birthday to you', username)
// //     console.log('happiest birthday', username,  age)
    
// // 

// // let height;
// // let width;
// // let Area;

// // height = window.prompt('type in your height:');
// // width = window.prompt('type in your width:');

// // Area = getArea(height, width);
// // console.log(Area)
// // function getArea(height, width){
// //     return width* height
// // }

// let sideA;
// let sideB;
// let sideC;

// sideA= window.prompt('enter your side number side A');
// sideA = Number(sideA);

// sideB= window.prompt('enter your side number Side B');
// sideB = Number(sideB);

// sideC = getArea(sideA, sideB)

// console.log(`The hypotheneous of a triangle of sides ${sideA} and ${sideB} is ${sideC}`);

// function getArea (sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }


// let age;

// age = window.prompt('what is your age :')
// age = Number(age)

// checkAge(age)

// function checkAge(age){
//     return age>18 ? console.log(age,'an adult') : console.log(age, 'is not an adult age')

// }
// let  win;
// win = true

// checkWinner(false)
// function checkWinner(win){
//     win ? console.log('You win!') : console.log('You lose!')
// }

// let myNumb = 123456.789;

// myNumb = myNumb.toLocaleString('hi-IN', {style:'currency', currency:'Eur'});
// myNumb = myNumb.toLocaleString(undefined, {style:'percent'});
// myNumb = myNumb.toLocaleString(undefined, {style:'unit', unit:'presure'});

// console.log(myNumb)

// const answer = Math.floor(Math.random()*10+1)
// let guesses=0;

// document.getElementById('submitBtn').onclick = ()=>{
//     let guess = document.getElementById('guessField').value;
//     guesses+=1;
    // if(guess== answer){
    //     alert(`${answer} is the #. it took you ${guesses}`);
    // }else if(guess < answer){
    //     alert(`too small`)
    // }
    // else{
    //     alert('too large')
    // }
    // switch(true){
    //     case guess == answer: alert(`${answer} is the #. it took you ${guesses}`)
    //         break;
    //     case guess < answer: alert(`too small`)
    //         break;
    //     default: alert(`too big`)        
    // };  

//     switch(true){
//         case answer == guess: alert(`${answer} is the #. it took you ${guesses} guesses`)
//             break;
//         case answer < guess : alert(`too big`)
//             break;
//         default: alert(`too small`)        
//     };


// document.getElementById('submitButton').onclick=()=>{
//     let temp;
//     temp = document.getElementById('textBox').value;
//     temp = Number(temp); 

//     switch(true){
//         case document.getElementById('cButton').checked:
//             temp= toCelcius(temp);
//             document.getElementById('tempLabel').innerHTML= temp ;            
           
//         break;
//         case document.getElementById('fButton').checked:
//             temp= toFahrenheit(temp);
//             document.getElementById('tempLabel').innerHTML= temp; 
//             break;
//         default: document.getElementById('tempLabel').innerHTML = 'select a unit'
//     }
// }


// function toCelcius(temp){
//     return ( temp -32) * (5/9)
// }

// function toFahrenheit(temp){                                                                                            \

//     return temp*9/5 +32              
// }

// let fruit = ["ornge", 'pine', 'kane']
// fruit[1]='jimoh'
// fruit.push("lemon")
// fruit.unshift                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ("jimoh")
// console.log(fruit) 

// let fruit = [2,'pine', 'grape', 'apple', 'mango'];
// let vegetable = ['carrot', 'onions', 'potatoes'];
// let meats = ['eggs', 'chicken', 'fish'];

// let groceryList = [fruit, meats, vegetable]

// for(let list of groceryList){
//     console.log(list)
// }
// for(let list of groceryList){
//     for(let food of list){
//         console.log(food)
//     }
   
// }
// console.log(groceryList[0] [0])

// let number = [1, 2 ,3 , 4, 5, 6, 8]
// console.log(...number)
// let username = 'Jimoh  lagbaja'
// console.log(...username)
// let min = Math.min(...number)
// console.log(min)

// let class1 = ['yemi','bolaji', 'fola']
// let class2 =[1, 'bola', 'segun', 10]
// // class2.push(class1)

// class1.push(...class2)
// console.log(...class1)

// let ms = Math.min(1, 2 ,3 , 4, 5, 6, 8)

// console.log(ms)

// let a=2;
// let b= 3;
// // console.log(sum(a, b ))

// let fruit = ['apple', 'pineapples', 'banana'];
// let vegetables = ['carrots', 'onions' , 'potatoes'];
// let meat = ['egg' , 1, 'chicken ', 'fish']

// let groceryList = [fruit, vegetables, meat]
// groceryList[2][0]=20;
// console.log(groceryList)

// for(let lists of groceryList){
//     console.log(lists)
// }
// for(let lists of groceryList){
//     for(let list of lists){
//     console.log(list)}
// }

// let numbers = [1,2,3,4,5,6]
// let userName = 'Rapheal Ogunnaike'
// let maximum = Math.max(...numbers)
// console.log(...numbers)
// console.log(...userName)


// console.log(maximum)

// let class1 = ['jama', 'mark']
// let class2 = ['maga','raga']

// class1.push(...class2)
// console.log(class1)

// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;
// let f=20;
// let g = ' karama';
// let h = 8;

// console.log(sum(a,b,c,d,e,f ,h,a ))

// function sum(...numbers){
//     let total =0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }

// let a=1;
// let b=2;
// let c=3;

// console.log(sum(a,b))

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }

// let a = 30;
// let c = 21;
// let z = 300;


// console.log(sum(a,c,z))

// function sum(...noxs){
//     let totox =0;
//     for(let yam of noxs){
//         totox += yam
//     }
//     return totox
// }



// let x=10;
// let y=21;

// console.log(sum(x,y))

// function sum(...nux){
//     let total = 0;
//     for(let green of nux){
//         total +=green
//     }
//     return total
// }

// let total = sum(2,3)

// displayconsole(total);
// displayDOM(total);
// function sum(x,y){
//     let result = x+y;
//     return result
// }

// function displayconsole(output){
//     console.log(output);
// }
// function displayDOM(output){
//     document.getElementById('laba').innerHTML = output;
// }

// sum(11, 10 , displayDOM, displayConsole);

// function sum(x,y, callback, callback2){
//   let  result = x + y;
//     callback(result);
//     callback2(result);
    
// }

// function displayDOM(op){
//     document.getElementById('laba').innerHTML = op;
// }
// function displayConsole(op){
//     console.log(op)
// }

// let a=1;
// let b = 2 ;
// let c=3;
// let d=20;



// console.log(sum(a,b,c,d))
// displayConsole();

// function sum( ...noza){
//     let totalx =0;
//     for (let gen of noza){
//         totalx += gen;
//     }
//     return totalx ;
     

// }

// function displayConsole(){
    
//    return console.log(totalx)
// }

// let total = sum(2,3);
// displayConsole(total)
// displayDOM(total)

// function sum(x,y){
//     let result = x + y;
//     return result;
// }
// function displayConsole(opt){
//     console.log(opt)
// }
// function displayDOM(opt){
//     document.getElementById('laba').innerHTML = opt
// }


// let students =['daniel', 'bola', 'segun'];
// students.forEach(capitalize);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() 
//     + element.substring(1);
// }

// console.log(students[1])


// addx(8, 10 , idom , idconsole );

// function addx(a,b, kallback , kallback2){
//     let resultx = a*b ;    
//     kallback(resultx);
//     kallback2(resultx);
// }

// function idom(income){
//     document.getElementById('laba').innerHTML = income
// }
// function idconsole(income){
//     console.log(income)
// }

// let k = window.prompt('enter your first number' );
// k =Number(k);
// let tk = window.prompt('enter your first number' );
// tk =Number(tk);

// goom(k , tk, ckall, ckall1);
// function goom(x,y, kall , kall1){
//     let mass = Math.sqrt(Math.pow(x,2) + 
//     Math.pow(y,2));
//     kall(mass);
//     kall1(mass);
// }

// function ckall(po){
//     console.log(po);
// }
// function ckall1(po){
//     document.getElementById('laba').innerHTML = po;
// }

// let studentx = ['adamu', 'basser' , 'cassava'];
// studentx.forEach(xapitalize);
// studentx.forEach(print);

// function xapitalize(element, index, y){
//     y[index] = element[0].toUpperCase() + element.substring(1);

// }
// function print(element){

//     console.log(element)
// }


// let prime = [2, 5 , 10 ,  20];
// prime.forEach(mtx);
// prime.forEach(rint);

// function mtx(k, l, n){
//     n[l] = k[0]*3;
// }
// function rint(k){
//     console.log(k)
// // }
// let  akawe = [2, 4, 6, 7];
// akawe.forEach(zilox);
// akawe.forEach(ink);

// function zilox(element, index, array){
//     array[index]= Math.pow(element,2);
    
// }

// function ink (element){
//     console.log(element);
// }

// let number = [8, 9, 10];
// let numbers = number.map(umber);

// numbers.forEach(umb);

// function umber(element){
//     return Math.pow(element,3)
// }

// function umb(element){
//     console.log(element);
// }

// let cap = ['jimoh', 'rapha', 'bukola'];
// cap.forEach(rint);
// cap.forEach(print);

// function rint (element, index, array){
//     array[index] = element[1].toUpperCase() + element.substring(0);
// }
// function print(element){
//     console.log(element);
// }
// let capx = [17, 19 ,20];
// let capxx = capx.map(rintx);
// capxx.forEach(rintx);
// capxx.forEach(printx);



// function rintx (element){
//     return Math.pow(element,3)
// }
// function printx(element){
//     console.log(element);
// }

// let size = [2, 3, 4, 5,6];
// let newSize = size.filter(cSize);

// newSize.forEach(rint);



// function cSize (checkSize){
//     return checkSize >=3;
// }

// function rint (element){
//     console.log(element)
// }

// let price = [10, 20, 8, 21 , 40, 60, 16, 5, 1, 7,18, 7770, 32]

// let nPrice = price.filter(xPrice);
// let total1 = price.reduce(checkout);
// let total2 = nPrice.reduce(checkout)

// nPrice.forEach(toPrint);
// toPrint2(total1);
// toPrint3(total2);

// function checkout(total1, element){
//     return total1 + element ;
// }

// function xPrice(e){
//     return e <= 40
// }


// function toPrint(e){
//     console.log(e)
// }
// function toPrint2(total1){
//     console.log(`The total is: $${total1}`)
// }
// function toPrint3(total2){
//     console.log(`The total is: $${total2}`)
// }

// let  weight = [12, 14, 17, 20, 50, 34]
// let  nWeight = weight.filter(size);
// let rWeight = weight.reduce(rsize);
// let sWeight = weight.sort(aascending);
// nWeight.forEach(display);
// displayx(rWeight);
// sWeight.forEach(asending);

// function rsize(totalo, e){
//     return totalo + e
// }

// function size(e){
//     return e  >  14
// }
// function display(e){
//     console.log(e)
// }
// function displayx(totalo){
//     console.log(`The total price is $${totalo}`)
// }

// function aascending(x,y){
//     return y-x;
// }
// function asending(element){
//     console.log(element)
// }\



let grade = [100, 80, 90, 34, 23];

grade.sort(ascending);