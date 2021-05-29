const correctAnswers=['C','A','B','A','C','B','C','A','D','B'];
const form = document.querySelector('.form');
const result =document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    
     const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    
     console.log(userAnswer);
     userAnswer.forEach((answer,index) => {
         if(answer===correctAnswers[index]){
              score+=10;  
         }
     });
window.scrollTo(0,0);
result.classList.remove('d-none');

let output=0;
setInterval(() => {
    result.querySelector('span').textContent=`${output}%`;
    if(output===score){
        clearInterval(output);
    }
    else{
       output++;
    }
},10);
const a = document.getElementsByClassName('form-check-input');
for(let i=0;i<a.length;i++){
    a[i].disabled=true;
}

});



