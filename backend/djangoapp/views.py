from django.shortcuts import render
from rest_framework import viewsets
from .models import Teacher
from .Serializers import TeacherSerializer,StudentSerializer
# Create your views here.
from .models import Student
from django.http import JsonResponse
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status


class TeacherViewSet(viewsets.ModelViewSet):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
class StudentViewSet(viewsets.ModelViewSet):
    queryset=Teacher.objects.all()
    serializer_class=StudentSerializer


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        Email = request.data.get('Email')
        password = request.data.get('password')
        
        # Use filter to find matching users (if any)
        users = Student.objects.filter(Q(Email=Email) & Q(password=password))


 
        # if users.exists()
        
        if users:
            # At least one user matched the criteria, which means successful login
            return Response({'message': 'Login successful','res':True}, status=status.HTTP_200_OK)
        else:
            # No user matched the criteria, which means login failed
            return Response({'message': 'Issue in your Email or password','res':False}, status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request, *args, **kwargs):
        return Response({'message': 'Invalid request method',}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


class LoginViewTeacher(APIView):
    def post(self, request, *args, **kwargs):
        Email = request.data.get('Email')
        password = request.data.get('password')
        
        # Use filter to find matching users (if any)
        users = Teacher.objects.filter(Q(Email=Email) & Q(password=password))


 
        # if users.exists()
        
        if users:
            # At least one user matched the criteria, which means successful login
            # return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            return Response({'message': 'Login successful','res':True}, status=status.HTTP_200_OK)

        else:
            # No user matched the criteria, which means login failed
            return Response({'message': 'Issue in your Email or password','res':False}, status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request, *args, **kwargs):
        return Response({'message': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


       