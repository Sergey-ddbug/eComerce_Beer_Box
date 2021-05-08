const newFormHandler = async (event) => {
    event.preventDefault();

    const box_name = document.querySelector('#box-name').value.trim();
    const beer_names = document.querySelector('#beer-names').value.trim();


    if (box_name && beer_names) {
        const response = await fetch(`/api/sub`, {
            method: 'POST',
            body: JSON.stringify({ box_name, beer_names }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create beer box');
        }
    }
};

document
    .querySelector('.new-beer-form')
    .addEventListener('submit', newFormHandler);