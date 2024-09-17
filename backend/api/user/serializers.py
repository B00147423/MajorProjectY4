# C:\Users\beka\OneDrive\Desktop\MajorProjectY4\backend\api\user\serializers.py
from rest_framework import serializers
from ..models import User, Review  # Use relative import

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Handle password separately

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        user = User(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'poster', 'product', 'score', 'comment', 'created_at', 'updated_at']
