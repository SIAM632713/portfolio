import React from 'react';
import Navber from "./component/header/navber.jsx";
import Header from "./component/header.jsx";
import Banner from "./component/banner.jsx";
import Tools from "./component/tools.jsx";
import Work from "./component/work.jsx";
import Review from "./component/review.jsx";
import Contact from "./component/contact.jsx";
import Footer from "./component/footer.jsx";

const App = () => {
    return (
        <div className="bg-[#111]">
            <Navber />
            <main>
                <section id="Home">
                    <Header />
                </section>

                <section id="About">
                    <Banner />
                    <Tools />
                </section>

                <section id="Work">
                    <Work />
                </section>

                <section id="Reviews">
                    <Review />
                </section>

                <section id="Contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
