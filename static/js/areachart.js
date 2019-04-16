// area
function showarea() {
    var data2;
    // = {result};
    // alert(data2);

    $.get("/area_add/", function(data, status){
        // if (code == 200)
        alert("数据: " + data + "\n状态: " + status);
        // else if (code == 201)  alert(error);
        let result = JSON.parse(data)
        data2 = result.data;
        var areachart = echarts.init(document.getElementById('area'));

        var option = {
            title: {
                text: '投诉量地区分布图',
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
                data: data2.areas
                // data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
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

        areachart.setOption(option);

    })
}

$(document).ready(function(){
    // var data2;
    //     // = {result};
    // // alert(data2);
    //
    // $.get("/add/", function(data, status){
    //     // if (code == 200)
    //         alert("数据: " + data + "\n状态: " + status);
    //     // else if (code == 201)  alert(error);
    //     let result = JSON.parse(data)
    //     data2 = result.data;
    //     var areachart = echarts.init(document.getElementById('area'));
    //
    // var option = {
    //     title: {
    //         text: '投诉量地区分布图',
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
    //         data: data2.areas
    //         // data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    //     },
    //     series: [
    //         {
    //             name: '2012年',
    //             type: 'bar',
    //             data: data2.amount
    //             // data: [19325, 23438, 31000, 121594, 134141, 681807]
    //         }
    //     ]
    // };
    //
    // areachart.setOption(option);
    //
    // })


});
