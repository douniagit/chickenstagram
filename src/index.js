
$("input[type='text'").keypress(function(event){
	if(event.keyCode === 13){
		var toAdd=$(this).val();
	$(this).val(""); 
	$("ul").append("<li><span><strong>Chicken_king </strong></span> "+toAdd+" </li>");
	}
});

function activLike(lk) {

  if (lk.className == "like1") {
    lk.className = "like2"
  }
  else if (lk.className == "like2") {
    lk.className = "like1"
  }
}
