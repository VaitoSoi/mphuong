import React from 'react';
import Navbar from '../assets/Navbar1';
import Footer from '../assets/Footer';
import './Thankyou.css';

const Thankyou: React.FC = () => {
    return (
        <div className="thank-you-container">
            <Navbar />
            <div className="content-wrapper">

                {/* Placeholders cho hình ảnh decor */}
                <div className="decor-ty torn-paper"></div>
                <div className="decor-ty star-sticker"></div>
                <div className="decor-ty exclamation"></div>
                <div className="decor-ty bear-sticker"></div>
                <div className="decor-ty scribble"></div>
                <div className="decor-ty envelope"></div>
                <div className="decor-ty rmit-logo"></div>
                <div className="decor-ty white-doodle"></div>
                {/* Nội dung chính */}
                <div className="paper-content">
                    <h1>ACKNOWLEDGEMENTS: TO THOSE WHO HELD MY "FIRST DRAFT"</h1>

                    <div className="text-content">
                        <p>
                            The journey to positioning myself as a Human-Centric Marketer with the analytical rigor of a Math major has never been a perfectly straight line. For this "First Draft" to take shape, I have been incredibly fortunate to be supported by many amazing individuals.
                        </p>
                        <p>
                            To my parents and family, my deepest gratitude goes to you for providing the very first and safest "draft paper" of my life. Raised in a family of public school educators, I was granted an immense privilege: the freedom to try, to make mistakes, and to stand back up without the fear of judgment. You taught me that the goal of education isn't to fill minds with information, but to equip students with courage through real-world stumbles. Thank you for always being my unconditional safety net.
                        </p>
                        <p>
                            To my teachers and mentors, thank you for not hesitating to hand me a new "draft paper" when I decided to challenge myself with Mathematics, instilling in me one single belief: "Never be afraid to try." Thank you for honing both my analytical thinking and my empathy, helping me systematize my passions and turn them into actionable visions.
                        </p>
                        <p>
                            To my teammates and the friends who have walked into my life, thank you for standing by my side. Passion would remain an unfinished draft without you all being there to "erase and rewrite" with me countless times. You are the ones who came, patiently collaborated with me to create real-world value, and shaped the person I am today.
                        </p>
                        <p>
                            To the children at Tram Thau, you are the biggest turning point in my trajectory. Watching you shrink back in fear of making mistakes made me realize that my "privilege to stumble" is not everyone's reality. I could not choose my starting point, but I can choose how to use that privilege. Thank you for teaching me that cognitive healing is the first step of education, and for fueling my aspiration to create psychologically safe spaces for those who were not fortunate enough to have them from the start.
                        </p>
                        <p>
                            Finally, my sincere thanks to the RMIT Admissions Committee for taking the time to read, evaluate, and understand my "First Draft." Thank you for listening to my vision of "Marketing the Courage" and the mission for sustainable change that I pursue. I firmly believe that RMIT is not just an academic milestone, but the strategic catalyst I need to continue writing the next chapters of this journey.
                        </p>
                    </div>
                </div>
                <div className="spacer"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Thankyou;