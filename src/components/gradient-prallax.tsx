import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function BackgroundGradient() {
  return (
    <MouseParallaxContainer
      className="!absolute inset-0 h-full w-full !overflow-visible"
      globalFactorY={0.3}
      globalFactorX={0.3}
      resetOnLeave
    >
      <MouseParallaxChild factorY={0.3} factorX={0.3}>
        <div className="absolute left-1/2 top-[-200px] z-[0] aspect-square w-[457px] -translate-x-1/2 scale-75 rounded-full bg-gradient-to-tl from-[#5f66f6] via-[#c28afc] to-[#49426f] blur-[100px] md:-top-[650px] md:left-1/2 md:w-[984px] md:blur-[200px]"></div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
