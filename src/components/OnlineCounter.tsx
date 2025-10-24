import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const OnlineCounter = () => {
  const [online, setOnline] = useState(0);
  const [maxPlayers] = useState(150);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const simulatedOnline = Math.floor(Math.random() * 120) + 30;
    
    let current = 0;
    const increment = Math.ceil(simulatedOnline / 30);
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= simulatedOnline) {
        setOnline(simulatedOnline);
        setIsLoading(false);
        clearInterval(timer);
      } else {
        setOnline(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const percentage = (online / maxPlayers) * 100;

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Icon name="Users" size={32} className="text-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground">Игроков онлайн</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary tabular-nums">
                {isLoading ? '...' : online}
              </span>
              <span className="text-lg text-muted-foreground">/ {maxPlayers}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        Заполнено на {Math.round(percentage)}%
      </p>
    </Card>
  );
};

export default OnlineCounter;
