import { screen, render } from '@testing-library/react';
import HeaderSocials from '../HeaderSocials';

describe('Header Socials Component', () => {
  test('should render social links with correct hrefs', () => {
    render(<HeaderSocials />);

    const socialLinks = screen.getAllByRole('link', { name: '' });

    const linkedin = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('linkedin');
    });
    const github = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('github');
    });
    const wellfound = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('wellfound');
    });

    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(wellfound).toBeInTheDocument();

    [linkedin, github, wellfound].forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
  describe('snapshot', () => {
    test('should render socials snapshot', () => {
      render(<HeaderSocials />);

      expect(screen.getAllByRole('link')).toMatchSnapshot();
    });
  });
});
