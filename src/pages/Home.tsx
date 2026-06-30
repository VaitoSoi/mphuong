import React from 'react';
import './Home.css';
import Footer from '../assets/Footer';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="paper-stack">

        {/* Các lớp giấy nền*/}
        <div className="bg-paper-scroll bg-paper-scroll-1" />
        <div className="bg-paper-scroll bg-paper-scroll-2" />
        <div className="bg-paper-scroll bg-paper-scroll-3" />

        <div className="main-paper-scroll">

          {/* Decor góc trên */}
          <div className="absolute-decor polaroid-top-left">
          </div>
          <div className="absolute-decor star-mid-right">
          </div>

          {/* Phần 1: Tiêu đề và Đoạn intro */}
          <section className="intro-section">
            <div className="heading-container">
              <span className="quote-mark quote-left">“</span>
              <h1 className="main-heading">
                <span className="text-crimson">Perfection</span> is a system error.<br />
                Courage is <span className="text-yellow">hidden</span> in the<br />
                messy drafts underneath
              </h1>
              <span className="quote-mark quote-right">”</span>
            </div>

            <div className="body-text">
              <p>
                People see an '<span className="text-crimson">Error 404</span>' as a dead end. I see it as a blank space begging for a messy draft.
              </p>
              <p>
                Growing up with the privilege of having a 'draft paper'—the safety net to fail and start over—I realized that marginalized communities are often denied this exact right. They are paralyzed by a system that constantly returns: 'Error 404: Courage Not Found.'
              </p>
              <p>
                I don't just 'do' Marketing; I engineer confidence. By merging the analytical sharpness of a Math student with Human-centric design, my mission is to redesign experiences where the 'Draft Paper' is a universal right. I build platforms that empower the vulnerable to treat their mistakes as mere drafts.
              </p>
              <p>
                Welcome to my portfolio. It isn't a gallery of perfections—it's a live, unpolished notebook of how I fail, tear the page, pivot, and lead.
              </p>
            </div>
          </section>

          {/* Phần 2: Timeline Nav */}
          <section className="timeline-section">

            <div className="timeline-path">
            </div>

            {/* Các Item dọc theo dây */}
            <Link to="/about">
              <div className="timeline-item item-about">
                <div className="polaroid-board">
                </div>
              </div>
            </Link>
            <div className="absolute-decor star-mid-left">
            </div>
            <Link to="/achievement">
              <div className="timeline-item item-achievement">
                <div className="doodle-podium">
                </div>
                <div className="polaroid-board">
                </div>
              </div>
            </Link>
            <Link to="/extracurricular">
              <div className="timeline-item item-extracurricular">
                <div className="polaroid-board">
                </div>
                <div className="doodle-camera">
                </div>
              </div>
            </Link>
            <Link to="/future">
              <div className="timeline-item item-future">
                <div className="polaroid-board">
                </div>
              </div>
            </Link>
            <Link to="/thankyou">
              <div className="timeline-item item-thankyou">
                <div className="doodle-watering">
                </div>
                <p className="thankyou-text">My thank you!</p>
                <div className="arrow"></div>
                <div className="sticker-thankyou">
                </div>
              </div>
            </Link>
            <div className="absolute-decor paper-cat">
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;