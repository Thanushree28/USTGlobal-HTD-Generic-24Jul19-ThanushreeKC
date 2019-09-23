//1.for each method
var hobbies = ['carrom','football','photography','monoacting','cricket']
    hobbies.forEach(function(myhobbies,index){
                                           if(myhobbies.length>7)
                                           console.log('my hobbies= '+myhobbies);
                                          });
console.log("===========================")
// 
console.log(myName);
 var myName='chandan shetty';
 console.log(myName)
 console.log("===========================")
 function getAge(){
                console.log(age);
                var age=10;
                console.log(age)
                }
                getAge();
console.log("=============================")
// 2.isArray method
console.log(Array.isArray(hobbies));/*true*/
// console.log(Array.isArray(person));/*error*/
console.log(hobbies.includes('monoacting',2));
console.log(hobbies.push('cooking','volleyball','hockey'))/*returns length*/
console.log(hobbies);
console.log(hobbies.pop())
console.log(hobbies);
console.log(hobbies.unshift('skipping','shopping'))/*returns only length*/
console.log(hobbies)
console.log(hobbies.shift())
console.log("================================")
console.log(hobbies)
console.log(hobbies.splice(0,2,'haircutting','swimming'))/*modifies existing array*/
console.log(hobbies)
console.log(hobbies.slice(0,3))/*returns modified new array*/
console.log(hobbies.slice(1,2));
console.log(hobbies.join('-'))
console.log(hobbies.join())
console.log(hobbies.indexOf('cricket',3))
var numbers=[10,20,30,40,50]
var numbers1=[];
var numbers1 = numbers.map((value,index)=>{
                                  value=value+10;
                                  return value;
                              })
                console.log(numbers1)
var numbers2=[];
var numbers2 = numbers.filter(value=>{
                                       return value>10;
                                      })  
                console.log(numbers2);
console.log("======================")
// using arrow func for one line of code without curly braces
var numbers2 = numbers.filter(value=>value>10) 
console.log(numbers2);
console.log("==================================")
// map method
var items = [{
               name : 'lipstick',
               price : 95,
               id : 1
              },
              {
                  name : 'perfume',
                  price : 500,
                  id : 2
              },
              {
                  name : 'watch',
                  price : 1000,
                  id : 3
              },
              {
                  name : 'shoes',
                  price : 2000,
                  id : 4
              }
            ]
            // console.log(items);
var newitems = items.map(function(items){
    items.price = items.price+100;
    return items;
})
console.log(newitems);
// filter method

    

