let empJSON = {
                 name : 'dinga',
                 age : 30,
                 hobbies : ['dancing','singing']
              }
console.log(`My name is ${empJSON.name}`);
console.log(empJSON);
// to convert JS object to string
let jsonObject = JSON.stringify(empJSON);
console.log(jsonObject);
// to convert string JS object
let jsObject = JSON.parse(jsonObject);
console.log(jsObject)