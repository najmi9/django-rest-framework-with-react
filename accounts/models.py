from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, PermissionsMixin)

class UserManager(BaseUserManager):

    def create_user(self, email, password=None):
    	if email == '':
    		raise TypeError('email not provided')
    	email = self.normalize_email(email)
    	user = self.model(email=email)
    	user.set_password(password)
    	user.save()
    	return user
        

    def create_superuser(self, email, password=None):
        if not password:
            raise TypeError('Password should not be none')
        email=self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True, db_index=True, null=False, blank=False)
    token = models.CharField(max_length=255, unique=True, null=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
   
    USERNAME_FIELD = 'email'


    objects = UserManager()

    def __str__(self):
        return self.email
       
