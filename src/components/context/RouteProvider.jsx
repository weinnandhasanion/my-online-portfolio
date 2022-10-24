import { createContext, useContext, useState } from 'react';
import { HELLO_PAGE } from 'util/constants';

export const RouteContext = createContext();

export const useRouteContext = () => useContext(RouteContext);

const RouteProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState(HELLO_PAGE);

  const setPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <RouteContext.Provider value={{ selectedPage, setPage }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
