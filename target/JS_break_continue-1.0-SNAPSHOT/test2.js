/**
 * Project name(项目名称)：JS_break_continue
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 12:46
 * Version(版本): 1.0
 * Description(描述)： 无
 */

document.write("<br/>")

for (var i = 0; i < 10; i++)
{
    if (i % 2 == 0)
    {
        continue;
    }
    document.write(i + "&nbsp;");
}