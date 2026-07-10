from django.shortcuts import render
from products.models import Category, Product

def home_view(request):
    categories = Category.objects.all()[:4]
    featured_products = Product.objects.all()[:8]
    
    # Provide mock data if DB is empty to preview the design
    if not categories:
        categories = [
            {'name': 'Organic Vegetables', 'image': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'slug': 'veg'},
            {'name': 'Fresh Fruits', 'image': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'slug': 'fruits'},
            {'name': 'Natural Honey', 'image': 'https://images.unsplash.com/photo-1587049352847-4d4b1ed74dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'slug': 'honey'},
            {'name': 'Herbal Teas', 'image': 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'slug': 'tea'},
        ]
        
    if not featured_products:
        featured_products = [
            {'name': 'Farm Fresh Tomatoes', 'price': '4.99', 'rating': '4.8', 'image': 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'is_organic': True},
            {'name': 'Raw Organic Honey', 'price': '12.99', 'rating': '4.9', 'image': 'https://images.unsplash.com/photo-1587049352847-4d4b1ed74dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'is_organic': True},
            {'name': 'Green Matcha Tea', 'price': '19.99', 'rating': '4.7', 'image': 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'is_organic': True},
            {'name': 'Organic Avocados', 'price': '6.99', 'rating': '4.5', 'image': 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'is_organic': True},
        ]
        
    context = {
        'categories': categories,
        'featured_products': featured_products
    }
    return render(request, 'core/home.html', context)
