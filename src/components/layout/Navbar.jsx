import { memo } from 'react';
import { useRouteContext } from 'components/context';
import { Link } from 'react-router-dom';
import { Box, Icon, chakra } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

import {
  CONTACT_PAGE,
  HELLO_PAGE,
  EXPERIENCE_PAGE,
  SKILLS_PAGE,
  WORKS_PAGE,
} from 'util/constants';

const pages = [
  HELLO_PAGE,
  SKILLS_PAGE,
  WORKS_PAGE,
  EXPERIENCE_PAGE,
  CONTACT_PAGE,
];

const NavbarItem = ({ page }) => {
  const { selectedPage, setPage } = useRouteContext();

  return (
    <chakra.li sx={{ p: '10px', listStyleType: 'none' }}>
      <Link
        onClick={() => setPage(page)}
        to={page === HELLO_PAGE ? '/' : `/${page}`}
        id={`list-${page}`}
      >
        <chakra.span color={selectedPage === page ? 'quinary' : 'secondary'}>
          {page.toUpperCase()}
        </chakra.span>
      </Link>
    </chakra.li>
  );
};

const Navbar = () => {
  return (
    <chakra.nav
      sx={{
        w: '100%',
        m: 'auto',
        h: 'auto',
        userSelect: 'none',
        backgroundColor: 'primary',
      }}
    >
      <Box
        sx={{
          w: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 10,
        }}
      >
        <a
          href="https://github.com/weinnandhasanion"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={SiGithub} w={10} h={10} my={5} fill="secondary" />
        </a>
        <chakra.ul sx={{ display: 'flex' }}>
          {pages.map((page) => (
            <NavbarItem key={page} page={page} />
          ))}
        </chakra.ul>
      </Box>
    </chakra.nav>
  );
};

export default memo(Navbar);
