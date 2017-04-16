
function toggleDescription(e){
	var name = $(this).data("name");
	$("#" + name + "-profile").toggleClass('hidden')
	$("#"+ name +"-description").toggleClass("hidden")

}

$(document).ready(function(){
	$('.btn-description').click(toggleDescription)
	$('.btn-back').click(toggleDescription)
})