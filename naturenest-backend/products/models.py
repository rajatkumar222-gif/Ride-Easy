from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    image = models.URLField(blank=True, null=True, help_text="Placeholder for Cloudinary URL")
    description = models.TextField(blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    image = models.URLField(blank=True, null=True, help_text="Placeholder for Cloudinary URL")
    
    is_organic = models.BooleanField(default=True)
    stock = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=5.0)
    
    # Placeholder for multi-vendor relationships
    farmer_name = models.CharField(max_length=100, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
