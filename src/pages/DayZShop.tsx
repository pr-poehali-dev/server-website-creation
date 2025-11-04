import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { dayzShopItems, dayzShopCategories, DayZShopItem } from '@/data/dayzShopItems';

const DayZShop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [cart, setCart] = useState<Map<number, number>>(new Map());

  const categories = ['Все', ...dayzShopCategories];

  const filteredItems = selectedCategory === 'Все' 
    ? dayzShopItems 
    : dayzShopItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: DayZShopItem) => {
    setCart(prev => {
      const newCart = new Map(prev);
      newCart.set(item.id, (newCart.get(item.id) || 0) + 1);
      return newCart;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = new Map(prev);
      const currentQty = newCart.get(itemId) || 0;
      if (currentQty > 1) {
        newCart.set(itemId, currentQty - 1);
      } else {
        newCart.delete(itemId);
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Array.from(cart.entries()).reduce((total, [itemId, qty]) => {
      const item = dayzShopItems.find(i => i.id === itemId);
      return total + (item?.price || 0) * qty;
    }, 0);
  };

  const getTotalItems = () => {
    return Array.from(cart.values()).reduce((sum, qty) => sum + qty, 0);
  };

  const handleCheckout = () => {
    const cartItems = Array.from(cart.entries()).map(([itemId, quantity]) => {
      const item = dayzShopItems.find(i => i.id === itemId)!;
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        icon: item.icon,
        quantity
      };
    });
    navigate('/checkout', { state: { cart: cartItems } });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Dayzica Store</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/dayzica')}
                className="flex items-center gap-2"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Button>
              {getTotalItems() > 0 && (
                <Button onClick={handleCheckout} className="gap-2 relative">
                  <Icon name="ShoppingCart" size={16} />
                  Корзина
                  <Badge variant="destructive" className="ml-1">
                    {getTotalItems()}
                  </Badge>
                </Button>
              )}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredItems.map(item => {
              const inCart = cart.get(item.id) || 0;
              
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

                  <div className="flex gap-2">
                    {inCart > 0 ? (
                      <div className="flex items-center gap-2 w-full">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <div className="flex-1 text-center font-bold">
                          {inCart} шт
                        </div>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => addToCart(item)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={() => addToCart(item)} 
                        className="w-full gap-2"
                      >
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {getTotalItems() > 0 && (
            <Card className="fixed bottom-6 right-6 p-6 shadow-2xl max-w-sm animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{getCartTotal()}₽</span>
                </div>
                <Button onClick={handleCheckout} className="w-full gap-2" size="lg">
                  <Icon name="CreditCard" size={20} />
                  Оформить заказ
                </Button>
              </div>
            </Card>
          )}

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
