var url="skills.json"


// python -m SimpleHTTPServer 8000
// localhost:8000
function makeRequest(){


$.get(url,function(skills){
	showResult(skills)
})



function showResult(skills){
	var source=$('#skills-template').html();
	var template=Handlebars.compile(source);
	$('#result').html(template(skills))

}
}
$(document).ready(function(){
makeRequest();
})