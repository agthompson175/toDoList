
const listDiv = document.querySelector('.list');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listOl = listDiv.querySelector('ol');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listOl.children;
const firstListItem = listOl.firstElementChild;
const lastListItem = listOl.lastElementChild;


function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up float-right btn-success';
    up.textContent = 'Up';
    li.appendChild(up);

    let down = document.createElement('button');
    down.className = 'down float-right btn-warning';
    down.textContent = 'Down';
    li.appendChild(down);

    let remove = document.createElement('button');
    remove.className = 'remove float-right btn-danger';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
}

listOl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.textContent == 'Remove') {
            let li = event.target.parentNode;
            let ol = li.parentNode;
            ol.removeChild(li);
        }
        if (event.target.textContent == 'Up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ol = li.parentNode;
            if (prevLi) {
                ol.insertBefore(li, prevLi);
            }
        }
        if (event.target.textContent == 'Down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ol = li.parentNode;
            if (nextLi) {
                ol.insertBefore(nextLi, li);
            }
        }
    }
    if (event.target.tagName == 'LI'){
        event.target.style.backgroundColor = 'green'
    }
});





addItemButton.addEventListener('click', () => {
    let ol = document.getElementsByTagName('ol')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ol.appendChild(li);
    addItemInput.value = '';
});