from django.contrib import admin
from django.urls import path,include
from .import views


urlpatterns = [
    
    path("",views.index,name='index'),
    path("features",views.features,name='features'),
    path("project",views.project,name='project'),
    path("writing",views.writing,name='writing'),
]