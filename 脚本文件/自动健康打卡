/**
 * 钉钉自动健康打卡
 */
auto.waitFor()
//判断服务是否开启

sleepNumber = 3000;
// 默认暂停3秒，1000毫秒=1秒
var appName = "钉钉";
var startApp = launchApp(appName);
//打开钉钉
sleep(sleepNumber + 2000);
// 停留
// toast("已经打开钉钉了");

function clickButton(descName, depthNumber, indexInParentName) {
    /**
     * 创建clickButton 函数，传入 desc depth indexInParent 参数
     * 若 找到该按钮，点击后休眠3秒
     * 没有找到则退出 并给提示
     *
     */
    var buttonName = desc(descName).depth(depthNumber).indexInParent(indexInParentName).findOnce();
    if (buttonName) {
        buttonName.click();
        toast(descName + "成功");
        sleep(sleepNumber);
    } else {
        toast(descName + "失败");
        exit();
    }
}
clickButton("工作", 9, 2);
// 点击工作
gesture(1000, [300, 600], [300, 300]);
//滑动屏幕，防止静止
clickButton("员工健康", 26, 1);
// 员工健康
// sleep(3000);
clickButton("今天", 30, 0);
// 今天

// 表单填写函数

// 滑动屏幕到底部
gesture(1000, [300, 2000], [300, 0]);

clickButton("提交", 20, 5);
// 点击提交按钮
