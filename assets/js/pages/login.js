const textfilds = document.querySelectorAll('.textfild');
textfilds.forEach((e)=>{
    const input = e.querySelector('input');
    input.addEventListener('focus',()=>{
       e.classList.add('focus')
    })
    input.addEventListener('blur',()=>{
        e.classList.remove('focus')
       
    })
})