# Generated by Django 4.2.1 on 2023-07-05 09:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0037_documente'),
    ]

    operations = [
        migrations.RenameField(
            model_name='anunturi',
            old_name='data_delete',
            new_name='data_stergere',
        ),
        migrations.RemoveField(
            model_name='anunturi',
            name='data_created',
        ),
    ]
