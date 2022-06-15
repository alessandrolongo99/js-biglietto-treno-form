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

        console.log(`il prezzo e' di ${price.toFixed(2)} euro`);
    }
);

cancel.addEventListener('click',
    function(){
        myName = document.getElementById('name').value = null;
        km = document.getElementById('km').value = null;
        age = document.getElementById('age').value = null;
    }
);