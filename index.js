
const ratings = document.querySelectorAll('#num')
const rating = document.querySelector('#rating')

ratings.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML=rate.innerHTML
    })

})

