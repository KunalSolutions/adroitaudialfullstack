import Alert from "@components/Alert";
import HeroSection from "@components/HomePage/HeroSection";
import ProductSection from "@components/HomePage/ProductSection";
import NewArrival from "@components/HomePage/NewArrival";
import { useGetProductsQuery } from "@slices/productApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import Offers from "@components/HomePage/Offers";
import UpComing from "@components/HomePage/UpComing";
import BigSaving from "@components/HomePage/BigSaving";
import Features from "@components/HomePage/Features";
import AboutSection from "./AboutSection";
import BrandSlider from "./BrandSection";
import ProductSlider from "./ProductSlider";

const HomeScreen = () => {
  const { pageNumber = 1, keyword = "" } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGetProductsQuery({
    pageNumber,
    keyword,
  });

  return (
    <div className="bg-white">
      	<HeroSection id="#products" />
        <AboutSection />
        <ProductSlider />
        <NewArrival />  
        <BrandSlider />
        {/* <ProductSection /> */}
        {/* <Features />   */}

        {/* <BigSaving />
        <Offers />
        <UpComing /> */}
    </div>
  );
};

export default HomeScreen;