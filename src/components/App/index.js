import AppRoutes from '../../utils/AppRoutes';
import useCategoryProvider, { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import useProductsProvider, { ProductsContext } from '../../utils/providers/useProductsProvider';

import './styles.scss';

function App() {
  const dataCategoryContext = useCategoryProvider();
  const dataProductsContext = useProductsProvider();
  return (
    <div className="app">
      <CategoriesContext.Provider value={dataCategoryContext}>
        <ProductsContext.Provider value={dataProductsContext}>
          <AppRoutes />
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
