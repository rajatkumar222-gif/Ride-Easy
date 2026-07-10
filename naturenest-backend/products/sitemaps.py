from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .models import Product, Category

class ProductSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.9

    def items(self):
        return Product.objects.all()

    def lastmod(self, obj):
        return obj.updated_at
        
    def location(self, obj):
        return reverse('products:detail', args=[obj.slug])

class StaticViewSitemap(Sitemap):
    priority = 1.0
    changefreq = 'daily'

    def items(self):
        return ['home']

    def location(self, item):
        return reverse(item)
