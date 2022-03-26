// responsive navbar
const resToggleButton=document.querySelector('.hamburger')
const backAudio =document.getElementById('audioBack')
const navbar =document.querySelector('.nav')
const navLink =document.querySelectorAll('.navLink')

resToggleButton.onclick =()=>{
resToggleButton.classList.toggle('active')
navbar.classList.toggle('active')
backAudio.play()
}

navLink.forEach( (curEle)=>{
    curEle.addEventListener('click',()=>{
        navbar.classList.remove('active')
        resToggleButton.classList.remove('active')

    })

} )




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
   backAudio.play()
}
//end scroll to top

// start typewriter effect

const pushEffectText =document.querySelector('.typeWriterOne')
let typeWriterEffectText ='For Your Business!'
let durationEffect =100;
let characterCount =0

const documentOnloadFun=()=>{
    setInterval(()=>{
        pushEffectText.innerHTML += typeWriterEffectText.charAt(characterCount)
        characterCount++
    },durationEffect)


// start counter section

const counter =document.querySelectorAll('.counterNumber')

counter.forEach((curEle)=>{
    curEle.innerText=0;

    const updateCounter=()=>{
        const target  = +curEle.getAttribute('data-target')
        const c = +curEle.innerText;
        const incre = target/250

        if(c < target){
            curEle.innerText=`${Math.ceil(c + incre)}`
            setTimeout(updateCounter,1)
        }

    }

    updateCounter()
})

// end counter section



}
// end type writer effect
//start sticky navbar
window.addEventListener('scroll',()=>{
    const header =document.querySelector('.header')
    if(window.pageYOffset >30){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})
// end sticky navbar


//scroll navigation system 



window.addEventListener('scroll',()=>{
    const sections =document.querySelectorAll('.sectionScrool')
    const li =document.querySelectorAll('.navLink')

    let curent =''
    
    sections.forEach((section)=>{
        let gettopValue =section.offsetTop
        let sectionHeight =section.clientHeight
            if(pageYOffset >= (gettopValue-sectionHeight/3)){
                curent =section.id
            }
    })

li.forEach((curEle)=>{
        curEle.classList.remove('navLinkActive')
        if(curEle.classList.contains(curent)){
            curEle.classList.add('navLinkActive')
        }else{
            curEle.classList.remove('navLinkActive')
        }
})

})


// start pricing section

const priceMonth =document.querySelector('.monthly')
const oneTimeBtn =document.querySelector('#oneTimeBtn')
const monthlyBtn =document.querySelector('#monthlyBtn')
const priceOne =document.querySelector('.oneTime')
const bookbtn=document.querySelectorAll('.bookBtn')
const closeBtn =document.querySelector('#modalClose')
const dark =document.querySelector('.popupdark')
const outputPricing =document.querySelector('#outputPricingMethod')

priceOne.style.display='none'
const hidemonth =()=>{
    priceMonth.classList.add('monthHide')
    priceOne.style.display='block'
}

const hideoneTime =()=>{
    priceMonth.classList.remove('monthHide')
    priceOne.style.display='none'
}



bookbtn.forEach((curEle)=>{
  
    const modal =document.querySelector('.popupModal')
    const bookBtnFunction=()=>{
        let storData =curEle.getAttribute('data-target')
        modal.classList.add('modalShow')
        dark.classList.add('darkFade')
        outputPricing.textContent=storData;
    }
    curEle.addEventListener('click',bookBtnFunction)
})


closeBtn.onclick=()=>{
    const modal =document.querySelector('.popupModal')
    modal.classList.remove('modalShow')
    dark.classList.remove('darkFade')
}


dark.onclick=()=>{
    const modal =document.querySelector('.popupModal')
    dark.classList.remove('darkFade')
    modal.classList.remove('modalShow')
}

oneTimeBtn.addEventListener('click',hidemonth)
monthlyBtn.addEventListener('click',hideoneTime)


// start accordian section

const accorBtn =document.querySelector('.accorBtn')
const accorBtnTwo =document.querySelector('.accorBtnTwo')
const accor =document.querySelector('.accor')
const accorTwo =document.querySelector('.accorTwo')
const rotateIcon =document.querySelector('.rotate1')
const rotateIcon2 =document.querySelector('.rotate2')

    accorBtn.addEventListener('click',()=>{
        accor.classList.toggle('active')
        accorBtn.classList.toggle('colors')
        rotateIcon.classList.toggle('rotate')
    })

    accorBtnTwo.addEventListener('click',()=>{
        accorTwo.classList.toggle('active')
        accorBtnTwo.classList.toggle('colors')
        rotateIcon2.classList.toggle('rotate')
    })

