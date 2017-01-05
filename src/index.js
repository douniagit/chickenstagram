
$("input[type='text'").keypress(function(event){
	if(event.keyCode === 13){
		var toAdd=$(this).val();
	$(this).val(""); 
	$("ul").append("<li><span><strong>Chicken_king </strong></span> "+toAdd+" </li>");
	}
});

function activLike(Allo) {

  if (Allo.className == "like1") {
    Allo.className = "like2"
  }
  else if (Allo.className == "like2") {
    Allo.className = "like1"
  }
}
activLike();