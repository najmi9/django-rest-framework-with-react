from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import RegisterSerializer
from .utils import Service
from django.contrib.sites.shortcuts import get_current_site
import jwt
from datetime import datetime, timedelta
from trainingapp import settings
from django.contrib.auth.hashers import make_password

def decodeJwtAndFindUser(token):
	try:
		jwt.decode(token, settings.SECRET_KEY)
		return User.objects.get(token=token)
	except jwt.ExpiredSignatureError as identifier:
		return Response({'error': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)
	except jwt.exceptions.DecodeError as identifier:
		return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
	except user.DoesNotExist:
		return Response({'message':'user not found'}, status=404)
    

@api_view(['GET'])
def verify_email(request, token):
    user = decodeJwtAndFindUser(token)
    user.token=None
    user.is_active=True
    user.save()
    return Response({'email': 'Successfully activated'}, status=status.HTTP_200_OK)
   

def generate_jwt_token():
    dt = datetime.now() + timedelta(days=60)

    token = jwt.encode({
        'exp': int(dt.strftime('%s'))
    }, settings.SECRET_KEY, algorithm='HS256')

    return token.decode('utf-8')


@api_view(['GET', 'POST'])
def regisetr(request):
	if request.method == 'GET':
		return Response('oh')


	data=request.data
	password= make_password(data['password'])

	serializer=RegisterSerializer(data={"password":password, "email":data['email']})
	token = generate_jwt_token()
	serializer.is_valid(raise_exception=True)
	user = serializer.save(token=token)
	url='http://'+get_current_site(request).domain+'/api/verify-email/'+'{}'.format(token)
	Service.sendEmail(user.email, url)
	return Response(serializer.data ,status=201)


@api_view(['POST'])
def resetPasswordRequest(request):
	email = request.data['email']
	try:
		user = User.objects.get(email=email)
	except user.DoesNotExist as e:
		return Response({'message':'user not found'})
	token=generate_jwt_token()
	user.token=token
	user.save()
	url='http://'+get_current_site(request).domain+'/api/reset-password/'+'{}'.format(token)
	print(url)
	Service.sendEmail(email, url)
	return Response({'message':'an email was sended to you !'}, status=200)

@api_view(['POST'])
def resetPassword(request, token):
	user = decodeJwtAndFindUser(token)
	password= request.data['password']
	user.set_password(password)
	user.save()
	return Response({"message":"password updated Successfully"}, status=200)