import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Achievement.css';
import Navbar from '../assets/Navbar1';
import Footer from '../assets/Footer';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const Achievement: React.FC = () => {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const closeZoom = () => setZoomedImage(null);

    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [activePdf, setActivePdf] = useState<1 | 2>(1);

    const certData = [
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs17.png`,
            caption: "Top 10 Sustainable Reading Culture Initiative",
            desc: "Demonstrates my ability to design sustainable community programs and drive social impact through educational initiatives."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs19.png`,
            caption: "Head of Content - Buồm Education",
            desc: "Showcasesing my versatility in strategic content creation and academic planning."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs16.jpg`,
            caption: "Academic Board Member - Buồm Education",
            desc: "My experience in driving a organization's core educational values."
        },
        {
            src:"/CERTS/Certs8.jpg",
            caption:"President — Mây Biếc (Literature & Book Club, Gia Dinh High School) ",
            desc:"Demonstrates my leadership in fostering a culture of reading and literary appreciation."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs9.jpg`,
            caption: "Mây Biếc (Literature & Book Club, Gia Dinh High School)",
            desc: "Grade 10 membership in a literature club that promotes reading culture and literary discussions."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs10.jpg`,
            caption: "Participant — Maybiec for Gia Dinh openday 2024",
            desc: "Showcases my active engagement in promoting the book club within the school community."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs11.jpg`,
            caption: "Participant — Maybiec for Gia Dinh openday 2025",
            desc: "Showcases my active engagement in promoting the book club within the school community."
        },
        {
            src: `${import.meta.env.BASE_URL}CERTS/Certs6.jpg`,
            caption: "Mentee — PISE 2025",
            desc: ""
        }
    ];
    return (
        <div className="achievement-wrapper">
            <Navbar />

            {/* PHẦN 1: NỀN GIẤY Ô LY */}
            <section className="grid-paper-section">
                <div className="content-container">

                    <div className="header-block">
                        <h1 className="section-title">The Calculated Lines</h1>
                        <p className="highlight-text">"Before breaking the rules, I learned to master them."</p>
                        <p className="body-text">
                            Empathy dictates what I should do, but analytical rigor and execution skills determine
                            how I do it. Below is the calculated preparation behind my journey to redesign educational experiences.
                        </p>
                    </div>

                    <div className="header-block mt-40">
                        <h1 className="section-title">The Analytical Foundation</h1>
                        <p className="body-text">Proving logical reasoning, data-driven thinking, and academic readiness.</p>
                    </div>

                    <div className="foundation-cards">
                        <div className="mini-card zoomable2" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs5.jpg`)}>
                            <div className="icon-box red-box"></div>
                            <div className="card-info">
                                <h3>IELTS 7.5 Overall</h3>
                                <p>Demonstrates global communication proficiency and the ability to research international materials.</p>
                            </div>
                        </div>

                        <div className="mini-card zoomable2" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs21.jpg`)}>
                            <div className="icon-box">
                                <img src={`${import.meta.env.BASE_URL}MICS/IMGGDDT.png`} alt="Math Logo" />
                            </div>
                            <div className="card-info">
                                <h3>3rd Prize</h3>
                                <p className="subtitle">City-Level Excellent Student in Mathematics (Grade 12)</p>
                                <p>Proves advanced logical reasoning, the ability to deconstruct complex problems, and core analytical thinking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHẦN 2: NỀN GIẤY NHÁM */}
            <section className="textured-paper-section">
                <div className="content-container">

                    <div className="header-block center">
                        <h1 className="section-title">The Strategic Innovations</h1>
                        <p className="highlight-tag">Applying mathematical logic to business and social challenges.</p>
                    </div>

                    <div className="innovation-timeline">

                        {/*` ISME */}
                        <motion.div
                            className="major-card dark-brown"
                            initial="hidden"
                            variants={fadeUpVariant}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }} // Chỉ chạy 1 lần khi cuộn tới 20% thẻ
                        >
                            <div className="card-top">
                                <img src={`${import.meta.env.BASE_URL}LOGO/LG4.jpg`} alt="ISME" className="poster-img" />
                                <div className="card-text">
                                    <h2>2nd Prize, ISME Business Case Debate Contest <span className="red-text">Top 2/76</span></h2>
                                    <blockquote className="quote">
                                        "Before I had zero background in stepping up to a debate podium."<br /><br />
                                        "But courage is simply the willingness to make the first argument."
                                    </blockquote>
                                </div>
                            </div>
                            <ul className="card-bullets">
                                <li>Theme: Sustainable Fashion.</li>
                                <li>Highlight: Showcases sharp business acumen and strategic debate skills.</li>
                            </ul>
                            <div className="card-gallery">
                                <img src={`${import.meta.env.BASE_URL}MICS/IMGSelf6.jpg`} alt="Gallery" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}MICS/IMGSelf6.jpg`)} style={{ cursor: 'pointer' }} />
                                <img src={`${import.meta.env.BASE_URL}MICS/IMGSelf4.jpg`} alt="Gallery" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}MICS/IMGSelf4.jpg`)} style={{ cursor: 'pointer' }} />
                                <img src={`${import.meta.env.BASE_URL}CERTS/Certs12.jpg`} alt="Gallery" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs12.jpg`)} style={{ cursor: 'pointer' }} />
                            </div>
                        </motion.div>

                        {/* Wave Vietnam */}
                        <motion.div
                            className="major-card light-blue"
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="card-top">
                                <img src={`${import.meta.env.BASE_URL}LOGO/LG1.png`} alt="Wave Vietnam" className="poster-img contain" />
                                <div className="card-text">
                                    <h2>3rd Prize, Wave Vietnam Social Innovator <span className="cyan-text">Top 3/30</span></h2>
                                    <blockquote className="quote dark">
                                        "Isn't psychology just rigid theories on paper?"<br /><br />
                                        "Not if I design an interactive space where they can safely explore who they really are."
                                    </blockquote>
                                </div>
                            </div>
                            <ul className="card-bullets dark">
                                <li>Project: MBTI exploration model via experiential learning for High School students.</li>
                                <li>Highlight: A perfect intersection of psychology and Experience Design.</li>
                            </ul>
                            <div className="card-gallery two-cols">
                                <img src={`${import.meta.env.BASE_URL}CERTS/Certs18.png`} alt="Gallery" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs18.png`)} style={{ cursor: 'pointer' }} />
                                <img src={`${import.meta.env.BASE_URL}CERTS/Certs3.jpg`} alt="Gallery" onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs3.jpg`)} style={{ cursor: 'pointer' }} />
                            </div>
                        </motion.div>

                        {/*Aspiring Vietnam*/}
                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="major-card dark-blue tilted">
                                <div className="card-top">
                                    <img src={`${import.meta.env.BASE_URL}LOGO/LG3.jpg`} alt="Aspiring Vietnam" className="poster-img" />
                                    <div className="card-text">
                                        <h2>ASPIRING VIETNAM 2024<br />Best of <span className="pink-text">Demo Challenge</span>, Future President Program, Top 128</h2>
                                        <blockquote className="quote">
                                            "The room is full of brilliant minds; how could I possibly catch up?"<br /><br />
                                            "But courage is simply the willingness to make the first argument."
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="card-flex-row">
                                    <ul className="card-bullets">
                                        <li>Highlight: Demonstrates practical project leadership and persuasive pitching skills.</li>
                                    </ul>
                                    <button className="demo-btn" onClick={() => {
                                        setIsDemoOpen(true);
                                        setActivePdf(1);
                                    }} >
                                        See the demo challenge
                                    </button>
                                </div>
                                <div className="card-gallery">
                                    <img src={`${import.meta.env.BASE_URL}CERTS/Certs1.png`} alt="Gallery" style={{ cursor: 'pointer' }} onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs1.png`)} />
                                    <img src={`${import.meta.env.BASE_URL}CERTS/Certs2.png`} alt="Gallery" style={{ cursor: 'pointer' }} onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs2.png`)} />
                                    <img src={`${import.meta.env.BASE_URL}CERTS/Certs20.png`} alt="Gallery" style={{ cursor: 'pointer' }} onClick={() => setZoomedImage(`${import.meta.env.BASE_URL}CERTS/Certs20.png`)} />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* PHẦN 3: Empathetic Leadership */}
                    <motion.div
                        className="header-block center mt-60"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="section-title">The Empathetic Leadership</h1>
                        <p className="highlight-tag dark">Fostering sustainable community impact.</p>
                    </motion.div>

                    <motion.div
                        className="leadership-section"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="cert-container">
                            <div className="marquee-wrapper">
                                <div className="marquee-track">
                                    {[...certData, ...certData].map((item, index) => (
                                        <div key={index} className="marquee-item">
                                            <img
                                                src={item.src}
                                                alt={`Certificate ${index}`}
                                                className="marquee-img zoomable2"
                                                onClick={() => setZoomedImage(item.src)}
                                            />

                                            <p className="marquee-caption">
                                                <strong>{item.caption}</strong>
                                            </p>

                                            <p className="marquee-desc">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
            {zoomedImage && (
                <div className="lightbox-overlay" onClick={closeZoom}>
                    <div className="lightbox-close">×</div>
                    <img src={zoomedImage} alt="Zoomed Certificate" className="lightbox-image" />
                </div>
            )}
            {isDemoOpen && (
                <div className="pdf-modal-overlay" onClick={() => setIsDemoOpen(false)}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setIsDemoOpen(false)}>✖</button>
                        <h2 className="modal-title">Aspiring Vietnam - Demo Challenge</h2>

                        <div className="pdf-toggle-group">
                            <button
                                className={`pdf-toggle-btn ${activePdf === 1 ? 'active' : ''}`}
                                onClick={() => setActivePdf(1)}
                            >
                                The Proposal
                            </button>
                            <button
                                className={`pdf-toggle-btn ${activePdf === 2 ? 'active' : ''}`}
                                onClick={() => setActivePdf(2)}
                            >
                                Brand Guidelines
                            </button>
                        </div>

                        <div className="pdf-container">
                            <object
                                data={activePdf === 1 ? `${import.meta.env.BASE_URL}PDF/VEGOProposal.pdf#view=FitH` : `${import.meta.env.BASE_URL}PDF/VEGOGuidelines.pdf#view=FitH`}
                                type="application/pdf"
                                className="pdf-viewer"
                            >
                                {/* Fallback  */}
                                <div style={{ padding: '20px', textAlign: 'center' }}>
                                    <p style={{ color: '#fff' }}>Your browser does not support viewing PDFs inline.</p>
                                    <a
                                        href={activePdf === 1 ? `${import.meta.env.BASE_URL}PDF/VEGOProposal.pdf` : `${import.meta.env.BASE_URL}PDF/VEGOGuidelines.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#ff3399', textDecoration: 'underline', fontWeight: 'bold' }}
                                    >
                                        Click here to download the PDF
                                    </a>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievement;