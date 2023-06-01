import { createRoot } from 'react-dom/client';
import App from 'src/components/App';

const rootReactElement = <App />;

const rootReactContainer = createRoot(document.getElementById('root'));

rootReactContainer.render(rootReactElement);
