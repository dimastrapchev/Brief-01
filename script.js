function newpage(href){
  $.ajax({
    url: href,
    success: function (data) {
      $("section").fadeOut(250, function(){
        const newPage = $(data).filter("section").html();
        $("section").html(newPage);

        const newTitle = $(data).filter("title").html();
        $("title").html(newTitle);

        $("section").fadeIn(250);
      })
    }
  })
}

$(function(){
  $('#header').load('header.html', function(){
    $("nav a").on("click", function (event) {
        event.preventDefault();
        const href = $(this).attr("href");
        window.history.pushState(null, null, href);
        newpage(href);
    })
    window.onpopstate = function(event) {
      const href = document.location.href;
      newpage(href);
    }
  })
})
