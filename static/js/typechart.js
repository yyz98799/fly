// type
// getdata
function showtype() {
    var data6;
    $.get("/depart_add/", function(data, status){
        alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data);
        data6 = result.data;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('type'));
// 指定图表的配置项和数据
        var i = 0;
        var option = {
            title : {
                text: '投诉类别分布图',
                subtext: '来自www',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
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
            legend: {
                orient: 'vertical',
                left: 'left',
                // data: data6.types,
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    // 不知道哪种对
                    // data: data6.datas,
                    // data: [
                    //     {value:data1.datas[i].value, name:data1.datas[i++].name},
                    //     {value:data1.datas[i].value, name:data1.datas[i++].name},
                    //     {value:data1.datas[i].value, name:data1.datas[i++].name},
                    //     {value:data1.datas[i].value, name:data1.datas[i++].name},
                    //     {value:data1.datas[i].value, name:data1.datas[i++].name},
                    // ]
                    // 正常：
                    data:[
                        {value:233, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    // 测试
                    // data:[
                    //     {value:233, name:'直接访问'},
                    //     {value:310, name:'邮件营销'},
                    // ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })

}
$(document).ready(function(){

});
