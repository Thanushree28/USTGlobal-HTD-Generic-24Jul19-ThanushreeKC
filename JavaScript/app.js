var todaysDate=new Date();
console.log(todaysDate);
/*var date=new Date(2018,11,24,10,33,30,0);
console.log(date);
var date1=new Date(0);
console.log(date1)

var date2=new Date("October 13,2014 11:13:00");
console.log(date2)*/
var year=todaysDate.getFullYear()
console.log(year)
var month=todaysDate.getMonth()
console.log(month)
var date=todaysDate.getDate()
console.log(date)
var day=todaysDate.getDay()
console.log(day)
var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
var days=['sun','mon','tue','wed','thu','fri','sat']
console.log("Month is " +months[todaysDate.getMonth()])
console.log("Day is "+days[todaysDate.getDay()])
console.log("============================")
console.log(Math.PI)
console.log(Math.floor(4,5))
console.log(Math.ceil(4.5))
console.log(Math.round(4.5))
console.log(Math.round(4.2))
console.log(Math.pow(2,8))
var num=Math.random()
console.log(Math.floor(num*100))
console.log(Math.floor(Math.random()*1000))
console.log("=========================================")
var numberValue = 10;
var numberValue1='10';
if(numberValue===numberValue1){
    console.log("Equal");
}
else{
console.log("Not Equal")
}
console.log("============================")
console.log(typeof numberValue1);
console.log(typeof numberValue)
var n1=true;
var date=null;
console.log(typeof n1)
console.log(typeof date)
var num1;
console.log(num1)
var fruits=['apple','banana']
console.log(typeof fruits)

var age=21;
var res=(age>=18)?'adult':'child';
console.log(res)
var res1=(age>21)?'greater':(age===21)?'equal':'lesser';
console.log(res1)

var employees=[{
                name:'varun',
                age:29
                },
                {name:'deepika',
                age:34
                },
                {name:'bhagat singh',
                age:90
                }]
for(var i=0;employees.length;i++)
{
   console.log(employees[i]);
}
