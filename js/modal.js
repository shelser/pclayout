const modal = () => {

const modalBtn = document.querySelector('.course__button');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');


const cross = document.createElement('button');
cross.classList.add('cross');
cross.textContent = 'x';
modalInner.style.position = 'relative';
cross.style.cssText = `
    position: absolute;
    width: 20px;
    height: 20px;
    font-size: 15px;
    top: 15px;
    right: 15px;
`;
modalInner.appendChild(cross);


modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modal.addEventListener('click', (e) => {
    const modalContent = e.target.closest('.modal__inner')
    if (!modalContent) {
        modal.style.display = '';
    }
});

const crossBtn = document.querySelector('.cross');

crossBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = '';
})

};

modal();