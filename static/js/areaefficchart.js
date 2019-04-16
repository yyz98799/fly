// areaeffic
// getdata
function showareaeffic() {
    var data4;
    $.get("/areaeffic_add/",function(data, status){
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data4 = result.data;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('areaeffic'));
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
                    data: data4.areas,
                    // data : ["上城区","下城区","上城区","下城区","上城区","下城区"],
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
                    data: data4.values,
                    // data:[10, 52, 200, 334, 390, 220]
                }
            ]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })

}
$(document).ready(function(){
//     var data4;
//     $.get("URL",function(data, status){
//         alert("数据: " + datas + "\n状态: " + status);
//         data4=data;
//     })
// // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.getElementById('areaeffic'));
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
//                 // data: data1.areas,
//                 data : ["上城区","下城区","上城区","下城区","上城区","下城区"],
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
//                 data:[10, 52, 200, 334, 390, 220]
//             }
//         ]
//     };
//
// // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
});
