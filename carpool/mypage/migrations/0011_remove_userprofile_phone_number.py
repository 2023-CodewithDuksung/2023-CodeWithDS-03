
# Generated by Django 3.2.20 on 2023-08-24 15:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mypage', '0010_userprofile_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='phone_number',
        ),
    ]
