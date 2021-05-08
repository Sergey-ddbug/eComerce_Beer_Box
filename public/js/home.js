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
