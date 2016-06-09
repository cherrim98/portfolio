$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

/* Scripts for wave effect parallax and scrollspy demo */

$(document).ready(function(){

    /* For parallaxing images */
    $('.parallax').parallax();

    /* To scroll to a section from navbar */
    $('.scrollspy').scrollSpy();
});