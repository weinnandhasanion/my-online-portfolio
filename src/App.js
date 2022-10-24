import {
  RoutesGenerator,
  RouteProvider,
  ThemeProvider,
} from 'components/context';
import { Footer, Navbar } from 'components/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from 'util/routes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteProvider>
          <Navbar />
          <RoutesGenerator routes={routes} />
          <Footer />
        </RouteProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
