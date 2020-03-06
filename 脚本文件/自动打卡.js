/**
 *  钉钉自动打卡
 */

auto.waitFor()
// 判断服务

sleepNumber=3000;
// 默认暂停3秒，1000毫秒=1秒
var appName = "钉钉";
var startApp = launchApp(appName);
//打开钉钉

function clickButton(descName,depthNumber,indexInParentName) {
    /**
     * 创建clickButton 函数，传入 desc depth indexInParent 参数
     * 若 找到该按钮，点击后休眠3秒
     * 没有找到则退出 并给提示
     *
     */
     sleep(sleepNumber+2000);
// 停留
    var buttonName=desc(descName).depth(depthNumber).indexInParent(indexInParentName).findOnce();
    if (buttonName) {
        sleep(sleepNumber);
        buttonName.click();
        toast(descName+"成功");
        sleep(sleepNumber);
    }else{
        toast(descName+"失败");
        exit();
    }
}
clickButton("工作",9,2);
// 点击工作[1]按钮
gesture(1000, [300, 600], [300, 300]);
//滑动屏幕，防止静止
clickButton("考勤打卡",26,1);
// 点击考勤打卡选择按钮
clickButton("外勤打卡",24,0);
// 外勤打卡按钮
clickButton("外勤打卡",21,3);
// 外勤打卡确认按钮

exit();
// 结束脚本



