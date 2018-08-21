
var allButtons = $('#buttons > li')
for(let i =0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p = index * -920
      $('#images').css({
     transform: 'translate('+ p + 'px)'
    })
    n = index //初始化，再继续
    allButtons.eq(n) .addClass('active')
         .siblings('.active').removeClass('active')
  })
}
//初始化

var n = 0;
var size = allButtons.length
//z自动播放
clickButton(n % size)
var timerId = setTimer()
//触发停止
$('.images').on('mouseenter',function(){
   window.clearInterval(timerId)
 })
$('.images').on('mouseleave',function(){
     timerId = setTimer()
})


function setTimer() {
  return setInterval(() => {
    n += 1
  clickButton(n % size)
  }, 2000)
}
function clickButton(index){
 allButtons.eq(index).trigger('click')
}
