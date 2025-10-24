import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import OnlineCounter from '@/components/OnlineCounter';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">RUST SERVER</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'rules', label: 'Правила', icon: 'Shield' },
                { id: 'wipes', label: 'Вайпы', icon: 'Calendar' },
                { id: 'start', label: 'Как начать', icon: 'Rocket' },
                { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 RUST SERVER. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;