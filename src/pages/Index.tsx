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

const Index = () => {
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
            <h1 className="text-2xl font-bold text-primary">Rustica</h1>
            
            <div className="hidden lg:flex items-center gap-4">
              <DropdownMenu open={isHomeMenuOpen} onOpenChange={setIsHomeMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    <Icon name="Home" size={16} />
                    Главная
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
              >
                <Icon name="ShoppingBag" size={16} />
                Товары
              </button>
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
                      <Icon name="Home" size={20} />
                      Главная
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
                    <Separator />
                    {[
                      { id: 'rules', label: 'Правила', icon: 'Shield' },
                      { id: 'wipes', label: 'Вайпы', icon: 'Calendar' },
                      { id: 'start', label: 'Как начать', icon: 'Rocket' },
                      { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary p-3 rounded-lg ${
                          activeSection === item.id ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                        }`}
                      >
                        <Icon name={item.icon as any} size={20} />
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/21c8730d-c1be-4621-b2f4-39fac5e27af6/files/f4c1a06a-75bc-4e99-b76f-5c8958bf8868.jpg" 
              alt="Rust Server" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
              <div className="p-12">
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Добро пожаловать</h2>
                <p className="text-xl text-muted-foreground mb-6">Лучший Rust сервер для выживания</p>
                <Button size="lg" className="hover-scale">
                  <Icon name="Gamepad2" className="mr-2" size={20} />
                  Начать играть
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <OnlineCounter />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover-scale cursor-pointer bg-card border-border transition-all hover:border-primary">
              <Icon name="Users" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Активное сообщество</h3>
              <p className="text-muted-foreground">Играй с друзьями и новыми знакомыми</p>
            </Card>
            <Card className="p-6 hover-scale cursor-pointer bg-card border-border transition-all hover:border-primary">
              <Icon name="Zap" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Стабильная работа</h3>
              <p className="text-muted-foreground">Без лагов и вылетов 24/7</p>
            </Card>
            <Card className="p-6 hover-scale cursor-pointer bg-card border-border transition-all hover:border-primary">
              <Icon name="Trophy" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Честная игра</h3>
              <p className="text-muted-foreground">Активная администрация против читеров</p>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section id="rules" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Shield" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Правила сервера</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold">1. Запрещены читы и эксплойты</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Использование любых программ для получения преимущества, а также эксплуатация багов игры строго запрещена. Нарушение карается перманентным баном.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold">2. Уважение к игрокам</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Запрещены оскорбления, токсичное поведение, расизм и дискриминация. Соблюдайте культуру общения в чате и голосовом.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold">3. Запрет на гриф новичков</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Убийство игроков с деревянными домами и новичков в пляжной зоне запрещено. Даём всем равные условия для старта.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold">4. Лимит на команды</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Максимальный размер команды — 5 человек. Зергинг с альянсами запрещён.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator />

      <section id="wipes" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Calendar" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Расписание вайпов</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="RefreshCw" size={24} className="text-primary" />
                <h3 className="text-2xl font-semibold">Карта</h3>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">Каждый четверг</p>
              <p className="text-muted-foreground">в 18:00 МСК</p>
            </Card>
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Trash2" size={24} className="text-primary" />
                <h3 className="text-2xl font-semibold">Полный вайп</h3>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">Первый четверг месяца</p>
              <p className="text-muted-foreground">в 18:00 МСК</p>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section id="start" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Rocket" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Как начать играть</h2>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Установи Rust</h3>
                <p className="text-muted-foreground">Купи и установи игру Rust через Steam</p>
              </div>
            </Card>
            <Card className="p-6 bg-card border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Найди наш сервер</h3>
                <p className="text-muted-foreground">Открой клиент Rust → вкладка "Играть" → поиск "RUST SERVER"</p>
              </div>
            </Card>
            <Card className="p-6 bg-card border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Подключись и играй</h3>
                <p className="text-muted-foreground">Нажми "Подключиться" и начинай выживать!</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="MessageCircle" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover-scale cursor-pointer transition-all hover:border-primary">
              <Icon name="MessageSquare" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discord</h3>
              <p className="text-muted-foreground mb-4">Присоединяйся к нашему Discord-серверу</p>
              <Button variant="outline" className="w-full">
                Перейти в Discord
              </Button>
            </Card>
            <Card className="p-6 bg-card border-border hover-scale cursor-pointer transition-all hover:border-primary">
              <Icon name="Send" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telegram</h3>
              <p className="text-muted-foreground mb-4">Следи за новостями в Telegram</p>
              <Button variant="outline" className="w-full">
                Открыть Telegram
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p>© 2024 RUST SERVER. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;