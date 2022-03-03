/**
 * Project name(项目名称)：JS_break_continue
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 12:48
 * Version(版本): 1.0
 * Description(描述)： 无
 */


document.write("<br/>");

document.write("开始循环!<br/>");
outerloop:          // 定义一个标签
    for (var i = 0; i < 5; i++)
    {
        document.write("外层循环: " + i + "<br />");
        innerloop:       // 定义一个标签
            for (var j = 0; j < 5; j++)
            {
                if (j > 3)
                {
                    break;
                }           // 跳出内层循环
                if (i == 2)
                {
                    break innerloop;
                }  // 跳出内层讯息
                if (i == 4)
                {
                    break outerloop;
                }  // 跳出外层循环
                document.write("内层循环: " + j + " <br />");
            }
    }
document.write("循环结束!<br /> ");