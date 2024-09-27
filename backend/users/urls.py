# users/urls.py

from django.urls import path, include

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.authtoken')),
]
