import AppRoutes from '../../utils/AppRoutes';
import useCategoryProvider, { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import useProductsProvider, { ProductsContext } from '../../utils/providers/useProductsProvider';
import useModalProvider, { ModalContext } from '../../utils/providers/useModalProvider';

import './styles.scss';

function App() {
  const dataCategoryContext = useCategoryProvider();
  const dataProductsContext = useProductsProvider();
  const dataModalContext = useModalProvider();

  return (
    <div className="app">
      <CategoriesContext.Provider value={dataCategoryContext}>
        <ProductsContext.Provider value={dataProductsContext}>
          <ModalContext.Provider value={dataModalContext}>
            <AppRoutes />
          </ModalContext.Provider>
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
