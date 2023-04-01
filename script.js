//your JS code here. If required.
const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!ageInput.value || !nameInput.value) {
        alert('Please fill in all fields.');
        return;
    }

    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve({ age, name });
            } else {
                reject({ age, name });
            }
        }, 4000);
    });

    promise
        .then(({ age, name }) => {
            const message = `Welcome, ${name}. You can vote.`;
            const newObj = { message };
            return newObj;
        })
        .then((obj) => {
            alert(obj.message);
        })
        .catch(({ age, name }) => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});