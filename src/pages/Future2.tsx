import React, { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import './Future.css';
import Navbar2 from '../assets/Navbar2';
import Footer from '../assets/Footer';

// Component tái sử dụng cho giao diện cửa sổ
interface RetroWindowProps {
    children: React.ReactNode;
    headerColor?: string;
    className?: string;
    onClick?: () => void;
}

const RetroWindow: React.FC<RetroWindowProps> = ({ children, headerColor = '#006ACE', className = '', onClick }) => {
    return (
        <div className={`retro-window ${className}`} onClick={onClick}>
            <div className="window-header" style={{ backgroundColor: headerColor }}>
                <div className="window-close">X</div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    );
};

const DraftroomDetails: React.FC = () => {
    const [popupStage, setPopupStage] = useState<number>(0);
    const trackRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the tall container
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"]
    });

    // Map scroll percentage (0 to 1) to popup stages
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.15) setPopupStage(0);
        else if (latest < 0.40) setPopupStage(1);
        else if (latest < 0.65) setPopupStage(2);
        else if (latest < 0.85) setPopupStage(3);
        else setPopupStage(4);
    });

    return (
        <div className="draftroom-container">
            <div className="content-wrapper">
                <Navbar2 />
                {/* Header Section */}
                <div className="hero-window">
                    <div className="hero-content">
                        <h1>Future Initiative:<br /><span className="pixel-text">The Draftroom Co.</span></h1>
                        <p>Where Fear Becomes Data, and Failure is Just Another Level.</p>
                    </div>
                </div>

                {/* Pillars Section */}
                <RetroWindow>
                    <div className="pillars-section">
                        <p className="pillars-intro">
                            To actualize the "Marketing the Courage" mission, I am blueprinting The Draftroom Co. — a Social Enterprise bridging an EdTech platform with a Social Impact Agency. This initiative converges the <strong>three core pillars of my background:</strong>
                        </p>
                        <div className="pillars-grid">
                            <div className="pillar-card">
                                <div className="placeholder-icon folder"></div>
                                <h3>Data & Analytics:</h3>
                                <p>Utilizing diagnostic algorithms to map users' "fear zones" and personalize their growth challenges.</p>
                            </div>
                            <div className="pillar-card">
                                <div className="placeholder-icon gamepad"></div>
                                <h3>Gamification:</h3>
                                <p>Designing digital "Courage Quests." Users tackle real-world challenges (e.g., public speaking, leading a project) to earn experience points.</p>
                            </div>
                            <div className="pillar-card">
                                <div className="placeholder-icon brain">[Brain Icon]</div>
                                <h3>Psychological Safety:</h3>
                                <p>A core algorithmic rule: Attempting a quest and "failing" rewards users with higher Resilience Points than choosing the safe option.</p>
                            </div>
                        </div>
                    </div>
                </RetroWindow>

                {/* CSR & Diagram Section */}
                <div className="two-col-section">
                    <RetroWindow className="csr-text">
                        <p>This model not only empowers underprivileged youth but also offers authentic CSR (Corporate Social Responsibility) marketing campaigns for partner brands, creating a self-sustaining value loop.</p>
                    </RetroWindow>
                    <RetroWindow className="csr-diagram"> fill
                    </RetroWindow>
                </div>

                {/* Why RMIT Banner */}
                <div className="rmit-banner bg-dark">
                    <h2>Why <span className="pixel-text">RMIT</span> is <div className="placeholder-logo inline-logo"></div></h2>
                    <h2>the <span className="pixel-text underline">Missing Piece?</span></h2>
                </div>

                {/* Staggered Content Section */}
                <div className="staggered-section">
                    <RetroWindow className="staggered-box box-1">
                        <p>Trạm Thấu proved I possess the empathy to connect and the logical mindset to build ground-up initiatives. However, scaling a grassroots volunteer project into a self-sustaining social enterprise like The Draftroom Co. requires more than just good intentions—it demands razor-sharp commercial acumen and digital strategy.</p>
                    </RetroWindow>
                    <RetroWindow className="staggered-box box-2">
                        <p>The Bachelor of Digital Marketing program at RMIT is that crucial pivot. To me, courses in Consumer Behaviour and Data Analytics are not merely academic subjects. They are the exact diagnostic tools I need to decode the "fear mechanics" of marginalized youth and optimize the touchpoints of their empowerment journey.</p>
                    </RetroWindow>
                    <RetroWindow className="staggered-box box-3">
                        <p>Furthermore, RMIT's core ethos of being "Ready for life and work" perfectly mirrors my philosophy of actionable courage. I don't plan to wait until graduation. From day one, I intend to bring the blueprint of The Draftroom Co. to the RMIT Activator and RMIT Business Club. These ecosystems will serve as my ultimate testing grounds to pitch the model, take calculated risks, fail safely, and recruit co-founders who share the bold vision of "Marketing the Courage."</p>
                    </RetroWindow>
                    <div className="placeholder-mascot"></div>
                </div>

                {/* Interactive Pop-up Section */}
                <div ref={trackRef} className="scroll-track">
                    <div className="sticky-viewport interactive-trigger-section">

                        {/* Scroll Reminder */}
                        {popupStage < 4 && (
                            <div className="scroll-reminder">
                                ↓ Keep scrolling ↓
                            </div>
                        )}

                        {/* Base Window */}
                        <div className="investment-banner">
                            <div className="bg-dark text-center py-10">
                                <h2>An <span className="pixel-text">Investment</span> in</h2>
                                <h2><strong>Sustainable</strong> Impact.</h2>
                            </div>
                        </div>

                        {/* Popup 1 */}
                        {popupStage >= 1 && (
                            <RetroWindow className="popup-window popup-1">
                                <p>I do not come to RMIT merely seeking a prestigious degree; I come seeking a strategic catalyst. My mission, "Marketing the Courage," requires an ecosystem of a certain caliber to transition from a blueprint to a reality.</p>
                            </RetroWindow>
                        )}

                        {/* Popup 2 */}
                        {popupStage >= 2 && (
                            <RetroWindow className="popup-window popup-2">
                                <p>The Vice-Chancellor's Scholarship, therefore, should not be viewed as a mere financial reward for my past achievements. To me, it is a "Strategic Investment." By granting me this resource, RMIT is not just investing in a student; it is investing in a future Social Impact Leader—one who is prepared to use Digital Marketing to redefine how society empowers underprivileged youth.</p>
                            </RetroWindow>
                        )}

                        {/* Popup 3 */}
                        {popupStage >= 3 && (
                            <RetroWindow className="popup-window popup-3">
                                <p>This investment will allow me to dedicate my full focus to bringing The Draftroom Co. to life right from the RMIT campus. I commit to being a relentless ambassador of the RMIT spirit: the courage to act, the resilience to fail, and the vision to create authentic, sustainable change.</p>
                            </RetroWindow>
                        )}

                        {/* Popup 4 (Final) */}
                        {popupStage >= 4 && (
                            <RetroWindow headerColor="#d97706" className="popup-window popup-4">
                                <div className="final-popup-content">
                                    <h3>This is more than my personal journey; it is a shared commitment between myself and RMIT to a future where courage is universally accessible.</h3>
                                    <div className="placeholder-logo right-bottom-logo">[Orange Logo]</div>
                                </div>
                            </RetroWindow>
                        )}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default DraftroomDetails;