# Generated by Django 5.0.6 on 2024-05-21 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0004_article'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='scraped_at',
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]