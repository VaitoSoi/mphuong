import React, { useState } from 'react';
import Footer from '../assets/Footer'; // Tái sử dụng component Footer đã tạo
import './AboutMe.css';
import Navbar from '../assets/Navbar1';

const AboutMe: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const closeZoom = () => setZoomedImage(null);

  return (
    <div className="about-wrapper">

      {/* THANH ĐIỀU HƯỚNG */}
      <Navbar />
      {/* PHẦN 1: GIẤY Ô LY (HERO SECTION) */}
      <section className="grid-paper-section">
        <div className="hero-container">

          {/* Cột trái */}
          <div className="hero-left">
            <div className="polaroid-hero">
            </div>
            <div className="stamp-text">
              In math, I always had the privilege of a draft paper to make mistakes. In life, I realized marginalized youth do not.
            </div>
          </div>

          {/* Cột phải */}
          <div className="hero-right">
            <h1 className="hero-name">NGÔ MAI PHƯƠNG</h1>
            <h2 className="hero-title">
              <span className="highlight-yellow">A Human-Centric Marketer</span> with the analytical rigor of a Math major.
            </h2>
            <p className="hero-desc">
              Raised in a family of educators, I was taught that "the goal of education isn't to fill minds with information, but to equip students with courage through real-world stumbles." I am here to use Digital Strategy to redesign educational experiences, turning academic barriers into milestones of courage.
            </p>

            <div className="sticky-note">
              <h3 className="sticky-note-title">[Contact]</h3>
              <ul>
                <li><strong>Phone:</strong> 0769977163</li>
                <li><strong>Email:</strong> nmp18012008@gmail.com</li>
                <li><strong>Address:</strong> 37/27 Street No.44, An Hoi Tay, Ho Chi Minh City</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* PHẦN 2: GIẤY NHÁP (STORY SECTION) */}
      <section className="textured-paper-section">
        <div className="decor tape-decor-top"></div>

        <div className="story-header">
          <h3>Before I dared to redesign experiences for others, I was fortunate enough to have my own</h3>
          <div className="draft-title-container">
            <h2 className="draft-title">"DRAFT PAPER"</h2>
          </div>
        </div>
        <div className="line"></div>

        <div className="story-timeline">

          {/* Hàng 1 */}
          <div className="story-row">
            <div className="text-block">
              <p><strong>Born to public school teachers,</strong> I was the quintessential 'good kid' with a streak of Literature awards. Those early years steeped in literature taught me empathy, active listening, and the art of human-centric storytelling.</p>
            </div>
            <div className="image-block">
              <div className="placeholder cert-single zoomable" onClick={() => setZoomedImage('/CERTS/Certs13.jpg')}>
              </div>
              <p className="caption">District First Prize, Olympic Silver Medal</p>
            </div>
          </div>

          {/* Hàng 2 */}
          <div className="story-row reverse-mobile">
            <div className="text-block">
              <p><strong>Then, I took a detour:</strong> I decided to compete in Advanced Mathematics. Instead of holding me back to my proven strengths in Literature, my parents and teachers simply handed me a new draft paper with the ethos: 'Never be afraid to try.' I made it into the Math major. That pivot taught me that unconditional support is the greatest catalyst for courage.</p>
              <div className="handwriting-arrow">
                Receiving math award at the Ward office with dad!!
                <div className="handwriting-arrow-only"></div>
              </div>
            </div>
            <div className="image-block">
              <div className="placeholder polaroid-story" style={{ backgroundImage: `url('/MICS/IMGPola10.png')` }}>
              </div>
            </div>
          </div>

          {/* Hàng 3: Khối chứng nhận kép */}
          <div className="story-row center-align">
            <div className="decor star-left"></div>
            <div className="image-block full-width">
              <div className="placeholder cert-double zoomable" onClick={() => setZoomedImage('/CERTS/Certs14.jpg')}>
              </div>
              <p className="caption">Excellent Student in Mathematics - City level award</p>
            </div>
          </div>

          {/* Hàng 4 & 5: Hai cột ảnh và chữ */}
          <div className="two-col-grid">
            <div className="col">
              <div className="placeholder polaroid-story" style={{ backgroundImage: `url('/MICS/IMGPola9.png')` }}>
              </div>
              <div className="text-block mt-20">
                <p><strong>Stepping Out of the Margins</strong></p>
                <p>Equipped with mathematical logic and literary empathy, I ventured into extracurriculars. From Head of Content at Buom Education to President of May Biec, I immersed myself in designing activities, thoroughly enjoying the process of creating value within a safe 'sandbox'.</p>
              </div>
            </div>
            <div className="col">
              <div className="placeholder polaroid-story" style={{ backgroundImage: `url('/MICS/IMGPola14.png')` }}>
              </div>
              <div className="text-block mt-20">
                <p><strong>The Pause</strong></p>
                <p>That smooth trajectory halted when I founded Tram Thau and stepped into the Thao Dan shelter. Looking at orphaned children who instinctively shrank back for fear of making mistakes, I realized my father's educational truth: "equipping courage through stumbles" was a luxury here. Vulnerable youth don't have a safety net to catch them when they fall. My 'privilege to fail' was not their reality.</p>
              </div>
            </div>
          </div>

          {/* Hàng 6 */}
          <div className="story-row align-start">
            <div className="image-block">
              <div className="placeholder polaroid-story" style={{ backgroundImage: `url('/MICS/IMGPola3.png')`}}>
              </div>
            </div>
            <div className="text-block handwritten-block">
              <div className="thinking-char"></div>
              <p>
                That realization entirely shifted my trajectory. I knew that to build a psychologically safe space for them, empathy alone wasn't enough. I needed capability, strategy, and analytical sharpness. Here is how I honed those 'tools' before redesigning their experience...
              </p>
              <div className=" star-right"></div>
            </div>
          </div>

        </div>

        <div className="decor tape-decor-bottom"></div>
      </section>

      <Footer />
      {zoomedImage && (
        <div className="lightbox-overlay" onClick={closeZoom}>
          <div className="lightbox-close">×</div>
          <img src={zoomedImage} alt="Zoomed Certificate" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default AboutMe;