
const btnTest = document.querySelector('#test');
const btnTest1 = document.querySelector('#test1');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');

const longCircleText1 = document.createElement('span');
longCircleText1.classList.add('long-circle-text-1');
longCircleText1.innerText = '--step 1 text--';

const longCircleText2 = document.createElement('span');
longCircleText2.classList.add('long-circle-text-2');
longCircleText2.innerText = '--step 2 text--';

const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');


btnTest.addEventListener('click', () => {

    if (circle1.contains(longCircleText1)) {
        circle1.removeChild(longCircleText1);
    } else {
        circle1.appendChild(longCircleText1);
    }
    circle1.classList.toggle('long-circle-1');
    circle1.classList.toggle('circle-1');

    //moving stuff
    line2.classList.toggle('line-2-moved');
    circle2.classList.toggle('circle-2-moved');
    line3.classList.toggle('line-3-moved');
});


btnTest1.addEventListener('click', () => {

    if (circle2.contains(longCircleText2)) {
        circle2.removeChild(longCircleText2);
    } else {
        circle2.appendChild(longCircleText2);
    }

    circle2.classList.toggle('long-circle-2');
    circle2.classList.toggle('circle-2');

    //moving stuff
    line2.classList.toggle('line-2-moved-1');
    line3.classList.toggle('line-3-moved-1');
});


