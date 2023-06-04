(function () {
    const review = {
        init: function () {
            this.cacheDOM();
            this.bindEvents();
            this.css();
        },
        cacheDOM: function () {
            this.$window = $(window);
            this.$content = $('#content');
            this.$username = $('#username').text();
            this.$reviewSection = $('.content-paragraph');
            this.$form = this.$reviewSection.find('form');
            this.$rating = this.$reviewSection.find("input[type='checkbox']");
        },
        bindEvents: function () {
            this.$window.on('resize', this.css.bind(this));
            this.$form.on('submit', this.createReview.bind(this));
        },
        css: function () {
            this.$screenWidth = this.$window.width();
            this.$myDiv = this.$content[0];
            if (this.$screenWidth <= 972){this.$myDiv.className = 'col-12';} 
            else {this.$myDiv.className = 'col-10';}
        },
        createReview: function (e) {
            e.preventDefault();
            const title = $('#book-title').val();
            const author = $('#book-author').val();
            const genre = $('#book-genre').val();
            const year_published = $('#book-release-year').val();
            const review = $('#book-review').val();
            let rating = 1;
            if($('#st1').is(':checked')){
                rating = 5;
            } else if($('#st2').is(':checked')){
                rating = 4;
            }else if($('#st3').is(':checked')){
                rating = 3;
            }else if($('#st4').is(':checked')){
                rating = 2;
            } else{
                rating = 1;
            }
            $.ajax({
                url: '/createreview',
                method: 'POST',
                data: {
                    title,
                    author,
                    genre,
                    year_published,
                    review,
                    rating,
                },
                dataType: 'json',
                success: function () {document.location.replace('/home');},
                error: function (err) {console.error(err);},
            });
        },
    };

    review.init();

    $('#submitReviewBtn').click(review.createReview);
})();
