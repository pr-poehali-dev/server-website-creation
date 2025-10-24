import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface CartItem {
  id: number;
  name: string;
  price: number;
  icon: string;
  quantity: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = (location.state?.cart as CartItem[]) || [];
  
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    discordTag: '',
    promoCode: ''
  });

  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const applyPromo = () => {
    if (formData.promoCode.toLowerCase() === 'rust2024') {
      setPromoApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заказ оформлен! В реальном проекте здесь будет переход на оплату.');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Icon name="ShoppingCart" size={64} className="text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары для оформления заказа</p>
          <Button onClick={() => navigate('/shop')}>
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Вернуться в магазин
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">RUST SERVER</h1>
            <Button
              variant="ghost"
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад в магазин
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="CreditCard" size={40} className="text-primary" />
              <h2 className="text-4xl font-bold">Оформление заказа</h2>
            </div>
            <p className="text-muted-foreground">Заполните данные для получения товаров</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 bg-card border-border mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="User" size={20} className="text-primary" />
                  Ваши данные
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nickname">Игровой никнейм *</Label>
                    <Input
                      id="nickname"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleInputChange}
                      placeholder="Введите ник в игре"
                      required
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Товары будут отправлены на этот игровой аккаунт
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="discordTag">Discord (необязательно)</Label>
                    <Input
                      id="discordTag"
                      name="discordTag"
                      value={formData.discordTag}
                      onChange={handleInputChange}
                      placeholder="username#1234"
                      className="mt-1"
                    />
                  </div>
                </form>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Tag" size={20} className="text-primary" />
                  Промокод
                </h3>
                <div className="flex gap-2">
                  <Input
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Введите промокод"
                    disabled={promoApplied}
                  />
                  <Button
                    type="button"
                    onClick={applyPromo}
                    disabled={promoApplied}
                    variant="outline"
                  >
                    {promoApplied ? 'Применён' : 'Применить'}
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-primary mt-2 flex items-center gap-1">
                    <Icon name="CheckCircle" size={16} />
                    Скидка 10% применена!
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  Попробуйте промокод: RUST2024
                </p>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border sticky top-24">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="ShoppingBag" size={20} className="text-primary" />
                  Ваш заказ
                </h3>

                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-border last:border-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                      </div>
                      <p className="font-semibold text-sm">{item.price * item.quantity} ₽</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Подытог:</span>
                    <span>{subtotal} ₽</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-primary">Скидка 10%:</span>
                      <span className="text-primary">-{discount.toFixed(0)} ₽</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{total.toFixed(0)} ₽</span>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!formData.nickname || !formData.email}
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Перейти к оплате
                </Button>

                <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    <Icon name="Lock" size={12} className="inline mr-1" />
                    Безопасная оплата через защищённое соединение
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
