const popup=document.querySelector('.popContainer');
const overlay=document.querySelector('.overlay');
const openIcon=document.querySelector('.openner');
const closeIcon=document.querySelector('.close-icon');

openIcon.addEventListener('click',()=>{
    popup.classList.add('popOpen');   
    // overlay.classList.add('overlay');    
})
closeIcon.addEventListener('click',()=>{
    popup.classList.remove('popOpen') 
    // overlay.classList.remove('overlay');
})

overlay.addEventListener('click',()=>{
    popup.classList.remove('popOpen') 
    // overlay.classList.remove('overlay');
})




// for validation ----------------------------------------------------------------------------------------
const input=document.querySelector(".email-input")
const a=function valid(){
    if (input.value.trim() == "") {
        alert("Fill the details");
        return false;
      }
      return true;
}
const subButton=document.querySelector('.subscribe-button')
subButton.addEventListener('click',()=>{
    if(a()==true)
        popup.classList.remove('popOpen');
})
input.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        if(a()==true)popup.classList.remove('popOpen');
    }
})

// -------------------------------------------------------------------------------------------------------



