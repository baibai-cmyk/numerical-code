 /**
  * 使用ES6语法编辑
  * Time: 2020-5-28
  */
 $(() => {
     const API_PROXY = 'https://bird.ioliu.cn/v1/?url='; //api代理，解决跨域问题
     /**
      * 更新时间
      * param String date 当前日期
      * param String hours 当前小时
      * param String minutes 当前分钟
      * param String now 格式化当前的小时数和分钟
      */
     class Time {
         getTime() {
             let date, hours, minutes, now;
             date = new Date;
             hours = date.getHours();
             minutes = date.getMinutes();
             now = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
             $('#time').html(now);
         };
     }
     /**
      * 发送消息检测
      * param String msg 获取输入框内容
      * param String mineMsg 用户发送的消息
      * param String robotMsg 机器人消息
      */
     class sendMsg {
         getMsg() {
             let msg, mineMsg, robotMsg;
             $('#sendMsg').on('click', () => {
                 msg = $('#msg').val();
                 /*如果内容为空则警告提示*/
                 if (msg.length <= 0 || msg === "") {
                     $('.warnning').fadeIn().delay(2000).fadeOut();
                     return;
                 } else {
                     /*符合内容不为空的情况下则拼接用户输入的内容显示在聊天界面，并发送Ajax请求返回相应的消息*/
                     mineMsg = `<li class="right">
                                  <img src="https://i.loli.net/2017/08/21/599a521472424.jpg">
                                  <span>${msg}</span>
                               </li>`;
                     $('#msgList').append(mineMsg);
                     $.ajax({
                         type: "get",
                         url: API_PROXY + "http://api.qingyunke.com/api.php?key=free&appid=0",
                         data: { "msg": msg },
                         success: (res) => {
                             robotMsg = `<li class="left">
                                           <img src="../images/robot.png">
                                           <span>${res.content}</span>
                                         </li> `;
                             $('#msgList').append(robotMsg);
                         }
                     });
                     /*清空输入框内容*/
                     $('#msg').val("");
                 }
             });
         };
     }
     /**
      * param Function  scrollShow 页面Y轴滚动到指定距离时显示聊天图标
      * param Function  H_or_S 显示或关闭聊天窗口
      * param Object  element1 控制显示或关闭的对象
      * param Object  element2 需要显示或关闭的对象
      * param String  flag 显示或隐藏 
      */
     class HiddenShow {
         scrollShow() {
             $(window).scroll(() => {
                 let scrollTop = Math.floor($(document).scrollTop());
                 scrollTop >= 400 ? $('.chat').fadeIn() : $('.chat').fadeOut();
             })
         };
         H_or_S(element1, element2, flag) {
             element1.on('click', () => {
                 element2.css('display', flag);
             });
         };
     }
     /**方法调用 */
     const t = new Time();
     const send = new sendMsg();
     const HS1 = new HiddenShow();
     const HS2 = new HiddenShow();
     const sTopS = new HiddenShow();
     $('.chat').click(() => { t.getTime() });
     send.getMsg();
     HS1.H_or_S($('.chat'), $('.chatbox'), 'block');
     HS2.H_or_S($('#close'), $('.chatbox'), 'none');
     sTopS.scrollShow();
 })