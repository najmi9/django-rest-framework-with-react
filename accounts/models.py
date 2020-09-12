from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

class UserManager(BaseUserManager):

    def create_user(self, email, password):
    	if email == '':
    		raise TypeError('email not provided')
    	email = self.normalize_email(email)
    	user = self.model(email=email)
    	user.set_password(password)
    	user.save()
    	return user
        

    def create_superuser(self, email, password):
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=False, db_index=True, null=False, blank=False)
    email = models.EmailField(max_length=255, unique=True, db_index=True, null=False, blank=False)
    token = models.CharField(max_length=255, unique=True, null=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
   
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def validate(self, **data):
    	if data['password'] == ''or data['username'] == '':
    		raise TypeError('password or username cannot be blank !') 
    	return data

    def __str__(self):
        return self.email
       
