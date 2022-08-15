import React from "react";
import {
  HeroSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Block4fun" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
      </Page>
    </>
  );
}
