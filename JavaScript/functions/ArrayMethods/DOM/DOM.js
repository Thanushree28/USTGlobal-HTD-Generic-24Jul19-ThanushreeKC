// getElementById()
let pElement = document.getElementById('demo')
console.log(pElement);
pElement.textContent = ' this is new p tag';
// getElementsByClassName()
let divElements = document.getElementsByClassName('blue'); /* returns html collection*/
console.log(divElements);
let pElements = document .getElementsByTagName('p'); /*returns html collection*/
console.log(pElements);
let nameElements = document.getElementsByName('helement');
console.log(nameElements);
let demoElement = document.querySelector('#demo'); /* demo is id we represnt*/
console.log(demoElement);
let blueClassElements = document.querySelectorAll('.blue') /*blue is a class we represent using .class*/
let buttonElement = document.createElement('button');
buttonElement.textContent = 'Click Me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
let spanEle = document.getElementById('demo');
spanEle.style.color ='pink';
let buttonElement1 = document.getElementById('buttonEle');
// buttonElement1.className = 'add';
buttonElement1.classList = 'add add1'


console.log("==================================================")
let pElementData = document.getElementById('demo1');
// pElementData.style.color = 'blue'
// pElementData.className = 'blue';
pElementData.classList = 'blue add1';
