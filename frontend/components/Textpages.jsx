import '../pages/PrivacyPolicy.css';
import { useEffect } from 'react';

const Textpages = ({sections,title}) => {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);
  return (

    <>
     <main className="privacy-container">
     <div className="privacy-header">
        <h2 className="privacy-title">{title}</h2>
       

      </div>
   <div className="privacy-sections">
        {sections.map((section) => (
          <section key={section.title} className="privacy-section">
            <h2 className="privacy-section-title">{section.title}</h2>
            <p className="privacy-section-text">
              {section.content}
              {section.linkText && (
                <>
                  <a href={section.linkHref} className="privacy-link">
                    {section.linkText}
                  </a>
                  .
                </>
              )}
            </p>
          </section>
        ))}
      </div>
      </main>
      </>
  )
}

export default Textpages
