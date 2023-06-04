(function () {
    const profile = {
        init: function () {
            this.cacheDOM();
            this.bindEvents();
            this.css();
        },
        cacheDOM: function () {
            this.$window = $(window);
            this.$content = $('#content');
            this.$username = $('#username').text();
            
        },
        bindEvents: function () {
            this.$window.on('resize', this.css.bind(this));
        },
        css: function () {
            this.$screenWidth = this.$window.width();
            this.$myDiv = this.$content[0];
            if (this.$screenWidth <= 972) {this.$myDiv.className = 'col-12';} 
            else {this.$myDiv.className = 'col-10';}
        },
    };

    profile.init();
})();

const onClickReadingList = (event) => {
    event.preventDefault();
    const readingListModal = document.getElementById('readingListModal');
    readingListModal.style.display = 'block';
    window.addEventListener('click', closeReadingList);
  };

  document.getElementById('addToReadingListBtn').addEventListener('click', onClickReadingList);

  const closeReadingList = (event) => {
    event.preventDefault();
    const elementID = event.target.getAttribute('id');
    if (elementID === 'modalContents' 
        || elementID === 'addToReadingListBtn') 
    {
        return;
    }

    // if the x button is clicked, we want the modal to close
    const isClickInModal = elementID === 'closeModalButton' ? false : isInModal(event.target);
    if(isClickInModal){
        return;
    }

    const readingListModal = document.getElementById('readingListModal');
    readingListModal.style.display = 'none';
    window.removeEventListener('click', closeReadingList);
  };

  const submitNewBook = async (event) => {
    event.preventDefault();
    const bookTitle = document.querySelector("#newReadingListBook").value.trim();
    if (bookTitle) {
      const response = await fetch("/readinglists/", {
        method: "POST",
        body: JSON.stringify({ bookTitle }),
        headers: { "Content-Type": "application/json" },
      });
   /*redirects user to home page on succesful login or throws up an alert that they failed to log in*/
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add book to reading list");
      }
    }
  };
  document.getElementById('addNewBookButton').addEventListener('click', submitNewBook);


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
  document.getElementById('closeModalButton').addEventListener('click', closeReadingList);

