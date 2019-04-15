// depart

function showdepart( ) {
    var data2;
    $.get("/depart_add/", function(data, status){
            alert("数据: " + data + "\n状态: " + status);
        let result = JSON.parse(data)
        data2 = result.data;

        var departchart = echarts.init(document.getElementById('depart'));

    var option = {
        title: {
            text: '投诉量部门分布图',
            subtext: '数据来自fly'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
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
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: data2.departs
            // data: ["计划生育局","阿萨德局","啊投影仪局","计算机局","快乐水是是局","拉我玩局"]
        },
        series: [
            {
                name: '2012年',
                type: 'bar',
                data: data2.amount
                // data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };

    departchart.setOption(option);
    })
}
$(document).ready(function(){
    // $.get("URL",function(datas, error, code){
    //     if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
    //     else if (code == 201)  alert(error);
    //     data1 = datas;
    //
    //     var areachart = echarts.init(document.getElementById('depart'));
    //
    // var option = {
    //     title: {
    //         text: '投诉量部门分布图',
    //         subtext: '数据来自fly'
    //     },
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'shadow'
    //         }
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },
    //     toolbox: {
    //         show : true,
    //         feature : {
    //             mark : {show: true},
    //             dataView : {show: true, readOnly: true},
    //             magicType : {show: true, type: ['line', 'bar']},
    //             restore : {show: true},
    //             saveAsImage : {show: true}
    //         }
    //     },
    //     xAxis: {
    //         type: 'value',
    //         boundaryGap: [0, 0.01]
    //     },
    //     yAxis: {
    //         type: 'category',
    //         // data: data1.departs
    //         data: ["计划生育局","阿萨德局","啊投影仪局","计算机局","快乐水是是局","拉我玩局"]
    //     },
    //     series: [
    //         {
    //             name: '2012年',
    //             type: 'bar',
    //             // data: data1.amount
    //             data: [19325, 23438, 31000, 121594, 134141, 681807]
    //         }
    //     ]
    // };
    //
    // areachart.setOption(option);
    // })


});
