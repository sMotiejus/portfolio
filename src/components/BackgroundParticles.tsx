import {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import useIsMobile from "../hooks/useIsMobile.tsx";

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        initParticlesEngine(loadFull).then(() => setInit(true));
    }, []);

    return init ? (
        <Particles
            id="tsparticles"
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {onHover: {enable: true, mode: "repulse"}},
                    modes: {repulse: {distance: 150, duration: 0.4}},
                },
                particles: {
                    move: {enable: true},
                    number: {value: isMobile ? 60 : 160},
                    shape: {type: "circle"},
                    size: {value: {min: 1, max: 3}},
                    links: {
                        distance: isMobile ? 125 : 175,
                        enable: true,
                        opacity: 0.3,

                    },
                },
                detectRetina: true,
            }}
        />
    ) : null;
}

export default BackgroundParticles;