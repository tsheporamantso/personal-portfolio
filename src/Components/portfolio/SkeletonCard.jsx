const SkeletonCard = () => (
  <article className="portfolio__item skeleton-card">
    <div className="portfolio__item-image skeleton shimmer" />
    <div className="skeleton shimmer skeleton--title" />
    <div className="skeleton shimmer skeleton--text" />
    <div className="skeleton shimmer skeleton--text skeleton--text-short" />
    <div className="portfolio__item-cta">
      <div className="skeleton shimmer skeleton--btn" />
    </div>
  </article>
);

export default SkeletonCard;
