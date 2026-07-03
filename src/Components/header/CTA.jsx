import Resume from '../../assets/Resume.pdf';

const CTA = () => (
  <div className="cta">
    <>
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </>
  </div>
);

export default CTA;
