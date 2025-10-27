import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ShopHeaderProps {
  totalItems: number;
  onCartClick: () => void;
  onBackClick: () => void;
}

const ShopHeader = ({ totalItems, onCartClick, onBackClick }: ShopHeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">RUST SERVER</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={onCartClick}
              className="relative"
            >
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={onBackClick}
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShopHeader;
