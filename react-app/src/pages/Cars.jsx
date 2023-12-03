// import carImage from "../assets/react.svg";
import Header from "../components/Header";
import Footer from "../components/FooterComponent";
import Sidebar from "../components/SidebarComponent";

const CarsPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <img src="./car.jpeg" alt="" />
      <Footer />
      {/* <img src={carImage} alt="" /> */}
    </>
  );
};

export default CarsPage;
