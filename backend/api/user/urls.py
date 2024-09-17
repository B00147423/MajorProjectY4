# C:\Django-Project\djangoWebsite\api\user\urls.py
# C:\Django-Project\djangoWebsite\api\user\urls.py
from django.urls import path
from .login import login_view
from .signup import signup_view

urlpatterns = [
    path('login/', login_view, name='login'),
    path('signup/', signup_view, name='signup'),
]
