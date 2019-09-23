let intrests = ['cooking','dancing','singing','swimming','handwriting'];
// for each method
intrests.forEach(function(myintrests,index){
                                                if(myintrests.length>5)
                                                console.log("My interest is "+myintrests);
})
console.log("***************************************************")
// is array
let a1 = Array.isArray(intrests);
console.log(a1);
console.log("***************************************************")
// includes
let a2 = intrests.includes('singing',1);
console.log(a2);
console.log("***************************************************")
// push
let a3 = intrests.push('volleyball','carrom');
console.log(a3);
console.log(intrests)
console.log("***************************************************")
// pop
let a4 = intrests.pop();
console.log(a4);
console.log(intrests)
console.log("***************************************************")
// unshift-add the elements to the start of array
let a5 = intrests.unshift('rangoli','music');
console.log(a5);
console.log(intrests)
console.log("***************************************************")
// shift-removes the first element in an array
let a6 = intrests.shift();
console.log(a6);
console.log(intrests);
console.log("***************************************************")
// splice(from index,no.of elements to be deleted,what elements to be added)-modifies existing array
let a7 = intrests.splice(0,2,'football','chess');
console.log(a7);
console.log(intrests);
console.log("***************************************************")
// slice(from index,to n-1 index)-returns new array
let a8 = intrests.slice(0,4);
console.log(a8);
console.log("***************************************************")
//join-to convert arrays to strings
let a9 = intrests.join('---')
console.log(a9);
console.log("***************************************************")
//indexof-finds the index of an element
let a10 = intrests.indexOf('swimming',3);
console.log(a10);
console.log("***************************************************")
// map-perform some operations to an existing array
let a11 = intrests.map(function(value,index){
                                              value='Like'+' '+value;
                                              return value;
                                            });
console.log(a11);
// filter-filter the array
let a12 = intrests.filter((value)=>(value.length<7));
console.log(a12);

console.log("==========================================================")
let flavours = ['venilla','chocolate','strawberry','peach']
let fa = flavours.forEach(function(flavour,index){                        
                                                    if(flavour.length>5)
                                                    console.log(flavour);
                                                  });

let fb = Array.isArray(flavours);
console.log(fb);

let fc = flavours.includes('blackberry')
console.log(fc);

let fd = flavours.push('butterscotch');
console.log(fd);
console.log(flavours);

let fe = flavours.pop();
console.log(fe); 
console.log(flavours);

let ff = flavours.unshift('badam','pista','coffee')
console.log(ff);
console.log(flavours);

let fg = flavours.shift();
console.log(fg);
console.log(flavours);

let fh = flavours.splice(2,3,'blackberry','cashew');
console.log(fh);
console.log(flavours);

let fi = flavours.slice(2,3);
console.log(fi)

let fj = flavours.join('**');
console.log(fj);

let fk = flavours.indexOf('blackberry')
console.log(fk);

let fl = flavours.map(function(flvr,index){
                                              flvr = flvr+10;
                                              return flvr;
                                          })
                                          console.log(fl);

let fm = flavours.filter(function(value,index){
                                                   if(value.length>3)
                                                   return value;
                                              })
                                              console.log(fm);

console.log("********************************************************************")



