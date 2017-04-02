var url="https://api.github.com/users/rezanrezano/repos?per_page=5&sort=created";
function makeAjaxRequest(){
	$('#result').html('')
	$.get(url,function(repos){
		repos.forEach(function(repo){
			
			console.log(repo);
			$('#result').append(`<a href= '${repo.html_url}' target	="_blank">${repo.name}</a><br>`);
		})
	})
}
$(document).ready(function(){
	// makeAjaxRequest();
	$('#btnCurrent').click(makeAjaxRequest)
})