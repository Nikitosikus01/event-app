

const tabBtns = document.getElementById('tabs'); 
const content = document.querySelectorAll('.content'); 


const changeClass = el => {
    for (let i = 0; i < tabBtns.children.length; i++) {
        tabBtns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabBtns.addEventListener('click', element => {
    const currntTabBtn = element.target.dataset.btn;
    changeClass(element.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currntTabBtn) {
            content[i].classList.add('active');
        }
    }
});



const btnDJ = document.getElementById('btn_DJ');
const content_DJ = document.getElementById('content_DJ');
const header = document.getElementById('header');

btnDJ.addEventListener( 'click', () => {

    if(getComputedStyle(content_DJ).display == 'none'){
        header.style.display = 'none';
        content_DJ.style.display = 'block';
    } else {
        header.style.display = 'flex';
        content_DJ.style.display = 'none';
    }

})

