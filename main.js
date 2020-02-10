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
var startApp = launchApp(appName);
if (startApp) {
    toast("打开" + appName + OK);
} else {
    toast(clickOK + appName + NO);
}
sleep(3000);
// 等待3秒
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
var clockCard = desc("考勤打卡").depth(26).indexInParent(1).findOne();
if (clockCard) {
    clockCard.click();
    toast(clickOK + button02 + OK);
} else {
    toast(clickOK + button02 + NO);
}





