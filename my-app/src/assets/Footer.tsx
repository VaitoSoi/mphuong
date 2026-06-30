import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer-text">
        Ngo Mai Phuong: The first draft
      </span>
      <div className="fb-Decor">
        <a 
          href="https://www.facebook.com/phuong.ngomai.737" 
          target="_blank" 
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <img 
            src="https://img.icons8.com/?size=35&id=118487&format=png&color=ffffff" 
            alt="Facebook" 
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;