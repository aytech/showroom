"""showroom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
import os

from django.contrib import admin
from django.urls import re_path
from django.views.static import serve

from ui import views as ui

handler404 = 'ui.views.page_not_found'
env = os.environ['DJANGO_SETTINGS_MODULE']

if env == 'showroom.settings.development':
    from showroom.settings import development as settings
else:
    from showroom.settings import production as settings

urlpatterns = [

    # Client UI routes
    re_path(r'^$', ui.home, name='home'),

    # Admin section
    re_path(r'^admin/', admin.site.urls),

    # GraphQL
    # re_path(r'^api$', csrf_exempt(GraphQLView.as_view(graphiql=settings.GRAPHIQL_AVAILABLE, schema=schema))),

    # Media
    re_path(r'^media/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT,
    }),

    # Static
    re_path(r'^static/(?P<path>.*)$', serve, {
        'document_root': settings.STATIC_ROOT,
    }),

    # UI locales
    re_path(r'^locales/(?P<path>.*)$', serve, {
        'document_root': settings.LOCALES_ROOT,
    }),

    # Catch all
    re_path(r'^(?P<path>.*)$', ui.page_not_found, name='404'),
]
