import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import OnlineCounter from '@/components/OnlineCounter';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Rustica = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
              >
                <Icon name="Home" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-primary">Rustica</h1>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <DropdownMenu open={isHomeMenuOpen} onOpenChange={setIsHomeMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    <Icon name="Info" size={16} />
                    Информация
                    <Icon name="ChevronDown" size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => {
                    scrollToSection('rules');
                    setIsHomeMenuOpen(false);
                  }}>
                    <Icon name="Shield" size={16} className="mr-2" />
                    Правила сервера
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    scrollToSection('wipes');
                    setIsHomeMenuOpen(false);
                  }}>
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Расписание вайпов
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    scrollToSection('start');
                    setIsHomeMenuOpen(false);
                  }}>
                    <Icon name="Rocket" size={16} className="mr-2" />
                    Как начать играть
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    scrollToSection('contacts');
                    setIsHomeMenuOpen(false);
                  }}>
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Контакты
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <button
                onClick={() => navigate('/shop')}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >Магазин</button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/servers')}
                className="flex items-center gap-2"
              >
                <Icon name="Server" size={16} />
                Серверы
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/login')}
                className="flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 256 259" fill="currentColor">
                  <path d="M127.779 0C62.824 0 9.46 48.896.637 111.005l68.45 28.302c5.791-3.948 12.795-6.256 20.326-6.256 1.235 0 2.446.067 3.642.19l30.465-44.142v-.618c0-27.798 22.566-50.364 50.364-50.364 27.798 0 50.364 22.566 50.364 50.364 0 27.797-22.566 50.363-50.364 50.363h-1.16l-43.388 30.992c.123 1.091.19 2.2.19 3.323 0 20.052-16.267 36.319-36.318 36.319-17.612 0-32.351-12.566-35.714-29.215L1.2 157.423C13.775 217.06 66.208 262 127.779 262c70.319 0 127.363-57.044 127.363-127.363C255.142 64.318 198.098 7.274 127.779 0zm-80.43 184.928l-15.91-6.577c2.811 5.838 7.686 10.706 13.933 13.448 13.495 5.925 29.263-.803 35.188-14.298 2.87-6.54 2.87-13.742 0-20.283-2.869-6.54-8.328-11.547-14.868-14.417-6.517-2.846-13.49-2.8-19.653-.444l16.458 6.81c9.952 4.366 14.437 16.033 10.07 26.007-4.367 9.952-16.033 14.437-26.007 10.07l-.211-.316zm153.095-96.454c0-18.531-15.042-33.573-33.573-33.573-18.531 0-33.573 15.042-33.573 33.573 0 18.531 15.042 33.573 33.573 33.573 18.531 0 33.573-15.042 33.573-33.573zm-58.806 0c0-13.93 11.303-25.233 25.233-25.233 13.93 0 25.233 11.303 25.233 25.233 0 13.93-11.303 25.233-25.233 25.233-13.93 0-25.233-11.303-25.233-25.233z"/>
                </svg>
                Войти
              </Button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate('/servers')}
              >
                <Icon name="Server" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/login')}
              >
                <svg className="w-4 h-4" viewBox="0 0 256 259" fill="currentColor">
                  <path d="M127.779 0C62.824 0 9.46 48.896.637 111.005l68.45 28.302c5.791-3.948 12.795-6.256 20.326-6.256 1.235 0 2.446.067 3.642.19l30.465-44.142v-.618c0-27.798 22.566-50.364 50.364-50.364 27.798 0 50.364 22.566 50.364 50.364 0 27.797-22.566 50.363-50.364 50.363h-1.16l-43.388 30.992c.123 1.091.19 2.2.19 3.323 0 20.052-16.267 36.319-36.318 36.319-17.612 0-32.351-12.566-35.714-29.215L1.2 157.423C13.775 217.06 66.208 262 127.779 262c70.319 0 127.363-57.044 127.363-127.363C255.142 64.318 198.098 7.274 127.779 0zm-80.43 184.928l-15.91-6.577c2.811 5.838 7.686 10.706 13.933 13.448 13.495 5.925 29.263-.803 35.188-14.298 2.87-6.54 2.87-13.742 0-20.283-2.869-6.54-8.328-11.547-14.868-14.417-6.517-2.846-13.49-2.8-19.653-.444l16.458 6.81c9.952 4.366 14.437 16.033 10.07 26.007-4.367 9.952-16.033 14.437-26.007 10.07l-.211-.316zm153.095-96.454c0-18.531-15.042-33.573-33.573-33.573-18.531 0-33.573 15.042-33.573 33.573 0 18.531 15.042 33.573 33.573 33.573 18.531 0 33.573-15.042 33.573-33.573zm-58.806 0c0-13.93 11.303-25.233 25.233-25.233 13.93 0 25.233 11.303 25.233 25.233 0 13.93-11.303 25.233-25.233 25.233-13.93 0-25.233-11.303-25.233-25.233z"/>
                </svg>
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icon name="Menu" size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => scrollToSection('home')}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                        activeSection === 'home' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon name="Info" size={20} />
                      Информация
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/shop');
                      }}
                      className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary text-muted-foreground p-3 rounded-lg"
                    >
                      <Icon name="ShoppingBag" size={20} />
                      Товары
                    </button>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/servers');
                      }}
                      className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary text-muted-foreground p-3 rounded-lg"
                    >
                      <Icon name="Server" size={20} />
                      Серверы
                    </button>
                    <Separator />
                    <button
                      onClick={() => {
                        scrollToSection('rules');
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                        activeSection === 'rules' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon name="Shield" size={20} />
                      Правила
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('wipes');
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                        activeSection === 'wipes' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon name="Calendar" size={20} />
                      Вайпы
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('start');
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                        activeSection === 'start' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon name="Rocket" size={20} />
                      Как начать
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('contacts');
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                        activeSection === 'contacts' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                      }`}
                    >
                      <Icon name="MessageCircle" size={20} />
                      Контакты
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&h=1080&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
                  RUSTICA
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
                  Лучшие Rust серверы с уникальными модами и активным комьюнити
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <OnlineCounter />
                <Card className="inline-block px-6 py-3 bg-card/50 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <Icon name="Server" className="text-primary" size={20} />
                    <span className="text-muted-foreground">Серверов:</span>
                    <span className="font-bold text-xl text-primary">5</span>
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-8">
                <Button size="lg" className="gap-2" onClick={() => navigate('/servers')}>
                  <Icon name="Server" size={20} />
                  Список серверов
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 backdrop-blur hover:bg-white/20" onClick={() => scrollToSection('start')}>
                  <Icon name="Rocket" size={20} />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 backdrop-blur hover:bg-white/20" onClick={() => navigate('/shop')}>
                  <Icon name="ShoppingBag" size={20} />
                  Магазин
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="rules" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Правила сервера</h2>
            <Card className="p-8 space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="text-primary" />
                      Общие правила
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2 pl-9">
                    <p>• Запрещено использование читов, багов и эксплойтов</p>
                    <p>• Уважайте других игроков в чате</p>
                    <p>• Не спамьте и не флудите в общем чате</p>
                    <p>• Запрещена реклама сторонних ресурсов</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Users" className="text-primary" />
                      Игровой процесс
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2 pl-9">
                    <p>• Гриферство разрешено в рамках игровой механики</p>
                    <p>• Рейды и PvP являются неотъемлемой частью игры</p>
                    <p>• Постройка в чужих базах запрещена</p>
                    <p>• Тимкилл наказывается баном</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-3">
                      <Icon name="Ban" className="text-primary" />
                      Наказания
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2 pl-9">
                    <p>• Первое нарушение - предупреждение</p>
                    <p>• Второе нарушение - мут/кик</p>
                    <p>• Третье нарушение - бан на 24 часа</p>
                    <p>• Использование читов - перманентный бан</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </section>

        <section id="wipes" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Расписание вайпов</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Полный вайп</h3>
                </div>
                <div className="space-y-2 pl-[60px]">
                  <p className="text-muted-foreground">Каждый первый четверг месяца</p>
                  <p className="text-sm text-muted-foreground">• Сброс карты</p>
                  <p className="text-sm text-muted-foreground">• Сброс всех построек</p>
                  <p className="text-sm text-muted-foreground">• Сброс чертежей (BP)</p>
                </div>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Вайп карты</h3>
                </div>
                <div className="space-y-2 pl-[60px]">
                  <p className="text-muted-foreground">Каждый четверг</p>
                  <p className="text-sm text-muted-foreground">• Сброс карты</p>
                  <p className="text-sm text-muted-foreground">• Сброс всех построек</p>
                  <p className="text-sm text-muted-foreground">• Чертежи сохраняются</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="start" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Как начать играть</h2>
            <div className="grid gap-6">
              <Card className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Купите Rust в Steam</h3>
                    <p className="text-muted-foreground">
                      Rust доступен для покупки в Steam. Убедитесь, что ваш компьютер соответствует системным требованиям игры.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Подключитесь к серверу</h3>
                    <p className="text-muted-foreground">
                      Откройте консоль в игре (F1) и введите команду:
                    </p>
                    <code className="block bg-muted p-3 rounded text-sm">
                      client.connect IP:PORT
                    </code>
                    <p className="text-sm text-muted-foreground">
                      IP адреса серверов можно найти в разделе "Серверы"
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Начните выживать!</h3>
                    <p className="text-muted-foreground">
                      Соберите ресурсы, постройте базу и защищайтесь от других игроков. Присоединяйтесь к нашему Discord для поиска тиммейтов!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <Card className="p-8 space-y-6">
              <p className="text-muted-foreground text-lg">
                Присоединяйтесь к нашему сообществу и будьте в курсе всех новостей!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Discord
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Send" size={20} />
                  Telegram
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Youtube" size={20} />
                  YouTube
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rustica;