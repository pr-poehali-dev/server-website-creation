import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/data/shopProducts';

interface PrivilegeDialogProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const PrivilegeDialog = ({ product, onClose, onAddToCart }: PrivilegeDialogProps) => {
  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Icon name={product?.icon as any} size={24} className="text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">{product?.name}</div>
              <div className="text-sm text-muted-foreground font-normal mt-1">
                {product?.description}
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Детали привилегии
          </DialogDescription>
        </DialogHeader>
        
        {product?.details && (
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Award" size={20} className="text-primary" />
                Бонусы
              </h3>
              <p className="text-muted-foreground pl-7">{product.details.bonus}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Box" size={20} className="text-primary" />
                Кит ресурсов
              </h3>
              <p className="text-muted-foreground pl-7">{product.details.resources}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Cog" size={20} className="text-primary" />
                Кит компонентов
              </h3>
              <p className="text-muted-foreground pl-7">{product.details.components}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Crosshair" size={20} className="text-primary" />
                Кит оружия
              </h3>
              <p className="text-muted-foreground pl-7">{product.details.weapons}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Bomb" size={20} className="text-primary" />
                Кит взрывчатки
              </h3>
              <p className="text-muted-foreground pl-7">{product.details.explosives}</p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-muted-foreground ml-1">₽</span>
              </div>
              <Button 
                size="lg"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PrivilegeDialog;
