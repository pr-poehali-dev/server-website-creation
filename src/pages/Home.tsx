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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-500" />
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800')] bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-500" />
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

        <div className="mt-16 text-center space-y-6">
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
          
          <div>
            <Button
              size="lg"
              onClick={() => navigate('/login')}
              className="gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 256 259" fill="currentColor">
                <path d="M127.779 0C62.824 0 9.46 48.896.637 111.005l68.45 28.302c5.791-3.948 12.795-6.256 20.326-6.256 1.235 0 2.446.067 3.642.19l30.465-44.142v-.618c0-27.798 22.566-50.364 50.364-50.364 27.798 0 50.364 22.566 50.364 50.364 0 27.797-22.566 50.363-50.364 50.363h-1.16l-43.388 30.992c.123 1.091.19 2.2.19 3.323 0 20.052-16.267 36.319-36.318 36.319-17.612 0-32.351-12.566-35.714-29.215L1.2 157.423C13.775 217.06 66.208 262 127.779 262c70.319 0 127.363-57.044 127.363-127.363C255.142 64.318 198.098 7.274 127.779 0zm-80.43 184.928l-15.91-6.577c2.811 5.838 7.686 10.706 13.933 13.448 13.495 5.925 29.263-.803 35.188-14.298 2.87-6.54 2.87-13.742 0-20.283-2.869-6.54-8.328-11.547-14.868-14.417-6.517-2.846-13.49-2.8-19.653-.444l16.458 6.81c9.952 4.366 14.437 16.033 10.07 26.007-4.367 9.952-16.033 14.437-26.007 10.07l-.211-.316zm153.095-96.454c0-18.531-15.042-33.573-33.573-33.573-18.531 0-33.573 15.042-33.573 33.573 0 18.531 15.042 33.573 33.573 33.573 18.531 0 33.573-15.042 33.573-33.573zm-58.806 0c0-13.93 11.303-25.233 25.233-25.233 13.93 0 25.233 11.303 25.233 25.233 0 13.93-11.303 25.233-25.233 25.233-13.93 0-25.233-11.303-25.233-25.233z"/>
              </svg>
              Войти через Steam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;