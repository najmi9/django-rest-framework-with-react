class UserManager(BaseUserManager):
    def create_user(self, email, username, password, alias=None):
        user = self.model(
        email = self.normalize_email(email),
                username = username,)
        user.set_password(password)
        user.save()
        return user
   def create_superuser(self, email, username, password):
       self.create_user(email, username, password)
       user.is_staff()
       user.is_superuser = True
       user.save()
       return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(null=False, unique=True)
    username = models.CharField(max_length=25, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username",]