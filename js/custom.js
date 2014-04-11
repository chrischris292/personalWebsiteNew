    $(window).scroll(function(e) {
        var s = $(window).scrollTop();
            var opacityVal = (s / 400.0);
            $('.img').css('opacity', opacityVal);        
    });


    $(document).ready(function() {
            $(document).ready(function() {
                $('.tooltip').tooltipster();
            });
            $('#globe').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Welcome Website</div>')
            });
            $('#twitter').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Twitter</div>')
            });
            $('#github').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>GitHub</div>')
            });
            $('#linkedin').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>LinkedIn</div>')
            });
            $('#mail').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Mail</div>')
            });
    });