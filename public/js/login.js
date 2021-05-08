let current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      document.location.replace("/signup");
      alert(response.statusText);
    }
  }
  document.querySelector(".form").addEventListener("#submit", loginFormHandler);
};
// $(document).ready(function () {
//   let signupFormHandler = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector("#name-signup").value.trim();
//     const email = document.querySelector("#email-signup").value.trim();
//     const password = document.querySelector("#password-signup").value.trim();

//     if (name && email && password) {
//       const response = await fetch("/api/users", {
//         method: "POST",
//         body: JSON.stringify({ name, email, password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         document.location.replace("/profile");
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
//   console.log(signupFormHandler);
//   $(document).on("click", ".submit", signupFormHandler);
// });
