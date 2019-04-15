from django.db import models


# Create your models here.

class Fly(models.Model):
    no = models.AutoField(primary_key=True)
    date = models.CharField(max_length=20)
    ans_date = models.CharField(max_length=20)
    source = models.CharField(max_length=40)
    department = models.CharField(max_length=40)
    area = models.CharField(max_length=20)
    url = models.CharField(max_length=255)
    _content = models.TextField
    ans_content = models.TextField
    type = models.CharField(max_length=50)
    summary = models.TextField
    ner = models.TextField
    keyword = models.TextField
