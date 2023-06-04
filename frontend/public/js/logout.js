 /*Logs user out when they click the logout button*/
const logout = async () => {
  const response = await fetch("/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).catch((err) => console.log(err));

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.getElementById("logoutButton").addEventListener("click", logout);
