import Featured from "../../../components/user/featured/Featured";
import FeaturedProperties from "../../../components/user/featuredProperties/FeaturedProperties";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/user/header/Header";
import MailList from "../../../components/user/mailList/MailList";
import Navbar from "../../../components/user/navbar/Navbar";
import PropertyList from "../../../components/user/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
