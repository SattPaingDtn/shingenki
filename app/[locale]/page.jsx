import Hero from "@components/Hero";
import OurExpertise from "@components/OurExpertise";
import OurService from "@components/OurService";
import WorkingWith from "@components/WorkingWith";

const Home = () => {
  return (
    <section className="pt-20">
      <Hero />
      <OurService />
      <OurExpertise />
      <WorkingWith />
    </section>
  );
};

export default Home;
