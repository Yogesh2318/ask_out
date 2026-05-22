import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackgroundInteractive = ({ children }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log(container);
    }, []);

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1
                    }}
                    options={{
                        autoPlay: true,
                        background: {
                            color: {
                                value: "#ffe6f0" // Light pink background
                            }
                        },
                        fullScreen: {
                            enable: true,
                            zIndex: -1
                        },
                        detectRetina: true,
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: ["push", "repulse"] // Add particles and repulse on click
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble", // Bubble/ripple effect on hover
                                    parallax: {
                                        enable: true,
                                        force: 60,
                                        smooth: 10
                                    }
                                },
                                resize: {
                                    enable: true,
                                    delay: 0.5
                                }
                            },
                            modes: {
                                push: {
                                    quantity: 4 // Add 4 new particles on click
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.4,
                                    speed: 1,
                                    factor: 100,
                                    easing: "ease-out-quad"
                                },
                                bubble: {
                                    distance: 200, // Ripple distance
                                    duration: 2,
                                    size: 15, // Particles grow on hover
                                    opacity: 1,
                                    mix: false
                                },
                                grab: {
                                    distance: 150,
                                    links: {
                                        opacity: 0.8
                                    }
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: ["#ff1493", "#ff69b4", "#ffb6c1", "#ffc0cb", "#fff0f5"]
                            },
                            move: {
                                direction: "bottom",
                                enable: true,
                                outModes: {
                                    default: "out",
                                    bottom: "out",
                                    left: "out",
                                    right: "out",
                                    top: "out"
                                },
                                speed: 1.5,
                                straight: false,
                                attract: {
                                    enable: false,
                                    rotate: {
                                        x: 600,
                                        y: 1200
                                    }
                                }
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 100,
                                limit: 300 // Max particles
                            },
                            opacity: {
                                value: { min: 0.3, max: 0.8 },
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    minimumValue: 0.3,
                                    sync: false
                                }
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                value: { min: 3, max: 8 },
                                animation: {
                                    enable: true,
                                    speed: 2,
                                    minimumValue: 3,
                                    sync: false
                                }
                            },
                            wobble: {
                                distance: 20,
                                enable: true,
                                speed: {
                                    min: 5,
                                    max: 15
                                }
                            },
                            collisions: {
                                enable: true,
                                mode: "bounce",
                                bounce: {
                                    horizontal: {
                                        value: 1
                                    },
                                    vertical: {
                                        value: 1
                                    }
                                }
                            }
                        }
                    }}
                />
            )}
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </>
    );
};

export default ParticlesBackgroundInteractive;