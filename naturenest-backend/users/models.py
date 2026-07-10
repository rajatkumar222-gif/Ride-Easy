from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Role(models.TextChoices):
        CUSTOMER = 'CUSTOMER', 'Customer'
        SELLER = 'SELLER', 'Seller'
        ADMIN = 'ADMIN', 'Admin'
    
    role = models.CharField(max_length=15, choices=Role.choices, default=Role.CUSTOMER)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_verified_seller = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username
