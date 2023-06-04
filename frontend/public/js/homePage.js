const onClickSearchReviewBtn = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector("#searchInput").value.trim();
    const filteredReviews = filter(reviews, (review) => {
        return review.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    
    // clear out all reviews currently on the page
    const allCurrentReviews = [...document.getElementById("homePageContainer").children];
    allCurrentReviews.forEach(child => {
        if(child.classList.contains("review")){
            document.getElementById("homePageContainer").removeChild(child);
        }
    });

    // add all the filtered items on the page
    filteredReviews.forEach(review => {
        // create review detail elements
        const titleElem = document.createElement("p");
        titleElem.classList.add('hpBookInfo'); 
        titleElem.innerHTML = `${review.title} by ${review.author}`;
        const reviewByElem = document.createElement('p');
        reviewByElem.classList.add('hpUser');
        reviewByElem.innerHTML = `Review by: ${review.user.username}`;

        // 5 star grouping
        const starOuterContainer = createElement("div", "reviewContainer", "");
        const starRatingContainer = createElement("p", "hpRating", "Rating: ");
        const starsContainer = createElement("div", "stars", "");
        starsContainer.classList.add("text-center");
        
        for(let i = 1; i <= 5; i++){
            const starInput = document.createElement("input");
            starInput.setAttribute ("type", "checkbox");
            starInput.name = `st${i}`;
            starInput.disabled = true;
            starInput.checked = review.rating >= i;

            const starLabel = document.createElement("label");
            starLabel.setAttribute("for", `st${i}`);
            starLabel.classList.add("fa");
            starLabel.classList.add("fa-star");
            if(review.rating >= i){
                starLabel.classList.add("checkedStar");
            }
            starLabel.classList.add("star");
            
            starsContainer.appendChild(starInput);
            starsContainer.appendChild(starLabel);
        }

        starOuterContainer.appendChild(starRatingContainer);
        starOuterContainer.appendChild(starsContainer);

        const reviewText = createElement("p", "hpReview", review.review);
        const genreAndYear = createElement("p", "hpGenreYear", `Genre: ${review.genre} Release Year: ${review.year_published}`);

        // create containing review element
        const reviewElem = document.createElement("div");
        reviewElem.classList.add("review")

        // append contents of the review to the review
        reviewElem.appendChild(titleElem);
        reviewElem.appendChild(reviewByElem);
        reviewElem.appendChild(starOuterContainer);
        reviewElem.appendChild(reviewText);
        reviewElem.appendChild(genreAndYear);

        // add the new review element
        document.getElementById("homePageContainer").appendChild(reviewElem);
    });
}

const createElement = (type, className, innerHtml) => {
    const elem = document.createElement(type);
        elem.classList.add(className); 
        elem.innerHTML = innerHtml;
    return elem;
}

document.getElementById('searchReviewsBtn').addEventListener('click', onClickSearchReviewBtn);