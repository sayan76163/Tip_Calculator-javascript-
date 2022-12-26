const amount= document.getElementById("billing_section");
const btn5 = document.getElementById('5');
const btn10 = document.getElementById('10');
const btn15= document.getElementById('15');

const btn25 = document.getElementById('25');
const btn50 = document.getElementById('50');
const customB= document.getElementById('customise');
const cnt= document.getElementById("count");
const tipPer = document.getElementById('persons-tip');
const totalTip = document.getElementById('total_tip');
const reset_button = document.getElementById('rst');


function calculate(inputValue){
    let bill =+ amount.value;
    let btn_cnt=+ cnt.value;
     let tip = (((inputValue/100) * bill) / btn_cnt).toFixed(2);
     let tpr = ((bill + (inputValue/100)*bill) /btn_cnt).toFixed(2);
    //  console.log(tip);

    tipPer.innerHTML = `$${tip}`;
    totalTip.innerHTML=`$${tpr}`;

}

customB.addEventListener('input',()=>{
    if(customB.value!="" || customB.value!=0 ){
        calculate(customB.value);
    }
  
})

btn5.addEventListener('click',()=>{
   
    calculate(5);
})
btn10.addEventListener('click',()=>{
   
    calculate(10);
})
btn15.addEventListener('click',()=>{
   
    calculate(15);
})

btn25.addEventListener('click',()=>{
   
    calculate(25);
})



reset_button.addEventListener("click", ()=>{
    tipPer.innerHTML =`$0.00`;
    totalTip.innerHTML=`$0.00`;
    amount.value='';
    cnt.value='';

})
