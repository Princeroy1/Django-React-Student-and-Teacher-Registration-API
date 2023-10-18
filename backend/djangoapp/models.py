from django.db import models
from django.core.validators import RegexValidator

class Student(models.Model):
    Email= models.EmailField()
    Name = models.CharField(max_length=14)
    password = models.CharField(max_length=128)
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    Gender = models.CharField(
        max_length=6,
        choices=GENDER_CHOICES,
        default='Male'  # You can set a default value if needed
    )
  # Field for re-entering the password

    def __str__(self):
        return self.Name
class Teacher(Student):
  Teacher_id=models.IntegerField()
  phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="format: 03033333333 ")
  Mobile = models.CharField(validators=[phone_regex], max_length=17, blank=True) 
