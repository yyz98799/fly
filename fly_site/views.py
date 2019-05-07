from django.db import connection
from django.shortcuts import render
from django.shortcuts import HttpResponse
from fly_site import models
from django.http import JsonResponse
import json


def index(requsest):
    return render(requsest, "index.html")

#投诉按地区分类
def area_add(request):
    area = []
    amount = []

    cursor = connection.cursor()
    cursor.execute("SELECT area FROM fly_site_fly GROUP BY area")
    area_name = cursor.fetchall()
    for row in area_name:
        area += row

    cursor.execute("SELECT COUNT(area) FROM fly_site_fly GROUP BY area")
    area_number = cursor.fetchall()
    for row in area_number:
        amount += row

    result = {
        "code": 200,
        "error": None,
        "data":
            {
                # "areas": ["上城区", "下城区", "y城区", "k城区", "p城区", "z城区"],
                # "amount": [19325, 23438, 31000, 121594, 134141, 681807]
                "areas": area,
                "amount": amount
            }
    }

    result = json.dumps(result)
    return HttpResponse(result)


def depart_add(request):
    departs = []
    amount = []
    cursor = connection.cursor()
    cursor.execute("SELECT department FROM fly_site_fly GROUP BY department "
                   "ORDER BY COUNT(department) DESC LIMIT 20")
    departs_name = cursor.fetchall()
    for row in departs_name:
        departs += row

    # print(departs)
    # print(amount)

    cursor.execute("SELECT COUNT(department) FROM fly_site_fly GROUP BY department "
                   "ORDER BY COUNT(department) DESC LIMIT 20")
    departs_number = cursor.fetchall()
    for row in departs_number:
        amount += row

    result = {
        "code": 200,
        "error": None,
        "data":
            {
                # "departs": ["计划生育局", "阿萨德局", "啊投影仪局", "计算机局", "快乐水是是局", "拉我玩局"],
                # "amount": [195, 238, 300, 194, 1341, 687]
                "departs":departs,
                "amount":amount
            }
    }
    result = json.dumps(result)
    return HttpResponse(result)


def amount_add(request):
    times = []
    amount = []
    result = {
        "code": 200,
        "error": None,
        "data":
            {
                "times": ["2019.4.1", "2019.4.2", "2019.4.3", "2019.4.4", "2019.4.5", "2019.4.6", "2019.4.7"],
                "amount": [5, 20, 36, 10, 10, 20, 3],
            }
    }
    result = json.dumps(result)
    return HttpResponse(result)


def type_add(request):
    result = {
        "code": 200,
        "error": None,
        "data": {
            "types": [
                'QQ',
                '微信',
            ],
            "datas": [
                {
                    "type": '出行',
                    "value": 5,
                },
                {
                    "type": '扰民',
                    "value": 20,
                },
            ]
        }
    }
    result = json.dumps(result)
    return HttpResponse(result)


def areaeffic_add(request):
    result = {
        "code": 200,
        "error": None,
        "data":
            {
                "areas": ["上城区", "下城区", "上城区", "下城区", "上城区", "下城区"],
                "values": [5, 20, 36, 10, 10, 20]
            }
    }
    result = json.dumps(result)
    return HttpResponse(result)


def departeffic_add(request):
    result = {
        "code": 200,
        "error": None,
        "data":
            {
                "departs": ["计划生育局", "阿萨德局", "啊投影仪局", "计算机局", "快乐水是是局", "拉我玩局"],
                "values": [5, 20, 36, 10, 10, 3]
            }
    }
    result = json.dumps(result)
    return HttpResponse(result)


def from_add(request):
    result = {
        "code": 200,
        "error": None,
        "data": {
            "types": [
                'QQ',
                '微信',
            ],
            "datas": [
                {
                    "name": 'QQ',
                    "value": 5,
                },
                {
                    "name": '微信',
                    "value": 20,
                },
            ]
        }
    }
    result = json.dumps(result)
    return HttpResponse(result)

def hotspot_add(request):
    result = {}
    result = json.dumps(result)
    return HttpResponse(result)
