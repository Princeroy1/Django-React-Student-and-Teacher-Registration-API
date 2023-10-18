
from django.urls import path,include
from .views import LoginView,LoginViewTeacher



urlpatterns = [
    path('get_login/',LoginView.as_view(),name="view"),
    path('get_login2/',LoginViewTeacher.as_view(),name="view")

]
