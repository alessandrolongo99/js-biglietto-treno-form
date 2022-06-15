let km = 0;
let age = 0;
let myName = 0;
const tax = 0.26;

const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

submit.addEventListener('click',
    function () {
        myName = document.getElementById('name').value;
        console.log(myName);

        km = document.getElementById('km').value;
        console.log(km);

        age = document.getElementById('age').value;
        console.log(age);

        let price = km * tax;

        if (age == 1) {
            price -= ((price / 100) * 15);
        } else if (age == 2) {
            price -= ((price / 100) * 35);
        }

        let cab = Math.floor((Math.random() * 10) + 1);
        let cp = Math.floor(Math.random() * 10000);

        document.getElementById('passenger-name').innerHTML = myName;
        document.getElementById('passenger-cab').innerHTML = cab;
        document.getElementById('passenger-cp').innerHTML = cp;
        document.getElementById('ticket').innerHTML = price.toFixed(2) + '€';
    }
);

cancel.addEventListener('click',
    function(){
        myName = document.getElementById('name').value = null;
        km = document.getElementById('km').value = null;
        age = document.getElementById('age').value = null;

        document.getElementById('passenger-name').innerHTML = null;
        document.getElementById('passenger-cab').innerHTML = null;
        document.getElementById('passenger-cp').innerHTML = null;
        document.getElementById('ticket').innerHTML = null;
    }
);