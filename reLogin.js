$(document).ready(function() {
	$("form[id='reLoginForm'] #password").bind('keyup',function(e){
		if(e.keyCode==13){
			$('#reLoginConfirm').click();
		}
	});
});

