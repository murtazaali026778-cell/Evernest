
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'What we collect',
      content:
        'When you order or create an account we collect your name, email address, WhatsApp/phone number, delivery address and order history. When you contact us we keep your message. We do not collect or store card details — we do not take card payments.',
    },
    {
      title: 'How we use it',
      content:
        'To deliver your order and contact you about it, to handle returns and questions, to keep your account working, and to prevent fraud. If you sign up to our newsletter, to send you occasional emails — you can unsubscribe from any of them.',
    },
    {
      title: 'Cookies',
      content:
        'We use essential cookies to keep your bag and your sign-in working. Analytics or marketing cookies are only used if you allow them in the cookie banner, and you can change that choice at any time.',
    },
    {
      title: 'Who we share it with',
      content:
        'Only the services that help us run the shop: the courier who delivers your order, our website hosting and database providers, our email provider, and our image hosting. They may only use your information to provide their service to us. We never sell your information.',
    },
    {
      title: 'How long we keep it',
      content:
        'Order records are kept for as long as we need them for accounting and returns. You can ask us to delete your account and the personal information we no longer need to keep.',
    },
    {
      title: 'Your choices',
      content:
        'You can see and change your details in your account, unsubscribe from marketing emails, and ask us for a copy of your information or to correct or delete it: reach us through the ',
      linkText: 'Contact page',
      linkHref: '/contact',
    },
  ];

  return (
    <main className="privacy-container">
      <div className="privacy-header">
        <h2 className="privacy-title">Privacy Policy</h2>
        <p className="privacy-subtitle">
          How we collect, use, and protect your personal information.
        </p>
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
  );
};

export default PrivacyPolicy;