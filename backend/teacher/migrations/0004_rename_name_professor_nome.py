# Generated by Django 4.1.2 on 2022-10-26 00:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0003_rename_teacher_professor_rename_nome_professor_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='professor',
            old_name='name',
            new_name='nome',
        ),
    ]
