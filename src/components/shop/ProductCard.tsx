import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/data/shopProducts';

interface ProductCardProps {
  product: Product;
  index: number;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, index, onProductClick, onAddToCart }: ProductCardProps) => {
  return (
    <Card
      className="p-6 bg-card border-border hover-scale cursor-pointer transition-all hover:border-primary animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onProductClick(product)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
          <Icon name={product.icon as any} size={28} className="text-primary" />
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
          {product.category}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">
        {product.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <span className="text-3xl font-bold text-primary">{product.price}</span>
          <span className="text-muted-foreground ml-1">₽</span>
        </div>
        <Button 
          className="hover-scale" 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
