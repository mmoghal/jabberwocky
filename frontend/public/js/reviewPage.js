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
            this.$bookTitle = $('#book-title').val();
            this.$review = $('#book-review').val();
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
        createReview: function () {
            $.ajax({
                url: '',
                method: 'POST',
                data: {
                    title: this.$bookTitle,
                    review: this.$review,
                    rating: this.$rating.filter(':checked').val(),
                },
                dataType: 'json',
                success: function () {document.location.replace('/');},
                error: function (err) {res.status(500).json(err);},
            });
        },
    };

    review.init();
})();
