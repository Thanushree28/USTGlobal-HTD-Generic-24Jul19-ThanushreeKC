let tableEle = document.createElement('Table');
tableEle.border = "2px solid";
let tr1 = document.createElement('tr')
let trd1 = document.createElement('td')
trd1.textContent = 'Name';
let trd2 = document.createElement('td')
trd2.textContent = 'Age';
let trd3 = document.createElement('td')
trd3.textContent = 'Address';
let trd4 = document.createElement('td')
trd4.textContent = 'DOB';
let trd5 = document.createElement('td')
trd5.textContent = 'Email';
let trd6 = document.createElement('td')
trd6.textContent = 'Gender';

let tr2 = document.createElement('tr')
let trd7 = document.createElement('td')
trd7.textContent = 'Arun';
let trd8 = document.createElement('td')
trd8.textContent = '20';
let trd9 = document.createElement('td')
trd9.textContent = 'mysore';
let trd10 = document.createElement('td')
trd10.textContent = '28 june 97';
let trd11 = document.createElement('td')
trd11.textContent = 'arun@gmail.com';
let trd12 = document.createElement('td')
trd12.textContent = 'Male';

let tr3 = document.createElement('tr')
let trd13 = document.createElement('td')
trd13.textContent = 'Arvi';
let trd14 = document.createElement('td')
trd14.textContent = '22';
let trd15 = document.createElement('td')
trd15.textContent = 'mandya';
let trd16 = document.createElement('td')
trd16.textContent = '18 june 98';
let trd17 = document.createElement('td')
trd17.textContent = 'arav@gmail.com';
let trd18 = document.createElement('td')
trd18.textContent = 'Female';

tr1.appendChild(trd1);
tr1.appendChild(trd2);
tr1.appendChild(trd3);
tr1.appendChild(trd4);
tr1.appendChild(trd5);
tr1.appendChild(trd6);
let T = tableEle.appendChild(tr1);
console.log(T);

tr2.appendChild(trd7);
tr2.appendChild(trd8);
tr2.appendChild(trd9);
tr2.appendChild(trd10);
tr2.appendChild(trd11);
tr2.appendChild(trd12);
let T1 = tableEle.appendChild(tr2);
console.log(T1);

tr3.appendChild(trd13);
tr3.appendChild(trd14);
tr3.appendChild(trd15);
tr3.appendChild(trd16);
tr3.appendChild(trd17);
tr3.appendChild(trd18);
let T2 = tableEle.appendChild(tr3);
console.log(T2);
document.body.appendChild(tableEle);
