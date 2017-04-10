
function toggleDescription(e){

	$(this).parent().parent().hide();
	$($(this).parent().parent().siblings()[0]).show();

}

$(document).ready(function(){
	$('.btn-description').click(toggleDescription)
	$('.btn-back').click(toggleDescription)
})