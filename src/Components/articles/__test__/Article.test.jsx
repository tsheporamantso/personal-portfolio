import { screen, render } from '@testing-library/react';
import Articles from '../Articles';

describe('Articles component', () => {
  beforeEach(() => {
    render(<Articles />);
  });
  test('should render heading with correct text', () => {
    expect(
      screen.getByRole('heading', { name: /beyond code/i, level: 5 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /articles & thoughts/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /imposter syndrome as a developer/i,
        level: 3,
      }),
    ).toBeInTheDocument();
  });

  test('should render three paragraphs', () => {
    const wrapper = screen.getByTestId('paragraphs');
    const paragraphs = wrapper.querySelectorAll('p');

    expect(paragraphs).toHaveLength(3);

    expect(paragraphs[0]).toHaveClass('article__meta');
    expect(paragraphs[1]).toHaveClass('article__description');
    expect(paragraphs[2]).toHaveClass('article__reflection');
  });

  test('should render navigation link with href', () => {
    const link = screen.getByRole('link', { name: /read full article/i });
    expect(link).toHaveAttribute(
      'href',
      'https://medium.com/@tgramantso/dealing-with-imposter-syndrome-4310ecb3deea',
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  describe('snapshots', () => {
    test('should match component snapshot', () => {
      const { container } = render(<Articles />);
      expect(container).toMatchSnapshot();
    });
  });
});
