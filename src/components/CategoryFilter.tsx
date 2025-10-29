import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
  { value: 'electronics', label: 'Electronics' },
  { value: 'jewelery', label: 'Jewelry' },
];

export const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(category.value)}
          className="transition-all"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};
