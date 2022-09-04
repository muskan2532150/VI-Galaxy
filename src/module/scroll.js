const scrollBtn = document.querySelector('.scrollbtn');

const scrollbtn = () =>{
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
    scrollBtn.style.display = 'block';
    else
    scrollBtn.style.display = 'none';
}

window.onscroll = () => {
    scrollbtn();
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})