# Generated by Django 4.1.3 on 2022-12-11 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='uploads/images')),
                ('name', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('description', models.TextField()),
                ('category', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
