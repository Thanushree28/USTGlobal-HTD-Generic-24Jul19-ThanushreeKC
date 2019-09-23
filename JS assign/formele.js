let formEle=document.createElement('form');

let label1=document.createElement('label');
label1.textContent='Name:';
let F1=formEle.appendChild(label1);
let text1=document.createElement('input');
let T1=formEle.appendChild(text1);
let br1 = document.createElement('br')
let B1 = formEle.appendChild(br1)
console.log(B1)
let br5= document.createElement('br')
let B5 = formEle.appendChild(br5)
console.log(B5)


let label2=document.createElement('label');
label2.textContent='Age:';
let F2=formEle.appendChild(label2);
let text2=document.createElement('input');
let T2=formEle.appendChild(text2);
let br2= document.createElement('br')
let B2 = formEle.appendChild(br2)
console.log(B2)
let br6= document.createElement('br')
let B6= formEle.appendChild(br6)
console.log(B6)


let label3=document.createElement('label');
label3.textContent='Address:';
let F3=formEle.appendChild(label3);
let text3=document.createElement('input');
let T3=formEle.appendChild(text3);
let br3= document.createElement('br')
let B3 = formEle.appendChild(br3)
console.log(B3)
let br7= document.createElement('br')
let B7 = formEle.appendChild(br7)
console.log(B7)


let label4=document.createElement('label');
label4.textContent='DOB:';
let F4=formEle.appendChild(label4);
let text4=document.createElement('input');
let T4=formEle.appendChild(text4);
let br4= document.createElement('br')
let B4 = formEle.appendChild(br4)
console.log(B4)
let br8= document.createElement('br')
let B8 = formEle.appendChild(br8)
console.log(B8)


let button1=document.createElement('button');
button1.textContent="Submit";
let b1=formEle.appendChild(button1);


document.body.appendChild(formEle);
