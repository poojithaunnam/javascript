var pr =new Promise( (resolve,reject)=>{
var condition =true;
if(condition){
    console.log('Entered pin is proper ')
    resolve('successful money is withdrawn');
}
else 
{
    console.log('insufficient funds ...!')
    reject('amount is grater than your balance ');
}

} );
//pr.then(success).catch(failure).finally(def);
pr.then(function success(msg){
    console.log('call back');
    console.log(msg);
},failure);
function success(msg){
    console.log('promise is successful');
    console.log(msg);
}

function failure(msg){
    console.log('promise is not successfull');
    console.log(msg);
}

function def(){
    console.log(' finally  block is executed ')
}