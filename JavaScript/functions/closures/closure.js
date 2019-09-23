// this===window
function sum(a,b){
       function addSum(){
             return a+b;
       }
       return addSum;
    }
var addFunc = sum(10,20);
var total = addFunc()
console.log('total is',total)
console.log("=============================")
console.log(window);
console.log(this);
console.log(this===window);
var name = 'Rakshith';
console.log(window.name);
console.log(this.name);

// this!=window
var person = { 
                name : 'Dulquer',
                age : 30,
                getName : function(){
                           console.log(this);
                           console.log(window)
                             return this.name;
                                    }
              }
var res = person.getName();
console.log(res);
console.log("==================================")
// function within another function
/*var person = { 
    name : 'Dulquer',
    age : 30,
    getName : function(){
            console.log("getname method",this.name)
            console.log(window);
            function getdata(){
                    console.log("getdata method",this.name)
                      }
                    return this.name;
    }
}
console.log(person.getName());
console.log("=========================================")
for(var i=0;i<5;i++){
    console.log(i);
}
for(let j=0;j<5;j++){
}  
    console.log(j)
}*/
// we can declare same name using var keyword
var hobbies = ['dancing','singing','cricket'];
console.log("hobbies ",hobbies)
var hobbies = ['numismatics'];
console.log("hobbies ",hobbies)
var hobbies = ['singing'];
console.log("hobbies ",hobbies)
console.log("=====================================")
// we cannot declare and initialize same name using let keyword
let fruits = ['orange','banana'];
console.log("fruits ",fruits)
// let fruits = ['jackfruit'];-----error
fruits = ['jackfruit'];
console.log("fruits "+fruits)
console.log("===================================")
const sports = ['cricket','hockey']
console.log("sports ",sports);
// const sports = ['football'];-----error
// sports = ['football'];-------error
sports[0] = ['football','volleyball'];
console.log(sports);

