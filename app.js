$(document).ready(function() {
	$('.tag-getter').submit( function(event){
		//zero out results if previous search has run
		$('.results').html('');
		//get the value of the searched tag the user submitted
		var tags = $(this).find('input[name="tags"]').val();
		getData(tags);
		//alert(tags);
	});

});

var getData = function(tags) {

	// the parameters needed to pass in the request to Instagram's API
	var request = {	count: 10};

	var result = $.ajax({
		url: "https://api.instagram.com/v1/tags/"+tags+"/media/recent?client_id=e434b682d7944058827444eb5a7f13e8",
		data: request,
		dataType: "jsonp",
		type: "GET",
	})
	.done(function(result){
		$.each(result.data, function(i, data){
			var picture = showPicture(data);
			$('.results').append(picture);
		});
	})


};

var showPicture = function(picture) {
	console.log($('.template'));
	//clone result template code
	var result = $('.template .picture').clone();

	//set the img source URL
	var source = result.find('img');
	source.attr('src', picture.images.standard_resolution.url);

	return result;


}