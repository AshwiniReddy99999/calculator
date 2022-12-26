
// let Bill=document.getElementById('input');
// console.log(Bill)
var inputval=0;
var tipVal=0;
var person=0;
var result=0;
var finalResult=0;
const inputField=(val)=>{
    inputval=val;
   // console.log(val)
}
const persons=(val)=>{
     person=val
     if(tipVal!=undefined && person!=undefined && inputval!=undefined){
        result=((parseInt(inputval)*parseInt(tipVal))/100)/parseInt(person);
        console.log(result)
        }
    finalResult=parseInt(inputval)+parseInt(result);
    document.getElementById('tipamount').innerText=result;
    document.getElementById('total').innerText=finalResult;

}

function tipCalculate(val){
    console.log(val)
    tipVal=val;
    console.log(inputval)
    console.log(person)
    console.log(inputval)
   
}
function reset(){
    document.getElementById('tipamount').innerText='$0.00';
    document.getElementById('total').innerText='$0.00'
}



console.log(1)



console.log(inputval)