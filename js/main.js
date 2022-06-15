let km = 0;
let age = 0;
const tax = 0.26;

const btn = document.getElementById('btn');

btn.addEventListener('click',
    function () {
        km = document.getElementById('km').value;
        console.log(km);

        age = document.getElementById('age').value;
        console.log(age);

        let price = km * tax;

        if (age < 18) {
            price -= ((price / 100) * 15);
        } else if (age > 65) {
            price -= ((price / 100) * 35);
        }

        console.log(`il prezzo e' di ${price.toFixed(2)} euro`);
    }
);