import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { dayzServers } from '@/data/dayzServers';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const DayZServers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (ip: string, serverId: number) => {
    navigator.clipboard.writeText(ip);
    setCopiedId(serverId);
    toast({
      title: "IP скопирован!",
      description: "IP адрес сервера скопирован в буфер обмена",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getOnlinePercentage = (online: number, max: number) => {
    return (online / max) * 100;
  };

  const getOnlineStatus = (percentage: number) => {
    if (percentage >= 80) return { color: 'text-red-500', label: 'Почти заполнен' };
    if (percentage >= 50) return { color: 'text-yellow-500', label: 'Средняя заполненность' };
    return { color: 'text-green-500', label: 'Есть места' };
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Dayzica Servers</h1>
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
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Серверы DayZ</h2>
            <p className="text-muted-foreground text-lg">
              Выберите сервер и начните выживать в постапокалиптическом мире
            </p>
          </div>

          <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="text-primary mt-1" size={20} />
              <div>
                <h3 className="font-semibold mb-2">Как подключиться к серверу?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Откройте список серверов в DayZ, нажмите на поиск и введите название "Dayzica". 
                  Или используйте прямое подключение через IP адрес (нажмите на кнопку "Копировать IP").
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Найдите сервер в списке или используйте IP</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Нажмите "Подключиться" и начните играть</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {dayzServers.map((server) => {
                const percentage = getOnlinePercentage(server.online, server.maxPlayers);
                const status = getOnlineStatus(percentage);
                
                return (
                  <AccordionItem key={server.id} value={`server-${server.id}`} className="border-0">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center justify-between w-full pr-4">
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg p-3 min-w-[80px]">
                              <Icon name="Server" className="text-primary mb-1" size={24} />
                              <span className="text-xs text-muted-foreground">Сервер #{server.id}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-bold mb-1">{server.name}</h3>
                              <p className="text-sm text-muted-foreground">{server.description}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <Badge variant="outline" className="gap-1">
                                  <Icon name="Map" size={12} />
                                  {server.mapName}
                                </Badge>
                                <div className={`flex items-center gap-1 text-sm ${status.color}`}>
                                  <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                  {server.online}/{server.maxPlayers}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-6 pb-6 pt-2 space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Globe" size={16} className="text-primary" />
                                <span className="text-muted-foreground">IP адрес:</span>
                                <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                                  {server.ip}
                                </code>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Calendar" size={16} className="text-primary" />
                                <span className="text-muted-foreground">Вайпы:</span>
                                <span className="font-medium">{server.wipeSchedule}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Users" size={16} className="text-primary" />
                                <span className="text-muted-foreground">Онлайн:</span>
                                <span className={`font-medium ${status.color}`}>
                                  {server.online}/{server.maxPlayers} ({status.label})
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm font-medium flex items-center gap-2">
                                <Icon name="Star" size={16} className="text-primary" />
                                Особенности сервера:
                              </p>
                              <ul className="space-y-1">
                                {server.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <Icon name="Check" size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <Button 
                              onClick={() => copyToClipboard(server.ip, server.id)}
                              variant={copiedId === server.id ? "default" : "outline"}
                              className="gap-2"
                            >
                              <Icon name={copiedId === server.id ? "Check" : "Copy"} size={16} />
                              {copiedId === server.id ? "Скопировано!" : "Копировать IP"}
                            </Button>
                            <Button variant="default" className="gap-2">
                              <Icon name="PlayCircle" size={16} />
                              Подключиться
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <Card className="mt-8 p-6 bg-muted/30">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Нужна помощь?</h3>
              <p className="text-muted-foreground mb-4">
                Присоединяйтесь к нашему Discord серверу для получения поддержки и общения с другими игроками
              </p>
              <Button className="gap-2">
                <Icon name="MessageCircle" size={16} />
                Открыть Discord
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DayZServers;
