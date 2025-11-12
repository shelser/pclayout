const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content');

contents.forEach((item) => {
    const title = item.querySelector('.program-line__title');
    const descr = item.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        contents.forEach((content) => {
            const contentDescr = content.querySelector('.program-line__descr');
            contentDescr.classList.remove('active');
        });
        descr.classList.toggle('active');
    })
})
};

accordeon();
