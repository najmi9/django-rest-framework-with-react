
from .views import regisetr, verify_email, resetPasswordRequest, resetPassword
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenRefreshView, TokenVerifyView,
)

from .custom_jwt import MyTokenObtainPairView
urlpatterns = [
    path('verify-email/<str:token>',verify_email, name="verify_email" ),
    path('reset-password-request/',resetPasswordRequest, name="reset-password-request" ),
    path('reset-password/<str:token>',resetPassword, name="reset-password" ),
    path('register/',regisetr, name="register" ),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]


