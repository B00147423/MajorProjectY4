# C:\Users\beka\OneDrive\Desktop\MajorProjectY4\backend\api\user\login.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
from oauth2_provider.models import AccessToken, RefreshToken
from oauth2_provider.settings import oauth2_settings
from datetime import timedelta
from django.utils import timezone
from oauthlib.common import generate_token

@csrf_exempt
@api_view(['POST'])
def login_view(request):
    from api.models import User

    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            # Create tokens for the user
            access_token = create_oauth2_token(user)
            return Response({
                'message': 'Login successful',
                'access_token': access_token.token,
                'refresh_token': access_token.refresh_token.token,
                'expires_in': oauth2_settings.ACCESS_TOKEN_EXPIRE_SECONDS
            })
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

def create_oauth2_token(user):
    # Create a new access token for the user
    access_token = AccessToken.objects.create(
        user=user,
        token=generate_token(),
        expires=timezone.now() + timedelta(seconds=oauth2_settings.ACCESS_TOKEN_EXPIRE_SECONDS),
        scope="read write"
    )
    # Create a refresh token for the access token
    refresh_token = RefreshToken.objects.create(
        user=user,
        token=generate_token(),
        access_token=access_token
    )
    return access_token


