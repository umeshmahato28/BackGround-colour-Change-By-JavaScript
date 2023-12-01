const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
      console.log(button);
      button.addEventListener('click', function(e){
            console.log(e);
            console.log(e.targetv);
            if(e.target ==='grey'){
                  body.style.backgroundColor = e.target.dispatchEvent;
            }
      
            if(e.target==='white'){
                  body.style.backgroundColor = e.target.dispatchEvent;
            }
      
            if(e.target==='black'){
                  body.style.backgroundColor = e.target.dispatchEvent;
            }
      
            if(e.target==='green'){
                  body.style.backgroundColor = e.target.dispatchEvent;
            }
      
            if(e.target==='yellow'){
                  body.style.backgroundColor = e.target.dispatchEvent;
            }
      });
});