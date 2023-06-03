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
