from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from oauth2_provider import urls as oauth2_urls

urlpatterns = [
    path('user/', include('api.user.urls')),  # For user-related URLs like login/signup
    path("admin/", admin.site.urls),
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),  # OAuth2 URLs
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
