jQuery ($) ->
	$('button.action').click sayHi

sayHi = () ->
	count = ( $(this).data 'click-counter' ) + 1
	$(this).data 'click-counter', count
	$(this).text 'Press count: ' + count
	
