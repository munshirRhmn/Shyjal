from django.shortcuts import render
from .models import Project

# Create your views here.
def index(request):
    return render(request,'index.html')

def features(request):
    return render(request,'features.html')


def project(request):
    context = {
        'pro': Project.objects.all()
    }
    return render(request,'project.html',context)

def writing(request):
    return render(request,'writing.html')
