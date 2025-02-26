# Generated by Django 5.0.6 on 2024-06-07 08:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='media/Project')),
                ('heading', models.CharField(max_length=50)),
                ('discription', models.CharField(max_length=500)),
                ('business', models.CharField(max_length=500)),
                ('technic', models.CharField(max_length=500)),
                ('title', models.CharField(max_length=500)),
            ],
        ),
    ]
