import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { dayzShopItems, dayzShopCategories, DayZShopItem } from '@/data/dayzShopItems';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface CartItem extends DayZShopItem {
  quantity: number;
}

const DayZShop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('dayzServerCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dayzServerCart', JSON.stringify(cart));
  }, [cart]);

  const categories = ['Все', ...dayzShopCategories];

  const filteredItems = selectedCategory === 'Все' 
    ? dayzShopItems 
    : dayzShopItems.filter(item => item.category === selectedCategory);

  const addToCart = (product: DayZShopItem) => {
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

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Dayzica Store</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/dayzica')}
                className="flex items-center gap-2"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Магазин DayZ</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Покупайте снаряжение и ресурсы для выживания
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="gap-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-between">
                  <span>Корзина</span>
                  {cart.length > 0 && (
                    <Button variant="outline" size="sm" onClick={clearCart}>
                      <Icon name="Trash2" size={16} className="mr-2" />
                      Очистить
                    </Button>
                  )}
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Корзина пуста</p>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <Card key={item.id} className="p-4">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={item.icon as any} size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                            <p className="text-sm text-primary font-bold">{item.price}₽</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="flex-1 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                      </Card>
                    ))}
                    
                    <div className="border-t pt-4 space-y-4">
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span className="text-primary">{getCartTotal()}₽</span>
                      </div>
                      <Button onClick={handleCheckout} className="w-full gap-2" size="lg">
                        <Icon name="CreditCard" size={20} />
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredItems.map(item => {
              const cartItem = cart.find(c => c.id === item.id);
              const inCart = cartItem?.quantity || 0;
              
              return (
                <Card 
                  key={item.id} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {item.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary">
                      Популярное
                    </Badge>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon as any} size={28} className="text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{item.price}₽</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  <Button 
                    onClick={() => addToCart(item)} 
                    className="w-full gap-2"
                  >
                    <Icon name="ShoppingCart" size={16} />
                    В корзину
                  </Button>
                </Card>
              );
            })}
          </div>

          <Card className="p-6 bg-muted/30 mt-8">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-2">Важная информация</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Товары доставляются автоматически после оплаты</li>
                  <li>• Для получения товаров необходимо авторизоваться через Steam</li>
                  <li>• Приоритетные слоты активируются в течение 5 минут</li>
                  <li>• Транспорт доставляется на указанную локацию в течение часа</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DayZShop;