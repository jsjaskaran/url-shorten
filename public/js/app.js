$(document).ready(function(){
	
	$("#input-form").on('submit', function(e){
		e.preventDefault();
		submitInputForm();
	});

	$("#submit").on('click', function(e){
		e.preventDefault();
		submitInputForm();
	});

	function submitInputForm(){
		var val = $('input[name=url-input]').val();

		if(val == "" || val == undefined){
			$(".output").text('');
			$('.error').text('Please enter your url.');
			return;
		}

		$("#submit").attr('disabled', 'disabled');

		$.ajax({
			url: '/api/v1/shorten',
			type: 'POST',
			data: {url: val},
			success: function(d){
				if(d['status'] == 'success'){
					$('.error').text('');
					$(".output").text(d['data']['message'] + ' : ' + d['data']['url']);
				}else{
					$(".output").text('');
					$('.error').text('Some error, please try again later.');	
				}
				$("#submit").removeAttr('disabled');
			},
			error: function(err){
				$(".output").text('');
				$('.error').text('Some error, please try again later.');
				$("#submit").removeAttr('disabled');
			}
		})
	}

})