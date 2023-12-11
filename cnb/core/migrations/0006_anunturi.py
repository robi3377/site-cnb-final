# Generated by Django 4.2.1 on 2023-05-25 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_delete_anunturi'),
    ]

    operations = [
        migrations.CreateModel(
            name='Anunturi',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titlu', models.CharField(max_length=255)),
                ('text', models.TextField(max_length=2000)),
                ('data', models.DateField(auto_now_add=True)),
                ('ecuson', models.ImageField(upload_to='poze_anunturi/')),
            ],
        ),
    ]