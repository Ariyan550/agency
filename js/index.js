// responsive navbar
const resToggleButton=document.querySelector('.hamburger')
const navbar =document.querySelector('.nav')
resToggleButton.onclick =()=>{
resToggleButton.classList.toggle('active')
navbar.classList.toggle('active')
}

//end responsive navbar


//start scroll to top
const scrollToTop =document.querySelector('.scrollToTop')

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        scrollToTop.classList.add('active')
    }else{
        scrollToTop.classList.remove('active')
    }
})

scrollToTop.onclick =()=>{
   window.scrollTo({
       top:0,
       left:0
   })
}
//end scroll to top


