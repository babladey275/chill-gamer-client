import ReviewCard from "../components/ReviewCard";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <ReviewCard></ReviewCard>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
