# Generated by Django 4.2.4 on 2023-08-22 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0002_alter_board_create'),
    ]

    operations = [
        migrations.AddField(
            model_name='board',
            name='total',
            field=models.PositiveIntegerField(default=1, editable=False),
            preserve_default=False,
        ),
    ]