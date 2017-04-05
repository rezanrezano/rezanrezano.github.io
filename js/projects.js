var url="https://api.github.com/users/rezanrezano/repos?per_page=5&sort=created";

function makeAjaxRequest(){
	var resultHTML = $('#result').html()
	if(resultHTML==""){
		var html = "<ul>"
		$.get(url,function(repos){
		repos.forEach(function(repo){
			
			console.log(repo);

			html += (`<li><div class='box'><a href= '${repo.html_url}' target	="_blank">${repo.name}</a> <p>Language: ${repo.language}</p> Updated at: ${repo.updated_at}</div></li>`);
		})

		html += "</ul>"
		$('#result').html(html)
		})
	}
	else{
		alert('you already got the current projects')
	}
}

$(document).ready(function(){
	// makeAjaxRequest();
	$('#btnCurrent').click(makeAjaxRequest)
	$('#btnFvorite').click(function(){
		$('#divFav').fadeIn();
	})
})