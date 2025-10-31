// Centralized category configuration
export const categories = {
  DAIRY: {
    name: 'Dairy Product',
    query: 'Dairy',
    path: '/product?category=Dairy',
    items: ['Milk', 'Cheese', 'Yogurt', 'Ghee', 'Paneer']
  },
  SWEETS: {
    name: 'Sweets',
    query: 'Sweets',
    path: '/product?category=Sweets',
    items: ['Gulab Jamun', 'Rasgulla', 'Barfi', 'Jalebi', 'Rasmalai']
  },
  BABY: {
    name: 'Baby Nutrition',
    query: 'Baby+Nutrition',
    path: '/product?category=Baby+Nutrition',
    items: ['Baby Cereal', 'Formula Milk', 'Baby Food']
  },
  BEVERAGES: {
    name: 'Beverages',
    query: 'Beverages',
    path: '/product?category=Beverages',
    items: ['Lassi', 'Buttermilk', 'Falooda']
  },
  ICE_CREAM: {
    name: 'Ice Cream',
    query: 'Ice+Cream',
    path: '/product?category=Ice+Cream',
    items: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch']
  }
};

// Helper function to get category by name
export const getCategoryByName = (name) => {
  return Object.values(categories).find(cat => cat.name === name);
};

// Helper function to get product URL
export const getProductUrl = (categoryName, productName) => {
  const category = getCategoryByName(categoryName);
  if (!category) return '#';
  return `${category.path.split('?')[0]}?category=${category.query}&product=${encodeURIComponent(productName)}`;
};
