// hotspot


// getdata
var data1;
$(document).ready(function(){
    $.get("URL",function(datas, error, code){
        if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
        else if (code == 201)  alert(error);
        data1 = datas;
    })
    function createRandomItemStyle() {
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('hotspot'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'Baidu Trends',
            link: 'http://www.baidu.com/'
        },
        tooltip: {
            show: true
        },
        // toolbox: {
        //     show : true,
        //     feature : {
        //         mark : {show: true},
        //         dataView : {show: true, readOnly: true},
        //         magicType : {show: true, type: ['line', 'bar']},
        //         restore : {show: true},
        //         saveAsImage : {show: true}
        //     }
        // },
        series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['100%', '100%'],
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: [
                {
                    name: "车位",
                    value: 10000,
                    itemStyle: {
                        normal: {
                            color: 'black'
                        }
                    }
                },
                {
                    name: "车辆",
                    value: 6181,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "到期",
                    value: 4386,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "车道",
                    value: 4055,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "小区业主",
                    value: 2467,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "贷款",
                    value: 2244,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "材料",
                    value: 1898,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "电子",
                    value: 1484,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "协警",
                    value: 1112,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "道路",
                    value: 965,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "开车",
                    value: 847,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "隔离带",
                    value: 582,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "直行",
                    value: 555,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "态度",
                    value: 550,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "路面",
                    value: 462,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "123",
                    value: 366,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Rita Ora",
                    value: 360,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Serena Williams",
                    value: 282,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "NCAA baseball tournament",
                    value: 273,
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: "Point Break",
                    value: 265,
                    itemStyle: createRandomItemStyle()
                }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
