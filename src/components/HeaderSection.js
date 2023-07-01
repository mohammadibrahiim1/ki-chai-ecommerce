import React from "react";
import { HeaderCarousel } from "./HeaderCarousel";
import { HCard } from "./HCard";

const HeaderSection = () => {
  return (
    <div>
      <section>
        <HeaderCarousel></HeaderCarousel>
        <HCard></HCard>
      </section>
    </div>
  );
};

export default HeaderSection;
