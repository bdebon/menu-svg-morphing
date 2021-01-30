import anime from 'animejs/lib/anime.es.js';

const menuEls = document.querySelectorAll('nav li');
const form1 = "M0 1600V0H49.5V14.5C45.6667 47.5 46.1 103.6 78.5 64C119 14.5 178 61 230.5 113.5C283 166 195.5 198 163 163C130.5 128 58.5 276.5 58.5 367C58.5 457.5 99 352.5 163 276.5C227 200.5 265 498 245 550.5C225 603 143 480.5 78.5 448.5C14 416.5 58.5 600 58.5 641C58.5 682 111 615 163 658.5C215 702 207 769 163 807C119 845 78.5 644 58.5 714C38.5 784 93.5 853.5 143 862.5C192.5 871.5 315 953 315 1040.5C315 1128 122.5 1075 78.5 1186C34.5 1297 137 1369.5 178 1381.5C219 1393.5 323.5 1468.5 315 1530C308.2 1579.2 102.167 1597.17 0 1600Z"
const form2 = "M0 1600V0H49.5V14.5C45.6667 47.5 133.419 48.2523 163 90C225 177.5 26 84 78.5 136.5C131 189 65 195 32.5 160C0 125 78.1322 278.655 58.5 367C49.5 407.5 78.5 419.5 143 367C220.058 304.278 198 431 178 483.5C158 536 143 565 78.5 533C14 501 58.5 600 58.5 641C58.5 682 116.244 707.593 163 658.5C263 553.5 270.684 714 163 807C119 845 78.5 644 58.5 714C38.5 784 93.5 853.5 143 862.5C192.5 871.5 55.5 1031.5 143 1031.5C274.5 1031.5 292.5 1080.5 248.5 1191.5C204.5 1302.5 137 1369.5 178 1381.5C219 1393.5 87 1404 78.5 1465.5C71.7 1514.7 102.167 1597.17 0 1600Z";

let lastClicked = null;

const menuProperties = {
    "menu-1": {
        path: form1,
        offsetX: -700
    },
    "menu-2": {
        path: form2,
        offsetX: -300
    },
    "menu-3": {
        path: form2,
        offsetX: -900
    }
}

menuEls.forEach(el => {
    el.addEventListener('click', (event) => {

        const timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })

        if (lastClicked === event.currentTarget) {
            timeline
                .add({
                    targets: 'body',
                    translateX: 0
                })
        } else {
            const menuName = event.currentTarget.dataset.name;
            document.body.classList.add('menu-open');


            timeline
                .add({
                    targets: 'body',
                    translateX: menuProperties[menuName].offsetX
                })
                .add({
                    targets: '.morve path',
                    d: menuProperties[menuName].path
                }, '-= 600')

        }

        lastClicked = event.currentTarget;
    })
})

