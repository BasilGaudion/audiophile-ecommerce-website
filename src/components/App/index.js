import AppRoutes from '../../utils/AppRoutes';
import useCategoryProvider, { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import useProductsProvider, { ProductsContext } from '../../utils/providers/useProductsProvider';
import useModalProvider, { ModalContext } from '../../utils/providers/useModalProvider';
import useBasketProvider, { BasketContext } from '../../utils/providers/useBasketProvider';

import './styles.scss';

function App() {
  const dataCategoryContext = useCategoryProvider();
  const dataProductsContext = useProductsProvider();
  const dataModalContext = useModalProvider();
  const dataBasketContext = useBasketProvider();

  return (
    <div className="app">
      <CategoriesContext.Provider value={dataCategoryContext}>
        <ProductsContext.Provider value={dataProductsContext}>
          <BasketContext.Provider value={dataBasketContext}>
            <ModalContext.Provider value={dataModalContext}>
              <AppRoutes />
            </ModalContext.Provider>
          </BasketContext.Provider>
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
