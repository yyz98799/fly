var data1;
function getdata() {
    $.get("URL",function(datas, error, code){
        if (code == 200)  alert("数据: " + datas + "\n状态: " + error);
        else if (code == 201)  alert(error);
        data1 = datas;
    })
}
//
function createtable(data1) {
    var tableData = "<tr>";
    for(var i = 0; i < data1.length; i++) {
        tableData += "<th>" + data1[i].no + "</th>";
        tableData += "<th>" + data1[i].content + "</th>";
        tableData += "<th>" + data1[i].time + "</th>";
    }
    tableData += "</tr>";
    $("#tbody1").html(tableData);
}

$(document).ready(function(){
    //init table

    // getdata();
    // createtable(data1);

    $("#mainlist").show();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();

    $("#kkk").click(function(){
        $("#flyfly").hide();
        // document.write(123);
    });

    //header背景色调变化
    //3.31 移除了header 换成了sidebar
    // $(".flyheader").mouseenter(function(){
    //     $("#flyheader").css("background","#000000");
    // });
    // $(".flyheader").mouseleave(function(){
    //     $("#flyheader").css("background","#1E1D22");
    // });




//refresh list
    $("#refreshbutton").click(function(){
        getdata();
        createtable(data1);
    });

});

// jquery test
// $(function () {
//     var j;
//     document.write(j);
//     }
// );
$("#listbutton").click(function(){
    $("#mainlist").show();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    // document.write(123);
    $(".page-header").text("投诉线索智能筛查系统");

});
$("#amountbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").show();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    // document.write(123);
    $(".page-header").text("最近一周的投诉量趋势图");
    showamount();
});
$("#departbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").show();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    // document.write(123);
    $(".page-header").text("投诉量部门分布图");
    showdepart();
});
$("#areabutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").show();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    // document.write(123);
    $(".page-header").text("投诉量按地区分布图");
    showarea();
});
$("#typebutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").show();
    $("#from").hide();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    // document.write(123);
    $(".page-header").text("投诉量按类别分布图");
    showtype();
});

$("#areaefficbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#areaeffic").show();
    $("#departeffic").hide();
    $("#from").hide();
    $("#hotspot").hide();
    $(".page-header").text("各 地区 平均办理时效");
    showareaeffic();
});
$("#departefficbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#areaeffic").hide();
    $("#departeffic").show();
    $("#from").hide();
    $("#hotspot").hide();
    $(".page-header").text("各 部门 平均办理时效");
    showdeparteffic();
});

$("#frombutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").show();
    $("#hotspot").hide();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("数据来源排行图");
    showfrom();
});
$("#hotspotbutton").click(function(){
    $("#mainlist").hide();
    $("#amount").hide();
    $("#depart").hide();
    $("#area").hide();
    $("#type").hide();
    $("#from").hide();
    $("#hotspot").show();
    $("#areaeffic").hide();
    $("#departeffic").hide();
    $(".page-header").text("用户热词分析图");
});


$("#mainbutton").click(function () {
    $(location).attr("href", "temp.html");
})
