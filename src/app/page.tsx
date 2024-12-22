import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import Products from "@/components/Product";
import Extension from "@/components/Extension";
import Customized from "@/components/Customize";
import Try from "@/components/Try";
import Favoraite from "../components/Favoraite";
import Clients from "@/components/Client";
import Sponsors from "@/components/Sponsors";
import Data from "@/components/Data";
import Work from "@/components/Work";
import Plan from "@/components/Plan";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Products />
      <MainSection />
      <Extension />
      <Customized />
      <Plan />
      <Work />
      <Data />
      <Sponsors />
      <Favoraite />
      <Clients />
      <Try />
      <Footer />
    </>
  );
}
