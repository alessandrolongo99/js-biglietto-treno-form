const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');

document.getElementById('ticket-box').style.display = 'none';

submit.addEventListener('click',
    function () {
        let km = 0;
        let age = 0;
        let myName = 0;
        const tax = 0.26;

        myName = document.getElementById('name').value;
        console.log(myName);

        km = document.getElementById('km').value;
        console.log(km);

        age = document.getElementById('age').value;
        console.log(age);

        let price = km * tax;
        let discount = 'Biglietto standard';

        if (age == 1) {
            price -= ((price / 100) * 15);
            discount = 'Biglietto minorenni';
        } else if (age == 2) {
            price -= ((price / 100) * 35);
            discount = 'Biglietto over 65';
        }

        let cab = Math.floor((Math.random() * 10) + 1);
        let cp = Math.floor(Math.random() * 10000);

        document.getElementById('passenger-name').innerHTML = myName;
        document.getElementById('discount').innerHTML = discount;
        document.getElementById('passenger-cab').innerHTML = cab;
        document.getElementById('passenger-cp').innerHTML = cp;
        document.getElementById('ticket').innerHTML = price.toFixed(2) + '€';

        document.getElementById('ticket-box').style.display = 'block';
    }
);

cancel.addEventListener('click',
    function () {
        document.getElementById('name').value = null;
        document.getElementById('km').value = null;
        document.getElementById('age').value = null;

        document.getElementById('passenger-name').innerHTML = null;
        document.getElementById('discount').innerHTML = null;
        document.getElementById('passenger-cab').innerHTML = null;
        document.getElementById('passenger-cp').innerHTML = null;
        document.getElementById('ticket').innerHTML = null;

        document.getElementById('ticket-box').style.display = 'none';
    }
);