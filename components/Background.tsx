import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Background = (props: { theme: "dark" | "light" }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      container?.loadTheme(props.theme);
    },
    [props.theme]
  );

  return (
    <Particles
      id="tsparticles"
      className="absolute z-[-1]"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        themes: [
          {
            name: "light",
            default: {
              mode: "light",
              value: true,
            },
            options: {
              background: {
                color: "#f1f5f9", //state-100
              },
            },
          },
          {
            name: "dark",
            options: {
              default: {
                mode: "dark",
                value: true,
              },
              background: {
                color: "#1e293b", //state-800
              },
            },
          },
        ],
        fullScreen: true,
        fpsLimit: 120,
        particles: {
          color: {
            value: "#a78bfa", //violet-400
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

Background.displayName = 'Background';
export default Background;
