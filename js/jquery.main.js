$(document).ready(function(){
	createButton();
	initTime();
	initTime2();
	setInterval(function(){
		initTime();
	}, 1000);
	// $('.buttons').on('click', '.btn', function(){
	// 	var _ind = $(this).index() / 2;
	// 	$('.index-holder').html(++_ind);
	// 	return false;
	// })
})


function validateTime(time){
	if(time < 10){
		time = '0' + time;
	}
	return time;
}

function initTime(){
	var time = new Date();
	$('.time').text(time.getHours() + ':' + validateTime(time.getMinutes()) + ':' + validateTime(time.getSeconds()));
}
function initTime2(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	$('.time2').text(hours + ':' + minutes + ':' + seconds);
	setInterval(function(){
		seconds++;
		if(seconds == 60){
			seconds = '0';
			minutes++;
		}
		if(minutes == 60){
			minutes = '0';
			hours++;
		}
		$('.time2').text(hours + ':' + validateTime(minutes) + ':' + validateTime(seconds));
	}, 1000)
}

function createButton(){
	$('.create-btn-form input.text').focusout(function(){
		if( $('.create-btn-form input.text').val() > 0) {
			$('.create-btn-form').removeClass('error');
		} else {
			$('.create-btn-form').addClass('error');
		}
	})
	$('.create-btn-form').submit(function(){
		var count = $('.create-btn-form input.text').val();
		if(++count > 0) {
			var btns = new Array(--count);
			$('.buttons').text('');
			for(var i = 0; i < count; i++){
				$('.buttons').append(function(){
					var c = i;
					return '<button class="btn">Кнопка '+ ++c + '</button><br>'
				})
				btns[i] = $('.buttons .btn').eq(i);
				btns[i].click(function(){
					var _ind = $(this).index() / 2;
					alert(++_ind);
					return false;
				})
			}
		} else {
			$('.create-btn-form').addClass('error');
			$('.create-btn-form input.text').focus();
		}
		return false;
	})
}