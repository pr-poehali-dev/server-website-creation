import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-center gap-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/rustica')}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              Rustica
            </Button>
            <div className="h-8 w-px bg-border" />
            <Button
              variant="ghost"
              onClick={() => navigate('/dayzica')}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              Dayzica
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Добро пожаловать!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите игровой проект и присоединяйтесь к нашему сообществу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card 
            onClick={() => navigate('/rustica')}
            className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
          >
            <div className="relative h-64 bg-gradient-to-br from-orange-900/30 to-red-900/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Flame" size={40} className="text-orange-500" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">Rustica</h2>
                <p className="text-orange-200 text-lg">Rust серверы</p>
              </div>
            </div>
            <div className="p-6 bg-card">
              <p className="text-muted-foreground mb-4">
                Присоединяйтесь к нашим Rust серверам с уникальными модификациями, регулярными вайпами и активным комьюнити
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Перейти к серверам</span>
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </Card>

          <Card 
            onClick={() => navigate('/dayzica')}
            className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
          >
            <div className="relative h-64 bg-gradient-to-br from-green-900/30 to-emerald-900/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Crosshair" size={40} className="text-green-500" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">Dayzica</h2>
                <p className="text-green-200 text-lg">DayZ серверы</p>
              </div>
            </div>
            <div className="p-6 bg-card">
              <p className="text-muted-foreground mb-4">
                Выживайте в постапокалиптическом мире DayZ на наших серверах с кастомными локациями и событиями
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Перейти к серверам</span>
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="text-muted-foreground">Онлайн игроков:</span>
                <span className="font-bold text-2xl text-primary">247</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Icon name="Server" size={20} className="text-primary" />
                <span className="text-muted-foreground">Активных серверов:</span>
                <span className="font-bold text-2xl text-primary">10</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
