$(document).ready(function() {

    $('topnav li').each(function() {
        console.log($(this).attr('href'));
        //var href = $(this).attr('href');
        // if (!!url.match(href)) {
        //   $(this).addClass('active');
        // } else {
        //   $(this).removeClass('active');
        // }
    });
});