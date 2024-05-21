import {
  DesktopGeometricFigures,
  MobileGeometricFigures,
} from "~/app/_components/geometric-figures";

const Hero = ({ viewport }: { viewport: "mobile" | "desktop" }) => {
  if (viewport === "desktop") return <DesktopGeometricFigures />;
  if (viewport === "mobile") {
    return <MobileGeometricFigures />;
  }
  return null;
};

export default Hero;
