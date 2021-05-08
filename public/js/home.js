console.log("home");

const handleLogout = async () => {
  console.log("hit");
  const logout = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (logout.ok) {
    document.location.replace("/");
  }
};

if (document.querySelector("#logoutSpan")) {
  document.querySelector("#logoutSpan").addEventListener("click", handleLogout);
}


const hefeweizen = async (event) => {
  event.preventDefault();

  const box_name = "Hefeweizen";
  const beer_names = "Assorted Hefeweizen, tall Weizen glass and pretzels.";


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
  .querySelector('#hefeweizen')
  .addEventListener('click', hefeweizen);


const strongMansStout = async (event) => {
  event.preventDefault();

  const box_name = "Strong Mans Stout";
  const beer_names = "Oatmeal stout, Milk stout, and Imperial stout, large glass mug, steak seasonings.";


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
  .querySelector('#strong-mans-stout')
  .addEventListener('click', strongMansStout);



const anotherIPA = async (event) => {
  event.preventDefault();

  const box_name = "I'll Pour Another IPA";
  const beer_names = "New England IPA, West Coast IPA, Hazy IPA, Session IPA, Nucleated Speigelau glass, and at-home pizza recipe";


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
  .querySelector('#another-ipa')
  .addEventListener('click', anotherIPA);

const aielmans = async (event) => {
  event.preventDefault();

  const box_name = "Aielmans Ale";
  const beer_names = "Pale Ale, Brown Ale, Scotch Ale, Red Ale, American Pale Ale, Imperial pint glass, and a discount card to Bad Daddys Burger Bar";


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
  .querySelector('#aielmans')
  .addEventListener('click', aielmans);