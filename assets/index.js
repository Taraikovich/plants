console.log(`Ваша оценка - 125 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной 

2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг 

3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur 

4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым 

5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается 

6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе 

7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу 

`);

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav')

burger.addEventListener('click', function () {
    if (window.getComputedStyle(menu).visibility === 'hidden') {
        menu.style = 'visibility: visible; right: 0';
        document.querySelector('#burger-icon').src = './assets/img/burger-close.png';
    } else {
        menu.style = 'visibility: hidden';
        document.querySelector('#burger-icon').src = './assets/img/burger.png';
    };
});

document.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', function () {
        if (window.innerWidth <= 680) {
            menu.style = 'visibility: hidden';
            document.querySelector('#burger-icon').src = './assets/img/burger.png';
        };
    });
});


const serviceButtons = document.querySelectorAll('.service button');

const cards = document.querySelectorAll('.card');
const cardsPlants = document.querySelectorAll('.planting');
const cardsLawn = document.querySelectorAll('.lawn');
const cardsGarden = document.querySelectorAll('.garden');

let arr = [];

serviceButtons.forEach((el, i) => {

    el.addEventListener('click', (event) => {
        arr.push(i);
        if (arr[0] === arr[1]) {
            arr = [];
        } else if (arr[0] === arr[2]) {
            arr.splice(0, 1);
            arr.pop();
        } else if (arr[2] === arr[1]) {
            arr.splice(1);
        } else if (arr.length > 2) {
            arr.splice(0, 1);
        }

        serviceButtons.forEach((element, index) => {
            if (arr.includes(index)) {
                element.classList.add('activeButton');
                element.style.color = 'white';
            } else {
                element.classList.remove('activeButton');
                element.style.color = '';
            };
        });

        cards.forEach(element => element.classList.add('blur'));

        if (arr.includes(0)) {
            cardsGarden.forEach(element => element.classList.remove('blur'));
        } else {
            cardsGarden.forEach(element => element.classList.add('blur'));
        };
        if (arr.includes(1)) {
            cardsLawn.forEach(element => element.classList.remove('blur'));
        } else {
            cardsLawn.forEach(element => element.classList.add('blur'));
        };
        if (arr.includes(2)) {
            cardsPlants.forEach(element => element.classList.remove('blur'));
        } else {
            cardsPlants.forEach(element => element.classList.add('blur'));
        };

        if (arr.length === 0) cards.forEach(element => element.classList.remove('blur'));
    });

});

const priceOpen = document.querySelectorAll('.price-open');
const priceClose = document.querySelectorAll('.price-close');

priceClose.forEach((el, i) => {
    el.addEventListener('click', (event) => {
        if (event.target.tagName === 'H3') {
            priceOpen.forEach((el, i) => {
                el.classList.add('hidden');
                if (priceClose[i].classList.contains('hidden')) priceClose[i].classList.toggle('hidden');
            });
            el.classList.toggle('hidden');
            priceOpen[i].classList.toggle('hidden');
        };
    });
});

priceOpen.forEach((el, i) => {
    el.addEventListener('click', (event) => {
        if (event.target.tagName === 'H3') {
            el.classList.toggle('hidden');
            priceClose[i].classList.toggle('hidden');
        };
    });
});

const select = document.querySelector('.selecter');
const selectList = document.querySelector('.selecter-list');
const selectInfo = document.querySelector('.selecter-info');
const selectCity = document.querySelectorAll('.selecter-list p');


select.addEventListener('click', () => {
    selectList.classList.toggle('hidden-sel');
    select.classList.toggle('active-selecter');
    if (!selectInfo.classList.contains('hidden-sel')) selectInfo.classList.toggle('hidden-sel');
    if (select.children[0].textContent !== 'City' && selectList.classList.contains('hidden-sel') === true) selectInfo.classList.toggle('hidden-sel');
});



selectCity.forEach(el => {
    el.addEventListener('click', () => {
        selectInfo.classList.toggle('hidden-sel');
        selectList.classList.toggle('hidden-sel');
        select.classList.toggle('active-selecter');
        select.children[0].textContent = el.textContent;
        selectInfo.children[1].children[0].textContent = el.textContent;
    })
});;