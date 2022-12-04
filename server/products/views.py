from django.shortcuts import render
from .serializers import ProductsSerializer
from .models import Product
from rest_framework import viewsets
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductsSerializer
