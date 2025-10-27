import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product, products, categories } from '@/data/shopProducts';
import ShopHeader from '@/components/shop/ShopHeader';
import ShoppingCart from '@/components/shop/ShoppingCart';
import ProductCard from '@/components/shop/ProductCard';
import PrivilegeDialog from '@/components/shop/PrivilegeDialog';

interface CartItem extends Product {
  quantity: number;
}

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Все товары');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('rustServerCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rustServerCart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = selectedCategory === 'Все товары' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const clearCart = () => {
    setCart([]);
  };

  const handleProductClick = (product: Product) => {
    if (product.category === 'Привилегии' && product.details) {
      setSelectedProduct(product);
    }
  };

  const handleCheckout = () => {
    const isAuthenticated = localStorage.getItem('steamAuthenticated');
    if (isAuthenticated === 'true') {
      setIsCartOpen(false);
      navigate('/checkout', { state: { cart } });
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ShopHeader 
        totalItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        onBackClick={() => navigate('/')}
      />

      <ShoppingCart 
        isOpen={isCartOpen}
        cart={cart}
        totalPrice={totalPrice}
        onClose={() => setIsCartOpen(false)}
        onClearCart={clearCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="ShoppingBag" size={40} className="text-primary" />
              <h2 className="text-5xl font-bold">Магазин товаров</h2>
            </div>
            <p className="text-xl text-muted-foreground">Улучши свой игровой опыт</p>
          </div>

          <div className="mb-8">
            <div className="flex gap-2 justify-center flex-wrap max-w-5xl mx-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap text-sm"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                onProductClick={handleProductClick}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">В этой категории пока нет товаров</p>
            </div>
          )}
        </div>
      </div>

      <PrivilegeDialog 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Shop;
