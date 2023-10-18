from django.contrib import admin
from .models import Student,Teacher
# Register your models here.
admin.site.register(Student)
class StudnetAdmin(admin.ModelAdmin):
    list_display=['Name','Email']

admin.site.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display=['Name','Email']