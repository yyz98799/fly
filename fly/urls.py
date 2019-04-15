"""fly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from fly_site import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('area_add/', views.area_add),
    path('depart_add/', views.depart_add),
    path('amount_add/', views.amount_add),
    path('type_add/', views.type_add),
    path('areaeffic_add/', views.areaeffic_add),
    path('departeffic_add/', views.departeffic_add),
    path('from_add/', views.from_add),
    path('hotpot_add', views.hotspot_add),
]
