const newFormHandler = async (event) => {
    event.preventDefault();

    const boxname = document.querySelector('#beer-choice').value.trim();
    const beernames = document.querySelector('#beer-desc').value.trim();


    if (boxname && beernames) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ boxname, beernames }),
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