// Promises are used to overcome call back hell problem
let resultData = new Promise(function(resolve,reject){
    if(10>10){
               reject('failed');
    }
    else{
        resolve('Success');
    }
    });
    resultData.then((data)=>{
        console.log('Then block= '+data);
    }).catch((error)=>{
        console.log('Catch block= '+error);
    });


    let employeeData=new Promise(function(resolve,reject){
        const employee = [{
                            name:'abhay',
                            age : 28
                          },
                          {
                              name:'arun',
                              age : 30
                          },
                          {
                              name:'sundari',
                              age : 32
                          }
                        ]
if(10<10){
           reject('failed');/*catch block*/
          }
          else{
              resolve(employee);/*then block*/
          }
    });
    employeeData.then((data)=>{
                // console.log('employee data= ',data);
                return data;
    }).catch((error)=>{
        console.log('catch block= '+error)
    }).then(function(data1){
        console.log("this is then block 2",data1);
    });