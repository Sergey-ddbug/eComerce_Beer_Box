const newFormHandler = async (event) => {
    event.preventDefault();

    const beer = document.querySelector('#beer-choice').value.trim();
    const description = document.querySelector('#beer-desc').value.trim();


    if (beer = true) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ beer }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/customsubbox');
        } else {
            alert('Failed to create beer box');
        }
    }
};

document
    .querySelector('.new-beer-form')
    .addEventListener('submit', newFormHandler);