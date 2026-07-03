import { screen, render } from '@testing-library/react';
import HeaderSocials from '../HeaderSocials';

describe('Header Socials Component', () => {
  beforeEach(() => {
    render(<HeaderSocials />);
  });
  test('should render social media links', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute(
      'href',
      'https://linkedin.com/in/gladwinramantso',
    );
    expect(links[1]).toHaveAttribute(
      'href',
      'https://github.com/tsheporamantso',
    );
    expect(links[2]).toHaveAttribute(
      'href',
      'https://wellfound.com/u/gladwin-tshepo-ramantso',
    );
  });
  describe('Header Socials Snapshots', () => {
    test('should render nav links snapshot', () => {
      expect(screen.getAllByRole('link')).toMatchSnapshot();
    });
  });
});
