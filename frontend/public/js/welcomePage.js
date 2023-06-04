const loginFormHandler = async (event) => {
    event.preventDefault();
   /*gets users input for username and password*/
    const userName = document.querySelector("#userNameInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();
  
    if (userName && password) {
      const response = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: { "Content-Type": "application/json" },
      });
   /*redirects user to home page on succesful login or throws up an alert that they failed to log in*/
      if (response.ok) {
        document.location.replace("/home");
      } else {
        alert("Failed to log in");
      }
    }
  };
  document
  .getElementById('loginButton')
  .addEventListener("click", loginFormHandler);

  const onClickSignUp = (event) => {
    event.preventDefault();
    const signUpModal = document.getElementById('signUpModal');
    signUpModal.style.display = 'block';
  };
  document.getElementById('signUpButton').addEventListener('click', onClickSignUp);

  const closeSignUp = (event) => {
    event.preventDefault();
    const elementID = event.target.getAttribute('id');
    if (elementID === 'modalContents' 
        || elementID === 'signUpButton') 
    {
        return;
    }

    // if the x button is clicked, we want the modal to close
    const isClickInModal = elementID === 'closeModalButton' ? false : isInModal(event.target);
    if(isClickInModal){
        return;
    }

    const signUpModal = document.getElementById('signUpModal');
    signUpModal.style.display = 'none';
  };

  const submitSignUp = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#newUserNameInput").value.trim();
    const password = document.querySelector("#newPasswordInput").value.trim();
    if (username && password) {
      const response = await fetch("/users/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
   /*redirects user to home page on succesful login or throws up an alert that they failed to log in*/
      if (response.ok) {
        document.location.replace("/home");
      } else {
        alert("Failed to log in");
      }
    }
  };
  document.getElementById('createAccountButton').addEventListener('click', submitSignUp);


  const isInModal = (element) => {
    var parent = element.parentElement;
    if(parent !== null){
        if(parent.getAttribute('id') === 'modalContents'){
            return true;
        }
        return isInModal(parent);
    }

    return false;
  }
  document.getElementById('closeModalButton').addEventListener('click', closeSignUp);
 window.addEventListener('click', closeSignUp);