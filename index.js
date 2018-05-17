var startNum  = document.getElementsByidName("countdown") ;
var currentNum = document.getElementsByclassName("puffer") ;

function addClassDelayed(jquery, c, to) {
    setTimeout(function() { jquery.addClass(c); }, to);
}

function anim() {
  addClassDelayed($("#countdown"), "puffer", 600);
  if (currentNum == 0) currentNum = startNum-1; else currentNum--;
  $('#countdown').html(currentNum+1);
  $('#countdown').removeClass("puffer");
}

(function () {
  startNum = 25;
  currentNum = startNum;
  $("#countdown").html(currentNum); // init first time based on n
  self.setInterval(function(){anim()},1325);
});
