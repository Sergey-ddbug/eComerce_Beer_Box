const newFormHandler = async (event) => {
    event.preventDefault();

    const beer = document.querySelector('#beer-choice').value

    if (beer = true) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ beer }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create beer box');
        }
    }
};