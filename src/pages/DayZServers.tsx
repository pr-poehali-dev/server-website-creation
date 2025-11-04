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
    if (percentage >= 80) return { color: 'text-red-500', label: 'Высокая нагрузка' };
    if (percentage >= 50) return { color: 'text-yellow-500', label: 'Средняя нагрузка' };
    return { color: 'text-green-500', label: 'Свободно' };
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/dayzica')}
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-primary">Dayzica Servers</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Server" size={40} className="text-primary" />
              <h2 className="text-5xl font-bold">Список серверов</h2>
            </div>
            <p className="text-xl text-muted-foreground">Выберите сервер и начните играть!</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {dayzServers.map((server, index) => {
              const percentage = getOnlinePercentage(server.online, server.maxPlayers);
              const status = getOnlineStatus(percentage);
              
              return (
                <AccordionItem
                  key={server.id}
                  value={`server-${server.id}`}
                  className="border border-border rounded-lg overflow-hidden bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon name="Server" size={24} className="text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-bold">{server.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className={`flex items-center gap-1 text-sm ${status.color}`}>
                              <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                              {server.online}/{server.maxPlayers}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {status.label}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-4">
                      <p className="text-muted-foreground">{server.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="p-4 border-border bg-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Wifi" size={16} className="text-primary" />
                            <span className="font-semibold text-sm">IP адрес</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <code className="text-sm bg-background px-3 py-2 rounded flex-1 font-mono">
                              {server.ip}
                            </code>
                            <Button
                              size="sm"
                              variant={copiedId === server.id ? "default" : "outline"}
                              onClick={() => copyToClipboard(server.ip, server.id)}
                            >
                              <Icon 
                                name={copiedId === server.id ? "Check" : "Copy"} 
                                size={16} 
                              />
                            </Button>
                          </div>
                        </Card>

                        <Card className="p-4 border-border bg-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Calendar" size={16} className="text-primary" />
                            <span className="font-semibold text-sm">Расписание вайпов</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{server.wipeSchedule}</p>
                        </Card>

                        <Card className="p-4 border-border bg-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Map" size={16} className="text-primary" />
                            <span className="font-semibold text-sm">Название карты</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{server.mapName}</p>
                        </Card>

                        <Card className="p-4 border-border bg-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Users" size={16} className="text-primary" />
                            <span className="font-semibold text-sm">Онлайн</span>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              {server.online} / {server.maxPlayers} игроков
                            </p>
                            <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        </Card>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon name="Sparkles" size={16} className="text-primary" />
                          <span className="font-semibold text-sm">Особенности сервера</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {server.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="w-full mt-4" 
                        size="lg"
                        onClick={() => copyToClipboard(server.ip, server.id)}
                      >
                        <Icon name={copiedId === server.id ? "Check" : "Copy"} size={20} className="mr-2" />
                        {copiedId === server.id ? "IP скопирован!" : "Скопировать IP и подключиться"}
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <Card className="mt-8 p-6 bg-accent/30 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Как подключиться?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">1.</span>
                    <span>Откройте DayZ и перейдите в раздел "Серверы"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">2.</span>
                    <span>Нажмите на поиск и введите "Dayzica"</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">3.</span>
                    <span>Или используйте прямое подключение через IP адрес</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">4.</span>
                    <span>Нажмите "Подключиться" и начните выживать!</span>
                  </li>
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DayZServers;
