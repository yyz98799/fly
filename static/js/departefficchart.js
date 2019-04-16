// departeffic
// getdata
function showdeparteffic() {
    var data5;
    $.get("/departeffic_add/",function(data, status){
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data5 = result.data;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('departeffic'));
// 指定图表的配置项和数据
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: true},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data: data5.departs,
                    // data : ["计划生育局","阿萨德局","啊投影仪局","计算机局","快乐水是是局","拉我玩局"],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data: data5.values,
                    // data: [5, 20, 36, 10, 10, 3]
                }
            ]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })

}
var data1;
$(document).ready(function(){
//     $.get("URL",function(datas, error, code){
//         if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
//         else if (code == 201)  alert(error);
//         data1 = datas;
//     })
// // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.getElementById('departeffic'));
// // 指定图表的配置项和数据
//     var option = {
//         color: ['#3398DB'],
//         tooltip : {
//             trigger: 'axis',
//             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
//                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         toolbox: {
//             show : true,
//             feature : {
//                 mark : {show: true},
//                 dataView : {show: true, readOnly: true},
//                 magicType : {show: true, type: ['line', 'bar']},
//                 restore : {show: true},
//                 saveAsImage : {show: true}
//             }
//         },
//         xAxis : [
//             {
//                 type : 'category',
//                 // data: data1.departs,
//                 data : ["计划生育局","阿萨德局","啊投影仪局","计算机局","快乐水是是局","拉我玩局"],
//                 axisTick: {
//                     alignWithLabel: true
//                 }
//             }
//         ],
//         yAxis : [
//             {
//                 type : 'value'
//             }
//         ],
//         series : [
//             {
//                 name:'直接访问',
//                 type:'bar',
//                 barWidth: '60%',
//                 // data: data1.values,
//                 data: [5, 20, 36, 10, 10, 3]
//             }
//         ]
//     };
//
// // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
});
