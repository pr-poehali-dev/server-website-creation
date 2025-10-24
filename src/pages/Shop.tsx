import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
  category: string;
}

const Shop = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: 1,
      name: 'VIP статус',
      price: 299,
      description: 'Эксклюзивные привилегии на сервере на 30 дней',
      icon: 'Crown',
      category: 'Премиум'
    },
    {
      id: 2,
      name: 'Стартовый набор',
      price: 99,
      description: 'Оружие, ресурсы и броня для быстрого старта',
      icon: 'Package',
      category: 'Наборы'
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
      name: 'Набор оружия',
      price: 199,
      description: 'AK-47, болтовка, дробовик и патроны',
      icon: 'Swords',
      category: 'Оружие'
    },
    {
      id: 5,
      name: 'Приватная территория',
      price: 399,
      description: 'Защищённая зона для постройки на 30 дней',
      icon: 'Home',
      category: 'Премиум'
    },
    {
      id: 6,
      name: 'Набор строителя',
      price: 179,
      description: 'Всё для быстрой постройки базы',
      icon: 'Hammer',
      category: 'Наборы'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">RUST SERVER</h1>
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
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="ShoppingBag" size={40} className="text-primary" />
              <h2 className="text-5xl font-bold">Магазин товаров</h2>
            </div>
            <p className="text-xl text-muted-foreground">Улучши свой игровой опыт</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="p-6 bg-card border-border hover-scale cursor-pointer transition-all hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <Button className="hover-scale">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary/20 rounded-2xl text-center">
            <Icon name="Info" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Безопасные платежи</h3>
            <p className="text-muted-foreground">
              Все товары доставляются автоматически после оплаты. Поддержка 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
