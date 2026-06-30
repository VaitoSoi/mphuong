import React, { useState } from 'react';
import './Future.css';
import Navbar from '../assets/Navbar1';
import Footer from '../assets/Footer';
import { useNavigate } from 'react-router-dom';

const FuturePlanPage: React.FC = () => {
    const [isVariant2, setIsVariant2] = useState<boolean>(false);

    const handlePaperClick = () => {
        if (!isVariant2) {
            setIsVariant2(true);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="future-plan-container">
            <Navbar />
            <div className="content-wrapper">

                <div
                    className={`paper-container ${isVariant2 ? 'is-variant-2' : 'is-variant-1'}`}
                    onClick={handlePaperClick}
                >
                    {/* Hình ảnh trang trí chung cho cả 2 dạng */}
                    <div className="decor paper-star"></div>
                    <div className="decor cat-sticker"></div>

                    {!isVariant2 ? (
                        /* DẠNG 1 */
                        <div className="variant-1-wrapper">
                            <div className="paper-background"></div>
                            <div className="paper-main">
                                <h1 className="title-red">From a Personal Draft to a Universal Blueprint</h1>
                                <p className="handwritten-text">
                                    Growing up with the privilege of being allowed to make mistakes,
                                    I realized that psychological safety is the ultimate catalyst for growth.
                                    Combining mathematical logic with profound empathy, I founded Tram Trau—a safe space
                                    for vulnerable children at the Thao Dan shelter to freely "draft, erase, and redraw"
                                    their potential without fear of judgment.
                                    <br /><br />
                                    However, my ambition extends far beyond a single community project. My ultimate
                                    mission is "Marketing the Courage". I aim to redefine Digital Marketing: not merely
                                    as a commercial tool to sell products, but as a strategic system to distribute courage,
                                    equalize experiential opportunities, and dismantle the barriers of fear for underprivileged
                                    youth on a macro scale.
                                </p>
                            </div>
                        </div>
                    ) : (
                        /* DẠNG 2 */
                        <div className="variant-2-wrapper">
                            <div className="paper-main horizontal">
                                <h1 className="title-black">Future Initiative: The Draftroom Co.</h1>

                                <div className="text-lines">
                                    <p className="unimportant-text">
                                        ???????????? ???????????? ????????????WANNA???????????????? ????????????????????? ??????????? KNOW MORE??????????????????????????????????????????
                                        ???????????????
                                        ????????????????? ???????????????????????? ??????????????????????????????   CLICK???????????????????????????????????????????????????????????????????????????????????????   BELOW ????????????????????????????
                                        ????????????????????????????????????????????
                                    </p>
                                </div>

                                <button className="more-btn" onClick={() => navigate('/draftroom-details')}>
                                    More ➔
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FuturePlanPage;