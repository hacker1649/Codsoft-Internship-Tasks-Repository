let buttons=document.querySelector('.buttons');
let btn=buttons.querySelectorAll('span');
let output=document.getElementById('output');

for(let i=0;i<btn.length;i++) {
   btn[i].addEventListener('click', function() {
      if(this.innerHTML=="=") {
         try {
            output.innerHTML=eval(output.innerHTML);
         }catch (err) {
            alert("Invalid Calculation");
         }
      }else {
         if(this.innerHTML=="Clear") {
            output.innerHTML="";
         }else if(this.innerHTML=="⌫") {
            output.innerHTML=output.innerHTML.slice(0,-1);
         }else {
            output.innerHTML+=this.innerHTML;
         }
      }
   })
}
