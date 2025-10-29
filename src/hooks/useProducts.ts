import { useEffect } from 'react';
import { useStore } from '@/store/useStore';

const API_URL = 'https://fakestoreapi.com/products';

export const useProducts = () => {
  const { setProducts, setLoading, setError } = useStore();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts, setLoading, setError]);
};
