import AppRoutes from '../../utils/AppRoutes';
import useCategoryProvider, { CategoriesContext } from '../../utils/providers/useCategoriesProvider';
import './styles.scss';

function App() {
  const dataCategoryContext = useCategoryProvider();
  return (
    <div className="app">
      <CategoriesContext.Provider value={dataCategoryContext}>
        <AppRoutes />
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
