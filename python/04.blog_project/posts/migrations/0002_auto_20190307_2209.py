# Generated by Django 2.1.7 on 2019-03-07 22:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='post',
            table='blog_posts_post',
        ),
    ]
