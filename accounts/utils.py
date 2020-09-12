#from django.db.models.signals import pre_save
#from django.dispatch import receiver
#from django.contrib.auth.models import User
from django.core.mail import send_mail


#@receiver(pre_save, sender=User)
class Service:

	def sendEmail(receipent, url):
		send_mail(
				'Confirm Account',
				'Thank for create your account in our website, click to here {} to activte it'.format(url),
				'imadnajmi9@gmail.com',
				[receipent],
				fail_silently=True
				)
