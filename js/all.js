// JavaScript Document
$(function(){
	$('.img-group img').eq(0).addClass('img-active');
	$('.img-group img').click(function(){
		$(this).addClass('img-active').siblings().removeClass();
	})
	$('.trend-imgbx').click(function(){
		$('.join-box').addClass('jump');
		setTimeout(() => {
			$('.join-box').removeClass('jump');
		},1000);
	})
	var startVal = [12700,200,2700];
	var timer1 = setInterval(() =>{
		startVal[0]++
		$('.people').text(startVal[0]+"+")
		if(startVal[0]>=13000){
			clearInterval(timer1)
		}
	})
	var timer2 = setInterval(() =>{
		startVal[1]++
		$('.join').text(startVal[1]+"+")
		if(startVal[1]>=500){
			clearInterval(timer2)
		}
	})
	var timer3 = setInterval(() =>{
		startVal[2]++
		$('.share').text(startVal[2]+"+")
		if(startVal[2]>=3000){
			clearInterval(timer3)
		}
	})
	$('.robot').click(function(){
		$('.robot-container').toggleClass('open')
	});
	$('.q-block .btn').click(function () {
	  $('.msg-box').append(`
		<div class="p-qu"><p>${$(this).text()}</p></div>
	  `);

	  setTimeout(() => $('.msg-box').append(`
		<div class="r-ansr"><p>${({
		  'q1': '今日公布國內新增2例境外移入COVID-19病例，分別自菲律賓及美國入境。案549為20多歲菲律賓籍女性，案550為30多歲本國籍男性，目前住院隔離中。',
		  'q2': '口罩目前已解除實名制，除了從實體藥局購買外，也可以透過健保快一通APP網路購買，本網站也可幫助您預購喔。',
		  'q3': '針對武漢肺炎（新冠肺炎，COVID-19）疫苗的研發進度，疫情指揮中心研發組組長指出，國內各單位研發疫苗、藥物的進度相當順利，預計年底前將展開臨床試驗，而目前新藥抑病毒的能力高達90%以上。',
		  'q4': '國人及部分外國籍人士，無論有無症狀，入境時均須於機場完成採檢；有症狀者送至集中檢疫所等候檢驗結果，無症狀者返家或至防疫旅館完成居家檢疫14天。未持有我國居留證之外國籍人士，仍須提供登機前3日內之COVID-19檢驗陰性報告，才能登機、轉機及入境台灣，並於入境後進行居家檢疫14天。',
		})[$(this).val()]}</p></div>
	  `), 1000);
	});
	$('.fans i').click(function(){
		alert('目前尚無網路 請稍再試')
	});
});














