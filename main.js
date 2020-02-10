/**
 *  钉钉自动打卡
 */

auto.waitFor()
    //判断服务
var clickOK = "点击";
var OK = "成功";
var NO = "失败";
var appName = "钉钉";
var button01 = "工作[1]";
var button02 = "考勤打卡";
var button03 = "外勤打卡";
var button04= "外勤打卡";
var button05="我知道了";
var startApp = launchApp(appName);
if (startApp) {
    toast("打开" + appName + OK);
} else {
    toast(clickOK + appName + NO);
}
sleep(3000);
// 等待3秒
// 工作 按钮
var workOne = desc(button01).findOne();
if (workOne) {
    workOne.click();
    toast(clickOK + button01 + OK);
} else {
    toast(clickOK + button01 + NO);
}

gesture(1000, [300, 300], [300, 600]);
/**
 * 滑动屏幕 手势的时长,[x1,y1],[x2,y2]
 * 从 x1,y1 到 x2,y2,可以有多个参数
 */
sleep(2000);
// 考勤打卡 按钮
var clockCard = desc(button02).depth(26).indexInParent(1).findOne();
if (clockCard) {
    clockCard.click();
    toast(clickOK + button02 + OK);
} else {
    toast(clickOK + button02 + NO);
}
//外勤打卡按钮
var clockCardOut = desc(button03).depth(24).indexInParent(0).findOne();
if (clockCardOut) {
    clockCardOut.click();
    toast(clickOK + button03 + OK);
} else {
    toast(clickOK + button03 + NO);
}

// 若要打早退卡，有新 view
/**
 * var button06 = "确定";
 * var iFineOk=desc(button06).depth(26)..indexInParent(1).finOne();
 * if(iFineOk){
 *  iFineOk.click();
 * toast(clickOK + button06+OK);
 * }else{
 *  toast(clickOK + button06 +OK);
 * }
 */

//外勤打卡确认按钮
var outClockCardAffirm = desc(button04).depth(21).indexInParent(3).findOne();
if (outClockCardAffirm) {
    outClockCardAffirm.click();
    toast(clickOK + button04 +"确认button"+OK);
} else {
    toast(clickOK + button04 +"确认button"+NO);
}

// 打卡成功的我知道了
var iKnow = desc(button05).depth(28).indexInParent(1).findOne();
if (iKnow) {
    iKnow.click();
    toast(clickOK+button05+OK);
}else{
    toast(clickOK+button05+NO);
}

alert("恭喜你，打卡成功");
exit();

