const img = document.querySelector('img');
img.addEventListener('click',()=>{
    if(img.className=='rem'){
        img.classList.remove('rem');
        return;
    }
    img.classList.add('rem');
})