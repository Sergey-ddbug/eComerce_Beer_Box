$(document).ready(function () {
  let signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup-1").value.trim();
    const password2 = document.querySelector("#password-signup-2").value.trim();
    const signUpAge = document.querySelector("#signup-age");
    const termsAndConditions = document.querySelector("#terms-and-conditions");

    if (password !== password2) {
      alert("Passwords Must Match");
      return;
    }

    if (
      (name.length > 0 && email.length > 0 && password.length > 0,
      signUpAge.checked,
      termsAndConditions.checked)
    ) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    } else {
      alert("All Conditions Must Be Met");
    }
  };
  $(document).on("click", ".submit", signupFormHandler);
  //   document
  //     .querySelector(".login-form")
  //     .addEventListener("submit", loginFormHandler);

  //   document
  //     .querySelector(".signup-form")
  //     .addEventListener("submit", signupFormHandler);
});
