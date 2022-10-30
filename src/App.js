import { ThemeProvider } from 'components/context';
import { Footer, Navbar } from 'components/layout';
import { Outlet } from 'react-router';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
