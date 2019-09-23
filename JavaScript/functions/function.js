function sumValue(num1,num2){
                            if(num1!=undefined && num2!=undefined){
                             res=num1+num2;
                            }
sumValue(10,20)
console.log('sumValue is '+sumValue)
}
console.log("===================================")
var addData=function(num1,num2){
                                if(num1!=undefined && num2!=undefined){
                                    res=num1+num2;
                                    return res;
                                    }
                               }
addData(10,20)
console.log('sumValue2 is '+res);
console.log("=========================================");
(function(num1,num2){
                     var sumData=num1+num2;
                     console.log('sumvalue3 is'+sumData)
                    }(10,20));
console.log("=============================================")
var addData=(num1,num2)=>{
                          var totalsum=num1+num2;
                          return totalsum; 
}
var valueData=addData(10,20);
console.log('sumValue4 is '+valueData);
console.log("==============================================")
var sumval = (num1,num2)=>num1+num2;
var sumData = sumval(10,50);
console.log('sumValue5 is '+sumData)
console.log("===============================================")
var message = 'hello';
console.log(message)
messaage = message + 'world'
console.log(message)
var msg1 = message
console.log(msg1);;
message = 'hi'
console.log(message)

console.log("==============================================")
// reference objects are mutable
var person={
               name : 'Samantha',
               age : 30,
               color : 'white'
           };
           console.log(person);
           person.name = 'kajol';
           console.log(person)
           var person1 = person;

           person1.name = 'rajini';
           console.log(person1)
           console.log(person)
           var person2 ={
                           name : 'samantha',
                           age : '30',
                           color : 'white'
                        }
                        console.log(person2)
console.log("====================================")
/*function first(){
                  console.log("first")
                }
function second(){
                   console.log("second")
                 }
first(); 
second();
console.log("=====================================")   
function first(){
         setTimeout(function(){
                                console.log("first")
                              },1000);
                }
         function second(){
            console.log("second")
          }
first(); 
second();*/  
console.log("============================================") 
// using callback function for sync execution
/*function first(callback){
                          setTimeout(function(){
                                                  console.log('first');
                                                  callback();
                                                },1000);
                        }
function second(){
                    console.log("second")
                  }
first(second);*/
console.log("=============================================")  
function first(callback){
    setTimeout(function(){
                            console.log('first');
                            callback();
                          },1000);
                          console.log("this is first")
  }
function second(){
console.log("second")
}
first(second);  
console.log("==============================================")
