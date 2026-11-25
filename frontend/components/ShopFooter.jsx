import React from 'react';
import facebook from '../src/assets/facebook.webp'
import insta from '../src/assets/insta.webp'
import { 
  Landmark, 
  Truck, 
  RotateCcw, 
  MessageCircle, 
  Droplets,
 
  
} from 'lucide-react';
import './Footer.css'
export default function ShopFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      
      {/* Top Features Bar */}
      <div className="footer-features">
        <div className="footer-container">
          <div className="feature-item">
            <Landmark size={22} color="#8c6d53" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h4>Bank transfer &amp; COD</h4>
              <p>Easy payment details shown after you order</p>
            </div>
          </div>
          <div className="feature-item">
            <Truck size={22} color="#8c6d53" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h4>Karachi delivery</h4>
              <p>PKR 300 &bull; 2-4 working days</p>
            </div>
          </div>
          <div className="feature-item">
            <RotateCcw size={22} color="#8c6d53" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h4>7-day returns</h4>
              <p>Unused, in the original packaging</p>
            </div>
          </div>
          <div className="feature-item">
            <MessageCircle size={22} color="#8c6d53" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h4>Help on WhatsApp</h4>
              <p>Real people, quick replies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Brand Info Section */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Droplets size={22} color="#222" strokeWidth={1.75} aria-hidden="true" />
              <h2>EVERNEST</h2>
            </div>
            <p className="brand-desc">
              Premium insulated water bottles, stainless steel tumblers, and leakproof flasks in Pakistan &mdash; built to keep your drinks hot or cold all day.
            </p>
            <div className="social-icons">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Evernest Water Bottles on Instagram"
              >
             <svg viewBox="0 0 24 24" aria-hidden="true" class="size-[18px]" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"></circle></svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Evernest Water Bottles on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" class="size-[18px]" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.6V21h2.9Z"></path></svg>
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Drinkware Categories */}
          <nav className="footer-col" aria-label="Drinkware Categories">
            <h3>DRINKWARE</h3>
            <ul>
              <li><a href="/collections/insulated-water-bottles" title="Buy Insulated Water Bottles in Pakistan">Insulated Bottles</a></li>
              <li><a href="/collections/stainless-steel-tumblers" title="Shop Stainless Steel Tumblers with Straw">Steel Tumblers</a></li>
              <li><a href="/collections/gym-sports-bottles" title="Leakproof Gym and Sports Water Bottles">Gym &amp; Sports</a></li>
            </ul>
          </nav>

          {/* Navigation Column 2: Collections */}
          <nav className="footer-col" aria-label="Featured Collections">
            <h3>COLLECTIONS</h3>
            <ul>
              <li><a href="/collections/hot-and-cold-flasks" title="Hot and Cold Vacuum Flasks">Hot &amp; Cold Flasks</a></li>
              <li><a href="/collections/best-sellers" title="Best Selling Water Bottles & Tumblers">Best Sellers</a></li>
            </ul>
          </nav>

          {/* Navigation Column 3: Shop Links */}
          <nav className="footer-col" aria-label="Shop Navigation">
            <h3>SHOP</h3>
            <ul>
              <li><a href="/collections/all" title="Browse All Water Bottles and Tumblers">All products</a></li>
              <li><a href="/blogs/hydration-guide" title="Hydration Tips & Bottle Care Blog">Hydration Blog</a></li>
              <li><a href="/pages/track-order" title="Track Your Order Status">Track an order</a></li>
            </ul>
          </nav>

          {/* Navigation Column 4: Legal Policies */}
          <nav className="footer-col" aria-label="Legal and Store Policies">
            <h3>LEGAL</h3>
            <ul>
              <li><a href="/policies/privacy-policy" title="Read Our Privacy Policy">Privacy Policy</a></li>
              <li><a href="/policies/refund-policy" title="7-Day Returns and Exchanges Policy">Returns &amp; Exchanges</a></li>
              <li><a href="/policies/shipping-policy" title="Karachi & Nationwide Shipping Details">Shipping &amp; Delivery</a></li>
              <li><a href="/policies/terms-of-service" title="Store Terms and Conditions">Terms &amp; Conditions</a></li>
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h3>CONTACT</h3>
            <address className="contact-detail" style={{ fontStyle: 'normal' }}>
              <MessageCircle size={18} color="#333" strokeWidth={1.75} style={{ marginTop: '2px' }} aria-hidden="true" />
              <div>
                <span>WhatsApp Support</span>
                <a 
                  href="https://wa.me/923362092228" 
                  className="phone-number"
                  aria-label="Chat with Evernest customer support on WhatsApp"
                >
                  +923128405485
                </a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Evernest Drinkware Pakistan. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}