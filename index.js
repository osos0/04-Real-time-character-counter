const textareaEl = document.querySelector("#textarea")
const counterEl = document.querySelector("#total-counter")
const remaniningEl = document.querySelector("#Remaining-counter")

textareaEl.addEventListener("keyup",()=> {
   const maxlen =textareaEl.getAttribute("maxlength");
    counterEl.innerHTML=`${textareaEl.value.length}`
    remaniningEl.innerHTML=`${maxlen-textareaEl.value.length}`
})

