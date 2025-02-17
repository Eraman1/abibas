// import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import VideoCarousel from "../components/VideoCarousal";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import BannerCarousel from "../components/VideoCarousal";

function Home() {
  return (
    <>
      {/* <BannerCarousel /> */}
      <VideoCarousel />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <ChooseUs />
      <Banner />
      {/* <Testimonials /> */}
      <Faq />
      <Download />
    </>
  );
}

export default Home;
