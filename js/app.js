/* eslint-disable no-unused-vars */
`use strict`;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//#####################################################################
let mobs = [];
let mobCard = ['User', 'Type', 'Price', 'Condition'];
function Mobs(name, phone) {
    this.name = name;
    this.phone = phone;
    this.price = random(100, 500);
    mobs.push(this);



}
//##############################################################
let table = document.getElementById('table');
function header() {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (let i = 0; i < mobCard.length; i++) {
        let tdTable = document.createElement('td');
        tableRow.appendChild(tdTable);
        tdTable.textContent = mobCard[i];

    }
}
//###############################################################
Mobs.prototype.render = function () {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    let tdTable1 = document.createElement('td');
    tableRow.appendChild(tdTable1);
    tdTable1.textContent = `${this.name}`;

    let tdTable2 = document.createElement('td');
    tableRow.appendChild(tdTable2);
    tdTable1.textContent = `${this.phone}`;

    let tdTable3 = document.createElement('td');
    tableRow.appendChild(tdTable3);
    tdTable3.textContent = `${this.price}`;

    let tdTable4 = document.createElement('td');
    tableRow.appendChild(tdTable4);
    if (tdTable3.textContent <= 200) {
        tdTable4.textContent = 'used';


    } else {
        tdTable4.textContent = 'new';

    }

    settingitems();
}

//##################################################################

function settingitems() {
    let stringOb = JSON.stringify(mobs);
    localStorage.setItem('phones', stringOb);

}
//##################################################################

let form = document.getElementById('form');
form.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();
    let phoneUser = event.target.user.value;
    let phoneType = event.target.phone.value;
    let newPhone = new Mobs(phoneUser, phoneType);
    newPhone.render();

}
//##############################################################

function gettingitems() {
    let data = localStorage.getItem('phones');
    let parsOb = JSON.parse(data);
    if (parsOb) {
        for (let i = 0; i < parsOb.length; i++) {
            new Mobs(parsOb[i].name, parsOb[i].phone);

        }
    }


}
gettingitems();
header();

for (let i = 0; i < mobs.length; i++) {
    mobs[i].render();

}

