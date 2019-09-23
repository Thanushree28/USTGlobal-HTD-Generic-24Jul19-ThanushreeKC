/*let tableEle = document.createElement('table');
let tr1 = document.createElement('tr');
let trd1 = document.createElement('td');
trd1.textContent = 'Name';
let trd2 = document.createElement('td')
trd2.textContent = 'Age';

let tr2 = document.createElement('tr');
let trd3 = document.createElement('td');
trd3.textContent = 'john';
let trd4 = document.createElement('td')
trd4.textContent = '14';

let tr4 = document.createElement('tr');
let trd5 = document.createElement('td');
trd5.textContent = 'dinga';
let trd6 = document.createElement('td')
trd6.textContent = '20';

let tr5 = document.createElement('tr');
let trd7 = document.createElement('td');
trd7.textContent = 'sundari';
let trd8 = document.createElement('td')
trd8.textContent = '22';
tr1.appendChild(trd1);
tr1.appendChild(trd2);
let T= tableEle.appendChild(tr1);
console.log(T);

tr2.appendChild(trd1);
tr.appendChild(trd2);
let T= tableEle.appendChild(tr1);
console.log(T);
document.body.appendChild(tableEle);


*/
let tableEle = document.getElementById('tableid').innerHTML = `<table border = 1px>
                                                               <tr>
                                                               <td>Name</td>
                                                               <td>Age</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                 <td>John</td>
                                                                <td>14</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                <td>Dinga</td>
                                                                <td>20</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                <td>Sundari</td>
                                                                <td>22</td>
                                                                </tr>
                                                </table>`
