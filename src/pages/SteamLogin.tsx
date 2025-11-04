import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const SteamLogin = () => {
  const navigate = useNavigate();

  const handleSteamLogin = () => {
    alert('В реальном проекте здесь будет переход на страницу авторизации Steam OpenID');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" onClick={() => navigate('/')}>
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад
        </Button>
      </div>

      <Card className="w-full max-w-md p-8 bg-card border-border animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Icon name="User" size={40} className="text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Вход на сервер</h1>
          <p className="text-muted-foreground">
            Войдите через Steam для доступа к личному кабинету
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            className="w-full h-14 text-lg bg-[#171a21] hover:bg-[#1b2838] text-white" 
            onClick={handleSteamLogin}
          >
            <svg 
              className="w-6 h-6 mr-3" 
              viewBox="0 0 256 259" 
              fill="currentColor"
            >
              <path d="M127.779 0C62.824 0 9.46 48.896.637 111.005l68.45 28.302c5.791-3.948 12.795-6.256 20.326-6.256 1.235 0 2.446.067 3.642.19l30.465-44.142v-.618c0-27.798 22.566-50.364 50.364-50.364 27.798 0 50.364 22.566 50.364 50.364 0 27.797-22.566 50.363-50.364 50.363h-1.16l-43.388 30.992c.123 1.091.19 2.2.19 3.323 0 20.052-16.267 36.319-36.318 36.319-17.612 0-32.351-12.566-35.714-29.215L1.2 157.423C13.775 217.06 66.208 262 127.779 262c70.319 0 127.363-57.044 127.363-127.363C255.142 64.318 198.098 7.274 127.779 0zm-80.43 184.928l-15.91-6.577c2.811 5.838 7.686 10.706 13.933 13.448 13.495 5.925 29.263-.803 35.188-14.298 2.87-6.54 2.87-13.742 0-20.283-2.869-6.54-8.328-11.547-14.868-14.417-6.517-2.846-13.49-2.8-19.653-.444l16.458 6.81c9.952 4.366 14.437 16.033 10.07 26.007-4.367 9.952-16.033 14.437-26.007 10.07l-.211-.316zm153.095-96.454c0-18.531-15.042-33.573-33.573-33.573-18.531 0-33.573 15.042-33.573 33.573 0 18.531 15.042 33.573 33.573 33.573 18.531 0 33.573-15.042 33.573-33.573zm-58.806 0c0-13.93 11.303-25.233 25.233-25.233 13.93 0 25.233 11.303 25.233 25.233 0 13.93-11.303 25.233-25.233 25.233-13.93 0-25.233-11.303-25.233-25.233z"/>
            </svg>
            Войти через Steam
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Зачем нужен вход?</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Icon name="ShoppingBag" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">История покупок</p>
                <p className="text-xs text-muted-foreground">Просматривайте свои заказы</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Icon name="Package" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Автоматическая доставка</p>
                <p className="text-xs text-muted-foreground">Покупки сразу на ваш аккаунт</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Icon name="Crown" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Управление привилегиями</p>
                <p className="text-xs text-muted-foreground">Отслеживайте статус VIP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
            <Icon name="Lock" size={12} />
            Мы не получаем доступ к вашему паролю Steam
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SteamLogin;