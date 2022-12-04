from django.urls import path
from .views import ProductViewSet
from rest_framework import routers

route = routers.DefaultRouter()
route.register("" , ProductViewSet , basename="products_view")


# urlpatterns = [
#     path("" , ProductViewSet.as_view())
# ]