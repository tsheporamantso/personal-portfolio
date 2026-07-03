import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../Nav';

const renderNav = () => {
  return render(
    <MemoryRouter future={{ v7_relativeSplatPath: true }}>
      <Nav />
    </MemoryRouter>,
  );
};

describe('Navbar component', () => {
  test('should render the correct number of links', () => {
    renderNav();

    const navLinks = screen.getAllByRole('link');
    expect(navLinks).toHaveLength(7);
  });

  test.each([
    ['#home', 'Home'],
    ['#about', 'About'],
    ['#services', 'Services'],
    ['#portfolio', 'Portfolio'],
    ['#contact', 'Contact Me'],
    ['/tip', 'Buy me a coffee'],
    ['/login', 'Admin Login'],
  ])('should render %s link with correct title', (href, title) => {
    renderNav();

    const link = screen.getByTitle(title);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
  });
  describe('snapshot', () => {
    test('should render snapshot', () => {
      const { container } = renderNav();
      expect(container).toMatchSnapshot();
    });
  });
});
