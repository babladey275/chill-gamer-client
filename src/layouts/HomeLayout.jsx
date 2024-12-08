import ReviewCard from "../components/ReviewCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import { Fade } from "react-awesome-reveal";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <BannerSlider></BannerSlider>
        </section>
        <section className="max-w-6xl mx-auto">
          <Fade duration={1500}>
            <h2 className="text-3xl text-center font-semibold mt-6">
              Highest Rated Game
            </h2>
          </Fade>
          <ReviewCard></ReviewCard>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
