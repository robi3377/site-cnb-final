# Generated by Django 4.2.1 on 2023-07-19 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0046_alter_contact_administrativ_model_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Search_bar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nume', models.CharField(max_length=255)),
                ('link', models.CharField(max_length=255)),
            ],
        ),
    ]