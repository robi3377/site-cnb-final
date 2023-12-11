"""
URL configuration for cnb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
<<<<<<< HEAD

=======
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
<<<<<<< HEAD
from core.sitemaps import StaticViewSitemap
from django.contrib.sitemaps.views import sitemap
from django.views.static import serve

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path('', include('core.urls')),
    path('media/<path:path>/', serve, {'document_root': settings.MEDIA_ROOT}),
    path('static/<path:path>/', serve, {'document_root': settings.STATIC_ROOT}),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
>>>>>>> 2c395e77ad1deb0f0e5e1bc070a6512ea23e31d9
