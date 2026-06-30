import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion'; // 1. Thêm Variants vào đây
import './Extracurricular.css';
import Navbar from '../assets/Navbar1';
import Footer from '../assets/Footer';

type ProjectView = 'main' | 'buom' | 'maybiec' | 'pise';

interface AutoFadingCardProps {
    items: string[]; // Mảng chứa text placeholder hoặc URL hình ảnh
    className?: string; // Dùng để truyền các class như fb-tilt-left
    interval?: number; // Thời gian chuyển ảnh (ms)
}

export const AutoFadingCard: React.FC<AutoFadingCardProps> = ({
    items,
    className = '',
    interval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <div className={`auto-fading-wrapper ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`fade-item ${index === currentIndex ? 'active' : ''}`}
                    // Khi có ảnh thật, xóa item text ở dưới và bỏ comment dòng style này:
                    style={{ backgroundImage: `url(${item})` }}
                >
                </div>
            ))}
        </div>
    );
};

const Extracurricular: React.FC = () => {
    const [activeView, setActiveView] = useState<ProjectView>('main');

    const pageVariants: Variants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: "easeIn" } }
    };

    return (
        <div className="ec-container">
            {/* 1. Conditionally render Navbar only on 'main' and apply a fade exit */}
            <AnimatePresence>
                {activeView === 'main' && (
                    <motion.div
                        key="navbar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <Navbar />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {activeView === 'main' && (
                    <motion.div
                        key="main-board"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="ec-board-wrapper"
                    >
                        <MainBoard onSelectProject={setActiveView} />
                    </motion.div>
                )}

                {activeView === 'buom' && (
                    <motion.div key="buom-board" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="ec-board-wrapper">
                        <ProjectBuom onBack={() => setActiveView('main')} />
                    </motion.div>
                )}

                {activeView === 'maybiec' && (
                    <motion.div key="maybiec-board" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="ec-board-wrapper">
                        <ProjectMayBiec onBack={() => setActiveView('main')} />
                    </motion.div>
                )}

                {activeView === 'pise' && (
                    <motion.div key="pise-board" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="ec-board-wrapper">
                        <ProjectPISE onBack={() => setActiveView('main')} />
                    </motion.div>
                )}
                <Footer />
            </AnimatePresence>
        </div>
    );
};
/* ========================================================
   MAIN BOARD COMPONENT (Bảng ghim chính)
======================================================== */
const MainBoard: React.FC<{ onSelectProject: (view: ProjectView) => void }> = ({ onSelectProject }) => {
    return (
        <div className="corkboard">
            <div className="torn-paper-title"></div>
            <div className="white-note">
            </div>

            {/* Sợi dây đỏ kết nối 3 khung ảnh (Dùng SVG) */}
            <svg className="red-string-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path d="M 150 250 Q 300 310, 600 250 T 850 150" fill="none" stroke="#b91c1c" strokeWidth="10" />
            </svg>

            <div className="polaroid polaroid-1" onClick={() => onSelectProject('buom')}></div>
            <div className="polaroid polaroid-2" onClick={() => onSelectProject('maybiec')}></div>
            <div className="polaroid polaroid-3" onClick={() => onSelectProject('pise')}></div>

            {/* Placeholder sticker trang trí */}
            <div className="sticker cat-sticker-1"></div>
            <div className="sticker cat-sticker-2"></div>
            <div className="sticker star-sticker-bottom"></div>
            <div className="sticker stars-sticker-bottom"></div>
            <div className="sticker star-sticker-top"></div>
        </div>
    );
};

/* ========================================================
   HORIZONTAL SCROLL HOOK (Chuyển lăn dọc thành cuộn ngang)
======================================================== */
const useHorizontalScroll = () => {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({ left: el.scrollLeft + e.deltaY * 1.5, behavior: 'smooth' });
            };
            el.addEventListener('wheel', onWheel, { passive: false });
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    return elRef;
};

/* ========================================================
   PROJECT: BUOM (Kéo ngang - Sát thiết kế gốc)
======================================================== */
const ProjectBuom: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const scrollRef = useHorizontalScroll();
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const closeZoom = () => setZoomedImage(null);
    return (
        <div className="corkboard horizontal-board" ref={scrollRef}>
            <div className="horizontal-content buom-layout">
                <button className="back-btn" onClick={onBack}>Back to Board</button>

                {/* 1. Mở đầu: Post FB & Ảnh Buồm */}
                <div className="buom-group-intro">

                    {/* 1. Mở đầu: Post FB & Ảnh Buồm */}
                    <div className="buom-block intro-images">
                        <div className="placeholder-fb-small"></div>
                        <div className="placeholder-boat"></div>
                    </div>

                    {/* 2. Text: Passion */}
                    <div className="buom-block text-passion">
                        <h1 className="text-white-bold-italic">IT STARTED WITH PASSION.</h1>
                        <h2 className="text-white-regular">But passion requires a system.</h2>
                    </div>

                    {/* 3. Certificate */}
                    <div className="buom-block cert-block">
                        <div className="polaroid-buom-self"></div>
                        <div className="cert-stamp">
                            <div className="polaroid-cert-placeholder zoomable" onClick={() => setZoomedImage('/CERTS/Certs16.jpg')}></div>
                            <p>My certificate!</p>
                        </div>
                    </div>

                </div>
                {/* 4. Project Info & Lighthouse */}
                <div className="buom-block info-lighthouse-block">
                    <div className="info-content">
                        <div className="cat-face"></div>
                        <div className="excl-mark"></div>
                        <div className="project-banner">
                            Project | Buồm Education
                        </div>
                        <h3 className="role-title">Role | Head of Content</h3>
                        <p>My journey in community education started at the "Hải Đăng" free tutoring class. Leveraging my academic background, I created free lesson plans to help underprivileged students prepare for their high school entrance exams.</p>
                        <p>Despite high-quality lessons, our outreach was fundamentally flawed. The existing content was strictly exam-focused, fragmented, and failed to build a brand presence to reach the students who actually needed us.</p>
                    </div>
                    <div className="lighthouse-container">
                        {/* Dải sáng chiếu sang trái */}
                        <div className="lh-beam"></div>

                        {/* Cấu trúc ngọn hải đăng (Vẽ từ trên xuống) */}
                        <div className="lh-roof"></div>

                        <div className="lh-roof-rail">
                            <div className="rail-bar"></div>
                            <div className="rail-bar"></div>
                        </div>

                        <div className="lh-dome"></div>

                        <div className="lh-platform-rail">
                            <div className="rail-bar"></div>
                            <div className="rail-bar"></div>
                            <div className="rail-bar"></div>
                        </div>

                        <div className="lh-body">
                            <div className="lh-stripe lh-stripe-1"></div>
                            <div className="lh-window lh-window-left"></div>
                            <div className="lh-window lh-window-right"></div>
                            <div className="lh-stripe lh-stripe-2"></div>
                            <div className="lh-stripe lh-stripe-3"></div>
                            <div className="lh-door"></div>
                        </div>

                        <div className="lh-base"></div>
                    </div>
                </div>

                {/* 5. Action Statement */}
                <div className="buom-block action-text">
                    <div className="star-red-top"></div>
                    <p>Stepping up as Head of Content, I dismantled the fragmented, exam-focused posts and systematically restructured them into thematic, engaging series</p>
                    <div className="star-ragged-bottom"></div>
                </div>

                {/* 6. Series 1 */}
                <div className="buom-block series-block">
                    <h4>Series 1: The Untold Stories of<br />Math, Literature, and English</h4>
                    <div className="fb-stack">
                        <AutoFadingCard items={['/BUOM/IMGBTVA1.jpg', '/BUOM/IMGBTVA2.jpg', '/BUOM/IMGBTVA3.jpg']} className="fb-tilt-left" />
                        <AutoFadingCard items={['/BUOM/IMGBTVA4.jpg', '/BUOM/IMGBTVA5.jpg', '/BUOM/IMGBTVA6.jpg']} />
                        <AutoFadingCard items={['/BUOM/IMGBTVA7.jpg', '/BUOM/IMGBTVA8.jpg']} className="fb-tilt-right" />
                    </div>
                </div>

                {/* 7. Series 2 */}
                <div className="buom-block series-block">
                    <div className="chat-bubble"></div>
                    <h4>Series 2: Learning How to Learn</h4>
                    <div className="fb-stack">
                        <AutoFadingCard items={['/BUOM/IMGBLHTL1.jpg', '/BUOM/IMGBLHTL2.jpg']} className="fb-tilt-left" />
                        <AutoFadingCard items={['/BUOM/IMGBLHTL3.jpg', '/BUOM/IMGBLHTL4.jpg', '/BUOM/IMGBLHTL5.jpg']} />
                        <AutoFadingCard items={['/BUOM/IMGBLHTL6.jpg', '/BUOM/IMGBLHTL7.jpg']} className="fb-tilt-right" />
                    </div>
                    <div className="star-yellow-bottom"></div>
                </div>

                {/* 8. Impact Title */}
                <div className="buom-block">
                    <h1 className="impact-title">The impact?</h1>
                </div>

                {/* 9. Impact Stats - Followers */}
                <div className="buom-block stat-item">
                    <h2>+1,000 followers</h2>
                    <p>in 2 months</p>
                    <div className="stars-red"></div>
                </div>

                {/* 10. Impact Stats - Registrations */}
                <div className="buom-block stat-item">
                    <div className="cat-tiny"></div>
                    <h2>100+ registrations</h2>
                    <p>for the free "Hải Đăng" class.</p>
                </div>

                {/* 11. Text: The Lesson (Đã chuyển xuống cuối) */}
                <div className="buom-block text-lesson">
                    <h2>THE LESSON</h2>
                    <p>Great content without a distribution strategy is a wasted draft. Passion must be paired with a systematic approach</p>
                </div>

                <div className="spacer-end"></div>
            </div>
            {zoomedImage && (
                <div className="lightbox-overlay" onClick={closeZoom}>
                    <div className="lightbox-close">×</div>
                    <img src={zoomedImage} alt="Zoomed Certificate" className="lightbox-image" />
                </div>
            )}
        </div>
    );
};
/* ========================================================
   PROJECT: MAY BIEC (Kéo ngang - Sát thiết kế gốc)
======================================================== */
const ProjectMayBiec: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const scrollRef = useHorizontalScroll();
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const closeZoom = () => setZoomedImage(null);

    return (
        <div className="corkboard horizontal-board" ref={scrollRef}>
            <div className="horizontal-content maybiec-layout">
                <button className="back-btn" onClick={onBack}>Back to Board</button>

                {/* 1. Mở đầu: Lời tự sự & Cụm ảnh trái */}
                <div className="mb-block reflection-block">
                    <div className="mb-left-images">
                        <div className="mb-pol-1"></div>
                        <div className="mb-pol-2"></div>
                    </div>
                    <div className="reflection-text">
                        <h1 className="text-white-bold-italic mb-huge-title">
                            I THOUGHT "FUN"<br />WAS ENOUGH,
                        </h1>
                        <h2 className="text-white-regular mb-sub-title">Until I lost the depth.</h2>
                    </div>
                    <div className="mb-right-images">
                        <div className="mb-pol-3"></div>
                        <div className="cert-stamp mb-cert">
                            <div className="polaroid-cert-placeholder zoomable" onClick={() => setZoomedImage('/CERTS/Certs8.jpg')}></div>
                            <p>My certificate!</p>
                        </div>
                    </div>
                </div>

                {/* 2. Thông tin dự án */}
                <div className="mb-block project-info-block">
                    <div className="star-blue"></div>
                    <div className="taped-title-wrapper">
                        <div className="masking-tape"></div>
                        <h2 className="project-banner mb-banner">Project | Mây Biếc</h2>
                    </div>
                    <h3 className="role-title">Role | President → Advisor</h3>
                    <p>Stepping into the role of President, I was determined to break the stereotype that Literature clubs are inherently boring. Previous club sessions were overly academic, rigidly tied to textbooks, and severely lacked member engagement.</p>
                    <div className="headphone-cat"></div>

                </div>
                {/* 3. Gamification & Phone Mockup */}
                <div className="mb-block gamify-block">
                    {/* Lưới 3 ảnh */}
                    <div className="gamify-grid-container">
                        <div className="star-red-gamify"></div>
                        <div className="gamify-img gamify-img-top"></div>
                        <div className="gamify-img gamify-img-bottom-left"></div>
                        <div className="gamify-img gamify-img-bottom-right"></div>
                    </div>
                    <div className="phone-mockup"></div>
                    <div className="gamify-text-container">
                        <p className="mb-narrow-text">I decided to heavily "gamify" our approach. I redesigned the curriculum, integrating literary concepts into fun, multi-dimensional, and interactive games.</p>
                        <div className="chat-bubble-gamify"></div>
                    </div>
                </div>

                {/* 4. Reading Culture Initiative */}
                <div className="mb-block reading-block">
                    <p className="mb-narrow-text">
                        As a part of this innovation, I led our team in the Reading Culture Initiative to pitch an innovative "Social Network for Books."<br /><br />
                        Leveraging my experience from past projects, I guided and motivated our members through the competition, proudly earning a spot in the Top 10.
                    </p>

                    {/* Bảng Infographic nằm ngang */}
                    <div className="reading-infographic">
                        <div className="infographic-placeholder zoomable" onClick={() => setZoomedImage('/MAYBIEC/IMGMBContest.png')}></div>
                    </div>

                    {/* Khung ảnh Polaroid xanh */}
                    <div className="reading-polaroid zoomable2" onClick={() => window.open('https://giacngo.vn/cac-ban-tre-voi-cac-y-tuong-ve-sang-kien-van-hoa-doc-ben-vung-2024-post73308.html', '_blank')}>
                        <div className="reading-polaroid-img"></div>
                        <div className="reading-polaroid-text">
                            See Mây Biếc's journey<br />at Reading Culture<br />Initiative
                        </div>
                    </div>
                </div>

                {/* 5. Muc Tim Magazine Feature */}
                <div className="mb-block magazine-block">
                    <p className="mb-magazine-text">
                        Expanding on this passion, I later hosted the Book and Reading Culture Week 2025. Our main activity is book cover design – an exciting combination of creativity and knowledge.<br /><br />
                        By organizing dynamic activities, we successfully engaged over 2,000 participants and were honored with a feature in Muc Tim Magazine.
                    </p>
                    <div className="magazine-wrapper">
                        {/* Ảnh chính lớn */}
                        <div className="magazine-main-pic"></div>

                        {/* Note hồng góc trái */}
                        <div className="magazine-sticky-note" onClick={() => window.open('https://muctim.tuoitre.vn/gio-ra-choi-ron-rang-cung-van-hoc-va-sach-cua-hoc-tro-truong-thpt-gia-dinh-10125101014433789.htm', '_blank')}>
                            <u>Read the full<br />article</u>
                        </div>

                        {/* Ngôi sao góc phải */}
                        <div className="magazine-decor-star"></div>
                    </div>
                </div>

                {/* 6. Sự thật đối lập (The Hard Truth) */}
                <div className="mb-block truth-container">
                    <div className="truth-col">
                        <h3 className="text-white-bold truth-sub">MEMBER ENTHUSIASM SKYROCKET</h3>
                        <h2 className="text-yellow-bold truth-main">However, I soon faced<br />a hard truth:</h2>
                    </div>
                    <div className="truth-col truth-right">
                        <h3 className="text-white-bold truth-sub">The heavy gamification had unintentionally</h3>
                        <h1 className="text-yellow-bold truth-massive">STRIPPED AWAY</h1>
                        <h3 className="text-white-bold truth-sub">the club's academic depth.</h3>
                    </div>
                </div>

                {/* 7. Ảnh chốt (Cạnh phải) */}
                <div className="mb-block end-images-block">
                    {/* Ảnh Góc trên trái */}
                    <div className="mb-final-pic mb-final-tl">
                        <div className="red-pin final-pin"></div>
                    </div>

                    {/* Ảnh Góc dưới trái */}
                    <div className="mb-final-pic mb-final-bl"></div>

                    {/* Đoạn text trung tâm */}
                    <p className="mb-final-text">
                        I thought "fun" was enough, but surface-level entertainment cannot replace intellectual substance. As the current Advisor, I am rewriting this draft alongside the new generation to strike the perfect balance between excitement and academic depth.
                    </p>

                    {/* Graphic Góc trên phải (Logo Mèo/Âm nhạc) */}
                    <div className="mb-final-pic mb-final-tr"></div>

                    {/* Ảnh Góc dưới phải */}
                    <div className="mb-final-pic mb-final-br"></div>

                    {/* Các ngôi sao trang trí */}
                    <div className="final-star-red-right"></div>
                    <div className="final-star-red-bottom"></div>
                    <div className="final-music-note"></div>
                </div>

                <div className="spacer-end"></div>
            </div>

            {zoomedImage && (
                <div className="lightbox-overlay" onClick={closeZoom}>
                    <div className="lightbox-close">×</div>
                    <img src={zoomedImage} alt="Zoomed Certificate" className="lightbox-image" />
                </div>
            )}
        </div>
    );
};
/* ========================================================
   PROJECT: PISE (Kéo ngang - Sát thiết kế gốc)
======================================================== */
const ProjectPISE: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const scrollRef = useHorizontalScroll();
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const closeZoom = () => setZoomedImage(null);

    return (
        <div className="corkboard horizontal-board" ref={scrollRef}>
            <div className="horizontal-content pise-layout">
                <button className="back-btn" onClick={onBack}>Back to Board</button>

                <div className="pise-hero-container">
                    <div className="pise-img-left pise-pic">
                        <div className="pise-pin"></div>
                    </div>
                    <div className="pise-center-title">
                        <h1>WHEN MY</h1>
                        <h1>DRAFT PAPER</h1>
                        <h2>wasn't others reality.</h2>
                    </div>
                    <div className="pise-img-rt pise-pic">
                        <div className="pise-pin"></div>
                        <div className="pise-star-sticker"></div>
                    </div>
                    <div className="pise-img-rb pise-pic">
                        <div className="pise-pin"></div>
                    </div>
                </div>

                <div className="pise-block pise-project-info-block">
                    <h2 className="pise-project-title">Project: PISE 2025 & Trạm Thấu</h2>
                    <h2 className="pise-project-role">| Role: Founder</h2>
                    <p className="pise-project-desc">
                        PISE 2025 served as my incubator, equipping me<br />with Design Thinking.
                    </p>

                    <div className="pise-decor-star pise-star-1"></div>
                    <div className="pise-decor-star pise-star-2"></div>
                </div>

                <div className="pise-block pise-video-block">
                    <div className="pise-video-text">
                        <h2>VIDEO PRE-<br />PITCHING AT<br />DONG THAP<br />BOOTCAMP</h2>
                    </div>
                    <div className="pise-video-wrapper">
                        <iframe
                            className="pise-video-element"
                            src="https://www.youtube.com/embed/QvQIV0dQnFo?autoplay=0&mute=0"
                            width="640"
                            height="480"
                            allow="autoplay"
                            frameBorder="0"
                            allowFullScreen
                            title="PISE Pre-pitching Video"
                        ></iframe>

                        <div className="pise-chat-bubble"></div>
                    </div>
                </div>

                {/* Khối Trạm Thấu */}
                <div className="pise-block pise-tram-thau-block">
                    <div className="pise-tt-container">

                        {/* Ảnh bên trái */}
                        <div className="pise-tt-img pise-tt-left">
                            <div className="pise-tab pise-tab-left"></div>
                            <div className="pise-star-ragged"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTFDay1.jpg', '/TRAMTRAU/IMGTTFDay2.jpg']}
                                className="pise-fader"
                            />
                        </div>

                        <div className="pise-tt-text-container">
                            <p>
                                Utilizing this, I co-founded "Trạm Thấu"<br />
                                to ignite a passion for learning among<br />
                                marginalized children at the Thảo Đàn<br />
                                shelter. It was my first deeply<br />
                                committed, real-world project.
                            </p>
                        </div>
                        <div className="pise-tt-img pise-tt-bottom">
                            <div className="pise-tab pise-tab-bottom"></div>
                            <div className="pise-star-face"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTFDay4.jpg', '/TRAMTRAU/IMGTTFDay5.jpg']}
                                className="pise-fader"
                            />
                        </div>
                        <div className="pise-tt-img pise-tt-right">
                            <div className="pise-tab pise-tab-right"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTFDay3.jpg', '/TRAMTRAU/IMGTTMISC1.jpg']}
                                className="pise-fader"
                            />
                        </div>
                    </div>
                </div>

                {/* Khối Initially, I failed */}
                <div className="pise-block pise-failed-block">
                    <div className="pise-failed-content">
                        {/* Cột trái */}
                        <div className="pise-failed-left">
                            <h2>Initially,<br />I failed.</h2>
                            <p>I applied a top-down approach, forcing my own perspectives onto the children.</p>
                        </div>

                        {/* Cột phải */}
                        <div className="pise-failed-right">
                            <h3>The core issue being:</h3>
                            <p>Growing up in an educator family, I always had the confidence and the "safety net" to try and fail, while marginalized kids do not. They are restricted by their circumstances, constantly shrinking back out of the fear of making mistakes.</p>
                        </div>

                        {/* Sticker cây bút */}
                        <div className="pise-pen-decor"></div>
                    </div>
                </div>

                {/* Khối Pivot & Lesson Plan */}
                <div className="pise-block pise-pivot-block">
                    <div className="pise-pivot-content">

                        {/* Giấy note có dòng kẻ (Trái) */}
                        <div className="pise-note-lined">
                            <div className="pise-clip pise-clip-left"></div>
                            <p>
                                I hit the brakes. Instead of teaching
                                hard skills, I slowed the pace of our
                                activities. I pivoted our focus toward
                                cognitive awareness and self-
                                liberating experiences, establishing a
                                psychologically safe space.
                            </p>
                            <div className="pise-blue-star"></div>
                        </div>

                        {/* Giấy nháp kế hoạch bài giảng (Phải) */}
                        <div
                            className="pise-note-plan zoomable"
                            onClick={() => window.open('https://drive.google.com/file/d/1CG_oCsCv6zoJTJRFWdJPMVrIihOlcU6n/view', '_blank')}
                        >
                            <h3><u>The full lesson plan at<br />Thao Dan</u></h3>
                        </div>

                    </div>
                </div>

                {/* Workshop Block */}
                <div className="pise-block pise-workshop-block">
                    <div className="pise-workshop-content">

                        {/* Text Column */}
                        <div className="pise-workshop-text">
                            <div className="pise-blue-star-small"></div>
                            <p>
                                While the project's<br />
                                scale was small, the<br />
                                impact was profound.<br />
                                For the first time, the<br />
                                children at Thảo Đàn<br />
                                found the courage to<br />
                                step out of their shells,<br />
                                participate freely, and<br />
                                embrace being wrong.
                            </p>
                        </div>

                        {/* Image Gallery Column */}
                        <div className="pise-workshop-gallery">
                            <h2 className="pise-workshop-title">
                                Workshop "Design your own plan"
                                <div className="pise-star-clip"></div>
                            </h2>

                            <div className="pise-grid">
                                <div className="pise-grid-item pise-img-1">
                                    <div className="pise-tiny-stars"></div>
                                </div>
                                <div className="pise-grid-item pise-img-2"></div>
                                <div className="pise-grid-item pise-img-3"></div>
                                <div className="pise-grid-item pise-img-4"></div>
                                <div className="pise-grid-item pise-img-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Khối THE PROJECTS */}
                <div className="pise-block pise-projects-block">

                    <div className="pise-projects-header">
                        <div className="pise-red-star-decor pise-star-left"></div>
                        <h2>THE PROJECTS</h2>
                        <div className="pise-red-star-decor pise-star-right"></div>
                    </div>

                    <div className="pise-projects-cards">
                        <div className="pise-project-card pise-card-left">
                            <div className="pise-tab pise-tab-left"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTTProjects1.jpg', '/TRAMTRAU/IMGTTTProjects2.jpg', '/TRAMTRAU/IMGTTTProjects3.jpg', '/TRAMTRAU/IMGTTTProjects10.jpg', '/TRAMTRAU/IMGTTTProjects13.jpg']}
                                className="pise-fader"
                            />
                        </div>
                        <div className="pise-project-card pise-card-center">
                            <div className="pise-tab pise-tab-bottom"></div>
                            {/* Sticker nốt nhạc */}
                            <div className="pise-music-notes"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTTProjects4.jpg', '/TRAMTRAU/IMGTTTProjects5.jpg', '/TRAMTRAU/IMGTTTProjects6.jpg', '/TRAMTRAU/IMGTTTProjects11.jpg']}
                                className="pise-fader"
                            />
                        </div>
                        <div className="pise-project-card pise-card-right">
                            <div className="pise-tab pise-tab-right"></div>
                            <AutoFadingCard
                                items={['/TRAMTRAU/IMGTTTProjects7.jpg', '/TRAMTRAU/IMGTTTProjects8.jpg', '/TRAMTRAU/IMGTTTProjects9.jpg', '/TRAMTRAU/IMGTTTProjects12.jpg', '/TRAMTRAU/IMGTTTProjects14.jpg']}
                                className="pise-fader"
                            />
                        </div>
                    </div>
                </div>

                {/* Khối THE LESSON */}
                <div className="pise-block pise-lesson-block">
                    <div className="pise-lesson-content">
                        <h2>THE LESSON</h2>
                        <p>
                            The "privilege to fail" is not a universal<br />
                            reality. The biggest barrier for vulnerable<br />
                            youth isn't a lack of knowledge, but a<br />
                            lack of courage. True education must<br />
                            begin with cognitive healing.
                        </p>
                    </div>
                </div>
                {/* Khối Team (Work & Co.) */}
                <div className="pise-block pise-team-block">
                    <div className="pise-team-content">

                        {/* Ảnh tập thể & Ngôi sao */}
                        <div className="pise-team-img-wrapper">
                            <div className="pise-yellow-star"></div>
                            <div className="pise-team-img"></div>
                        </div>

                        {/* Thông tin Text & Doodle */}
                        <div className="pise-team-text-wrapper">
                            <p>Work & Co.</p>
                            <p>Nguyen Thu Thao</p>
                            <p>Nguyen Pham Chieu Quan</p>

                            {/* Hình vẽ bục nhận giải 1-2-3 */}
                            <div className="pise-podium-doodle"></div>
                        </div>

                    </div>
                </div>
                <div className="spacer-end"></div>
            </div>

            {zoomedImage && (
                <div className="lightbox-overlay" onClick={closeZoom}>
                    <div className="lightbox-close">×</div>
                    <img src={zoomedImage} alt="Zoomed Certificate" className="lightbox-image" />
                </div>
            )}
        </div>
    );
};
export default Extracurricular;