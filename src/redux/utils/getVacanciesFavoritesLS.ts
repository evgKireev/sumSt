
export const getVacLS = () => {
  const data = localStorage.getItem('cart');
  const vacanciesFavorites = data ? JSON.parse(data) : [];
  return { vacanciesFavorites };
};