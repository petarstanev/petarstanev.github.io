import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  //   const particlesLoaded = useCallback(
  //     async (container: Container | undefined) => {
  //       await console.log(container);
  //     },
  //     []
  //   );

  return (
    <Particles
      id="tsparticles"
      className="absolute z-[-1]"
      init={particlesInit}
    //   height='100em'
      //   loaded={particlesLoaded}
      options={{
        fullScreen: true,
        background: {
          color: {
            value: "#f8fafc", //state-50
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#a78bfa",//violet-400
          },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;
