import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
  category: string;
  details?: {
    bonus?: string;
    resources?: string;
    components?: string;
    weapons?: string;
    explosives?: string;
  };
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  'Все товары',
  'Привилегии',
  'Ресурсы',
  'Боеприпасы',
  'Инструменты',
  'Взрывчатка',
  'Одежда',
  'Конструкции',
  'Медикаменты',
  'Еда',
  'Компоненты',
  'Машины',
  'Электричество',
  'Фермерство',
  'Праздники'
];

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

  const products: Product[] = [
    {
      id: 1,
      name: 'Start',
      price: 99,
      description: 'Начальные привилегии на сервере',
      icon: 'Zap',
      category: 'Привилегии',
      details: {
        bonus: '+1 к выбору спального места',
        resources: '5,000 дерева, 5,000 камня',
        components: '50 металлических пружин, 30 шестерёнок',
        weapons: 'Револьвер, Полуавтоматический пистолет',
        explosives: '5 ракет'
      }
    },
    {
      id: 2,
      name: 'Plus',
      price: 199,
      description: 'Улучшенные привилегии с дополнительными бонусами',
      icon: 'TrendingUp',
      category: 'Привилегии',
      details: {
        bonus: '+2 к выбору спального места',
        resources: '10,000 дерева, 10,000 камня, 5,000 металла',
        components: '100 металлических пружин, 60 шестерёнок, 30 металлических труб',
        weapons: 'Автомат, Снайперская винтовка',
        explosives: '10 ракет, 3 C4'
      }
    },
    {
      id: 3,
      name: 'VIP',
      price: 299,
      description: 'VIP привилегии для опытных игроков',
      icon: 'Crown',
      category: 'Привилегии',
      details: {
        bonus: '+3 к выбору спального места',
        resources: '20,000 дерева, 20,000 камня, 15,000 металла',
        components: '200 металлических пружин, 120 шестерёнок, 80 металлических труб',
        weapons: 'LR-300, Болтовка, Револьвер Python',
        explosives: '20 ракет, 8 C4'
      }
    },
    {
      id: 4,
      name: 'Premium',
      price: 499,
      description: 'Премиальные привилегии с максимальными бонусами',
      icon: 'Star',
      category: 'Привилегии',
      details: {
        bonus: '+4 к выбору спального места',
        resources: '35,000 дерева, 35,000 камня, 25,000 металла, 5,000 HQM',
        components: '350 металлических пружин, 200 шестерёнок, 150 металлических труб',
        weapons: 'M249, MP5, Дробовик',
        explosives: '35 ракет, 15 C4'
      }
    },
    {
      id: 5,
      name: 'Deluxe',
      price: 799,
      description: 'Максимальные привилегии для элиты сервера',
      icon: 'Award',
      category: 'Привилегии',
      details: {
        bonus: '+5 к выбору спального места',
        resources: '50,000 дерева, 50,000 камня, 40,000 металла, 10,000 HQM',
        components: '500 металлических пружин, 300 шестерёнок, 250 металлических труб, 100 листов металла',
        weapons: 'M249, LR-300, Снайперская винтовка, Дробовик боевой',
        explosives: '50 ракет, 25 C4, 10 торпед'
      }
    },
    {
      id: 3,
      name: '10,000 Ресурсов',
      price: 149,
      description: 'Дерево, камень, металл и ткань',
      icon: 'Box',
      category: 'Ресурсы'
    },
    {
      id: 4,
      name: '50,000 Металла',
      price: 349,
      description: 'Металлические фрагменты для постройки',
      icon: 'Blocks',
      category: 'Ресурсы'
    },
    {
      id: 5,
      name: '5.56 Патроны (1000 шт)',
      price: 199,
      description: 'Боеприпасы для автоматов',
      icon: 'Crosshair',
      category: 'Боеприпасы'
    },
    {
      id: 6,
      name: 'Набор инструментов',
      price: 179,
      description: 'Топор, кирка, молот высокого качества',
      icon: 'Hammer',
      category: 'Инструменты'
    },
    {
      id: 7,
      name: 'C4 (10 шт)',
      price: 599,
      description: 'Взрывчатка для рейдов',
      icon: 'Bomb',
      category: 'Взрывчатка'
    },
    {
      id: 8,
      name: 'Тяжёлая броня',
      price: 249,
      description: 'Полный комплект защитной одежды',
      icon: 'Shield',
      category: 'Одежда'
    },
    {
      id: 9,
      name: 'Металлические стены (100 шт)',
      price: 399,
      description: 'Прочные конструкции для базы',
      icon: 'Home',
      category: 'Конструкции'
    },
    {
      id: 10,
      name: 'Аптечки (50 шт)',
      price: 129,
      description: 'Медикаменты для восстановления здоровья',
      icon: 'Heart',
      category: 'Медикаменты'
    },
    {
      id: 11,
      name: 'Набор еды',
      price: 79,
      description: 'Мясо, овощи и консервы',
      icon: 'Apple',
      category: 'Еда'
    },
    {
      id: 12,
      name: 'Компоненты (100 шт)',
      price: 189,
      description: 'Разные компоненты для крафта',
      icon: 'Cog',
      category: 'Компоненты'
    },
    {
      id: 13,
      name: 'Минивертолёт',
      price: 899,
      description: 'Личный транспорт для быстрого перемещения',
      icon: 'Plane',
      category: 'Машины'
    },
    {
      id: 14,
      name: 'Генератор + батареи',
      price: 299,
      description: 'Источник питания для базы',
      icon: 'Zap',
      category: 'Электричество'
    },
    {
      id: 15,
      name: 'Набор фермера',
      price: 159,
      description: 'Семена, удобрения и инструменты',
      icon: 'Sprout',
      category: 'Фермерство'
    },
    {
      id: 16,
      name: 'Новогодний набор',
      price: 399,
      description: 'Праздничные скины и декорации',
      icon: 'Gift',
      category: 'Праздники'
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">RUST SERVER</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-background border-l border-border shadow-2xl overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Корзина</h2>
                <div className="flex gap-2">
                  {cart.length > 0 && (
                    <Button variant="outline" size="sm" onClick={clearCart}>
                      <Icon name="Trash2" size={16} className="mr-2" />
                      Очистить
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="ShoppingCart" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Корзина пуста</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <Card key={item.id} className="p-4 bg-card border-border">
                        <div className="flex gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon name={item.icon as any} size={20} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                            <p className="text-primary font-bold">{item.price} ₽</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Icon name="Minus" size={12} />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                size="icon"
                                variant="outline"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Icon name="Plus" size={12} />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-7 w-7 ml-auto text-destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Icon name="Trash2" size={12} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Итого:</span>
                      <span className="text-2xl font-bold text-primary">{totalPrice} ₽</span>
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        const isAuthenticated = localStorage.getItem('steamAuthenticated');
                        if (isAuthenticated === 'true') {
                          setIsCartOpen(false);
                          navigate('/checkout', { state: { cart } });
                        } else {
                          navigate('/login');
                        }
                      }}
                    >
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

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
              <Card
                key={product.id}
                className="p-6 bg-card border-border hover-scale cursor-pointer transition-all hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleProductClick(product)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon name={product.icon as any} size={28} className="text-primary" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground ml-1">₽</span>
                  </div>
                  <Button 
                    className="hover-scale" 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </div>
              </Card>
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

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon name={selectedProduct?.icon as any} size={24} className="text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{selectedProduct?.name}</div>
                <div className="text-sm text-muted-foreground font-normal mt-1">
                  {selectedProduct?.description}
                </div>
              </div>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Детали привилегии
            </DialogDescription>
          </DialogHeader>
          
          {selectedProduct?.details && (
            <div className="space-y-6 mt-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  Бонусы
                </h3>
                <p className="text-muted-foreground pl-7">{selectedProduct.details.bonus}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Box" size={20} className="text-primary" />
                  Кит ресурсов
                </h3>
                <p className="text-muted-foreground pl-7">{selectedProduct.details.resources}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Cog" size={20} className="text-primary" />
                  Кит компонентов
                </h3>
                <p className="text-muted-foreground pl-7">{selectedProduct.details.components}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Crosshair" size={20} className="text-primary" />
                  Кит оружия
                </h3>
                <p className="text-muted-foreground pl-7">{selectedProduct.details.weapons}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Bomb" size={20} className="text-primary" />
                  Кит взрывчатки
                </h3>
                <p className="text-muted-foreground pl-7">{selectedProduct.details.explosives}</p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-primary">{selectedProduct.price}</span>
                  <span className="text-muted-foreground ml-1">₽</span>
                </div>
                <Button 
                  size="lg"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;