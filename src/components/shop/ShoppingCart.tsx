import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/data/shopProducts';

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  cart: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onClearCart: () => void;
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const ShoppingCart = ({
  isOpen,
  cart,
  totalPrice,
  onClose,
  onClearCart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: ShoppingCartProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-background border-l border-border shadow-2xl overflow-y-auto animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Корзина</h2>
            <div className="flex gap-2">
              {cart.length > 0 && (
                <Button variant="outline" size="sm" onClick={onClearCart}>
                  <Icon name="Trash2" size={16} className="mr-2" />
                  Очистить
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onClose}>
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Корзина пуста</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <Card key={item.id} className="p-4 bg-card border-border">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                        <p className="text-primary font-bold">{item.price} ₽</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                          >
                            <Icon name="Minus" size={12} />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            <Icon name="Plus" size={12} />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-7 w-7 ml-auto text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Icon name="Trash2" size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{totalPrice} ₽</span>
                </div>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={onCheckout}
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
