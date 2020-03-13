//h5api.m.tmall.com/h5/mtop.trade.order.create.h5/4.0/?jsv=2.5.7&appKey=12574478&t=1578555061417&sign=33135314df3983b69d8ab2129b0b8e66&v=4.0&post=1&type=originaljson&timeout=15000&dataType=json&isSec=1&ecode=1&api=mtop.trade.order.create.h5&ttid=%23b%23ip%23%23_h5&H5Request=true&submitref=009d74df8fa5745a32573bb6a5c91bd3

// 1. 设置开始脚本时间的时间戳 以及 目标时间戳
// 2. 设置定时器，定时开始后，每200ms轮询一次，如果当前时间 >= 目标时间戳
https: // 3. 时间一到打开提前找好的订单页面，并且点击提交订单的按钮


var echoOpenUrl = '';
var echoStartTime = ''; // 开始脚本时间的时间戳
var echoGoalTime = ''; //  目标时间戳

var echoEndTime = '';

function countDown() {
  var echoNowDate = new Date().getTime();
  if (echoNowDate >= echoGoalTime) {
      window.location.href = echoOpenUrl;
      
  }
}
