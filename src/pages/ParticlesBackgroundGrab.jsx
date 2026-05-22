import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackgroundGrab = ({ children }) => {
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
                                value: "#ffe6f0"
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
                                    mode: "push" // Add hearts on click
                                },
                                onHover: {
                                    enable: true,
                                    mode: ["grab", "bubble"], // Connect lines + grow on hover
                                    parallax: {
                                        enable: true,
                                        force: 60,
                                        smooth: 10
                                    }
                                },
                                resize: {
                                    enable: true
                                }
                            },
                            modes: {
                                push: {
                                    quantity: 5
                                },
                                grab: {
                                    distance: 200,
                                    links: {
                                        opacity: 0.6,
                                        color: "#ff69b4"
                                    }
                                },
                                bubble: {
                                    distance: 250,
                                    duration: 2,
                                    size: 12,
                                    opacity: 1
                                },
                                repulse: {
                                    distance: 150,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: ["#ff1493", "#ff69b4", "#ffb6c1", "#ffc0cb"]
                            },
                            links: {
                                color: "#ffb6c1",
                                distance: 150,
                                enable: false, // Only show on hover via grab mode
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                direction: "bottom",
                                enable: true,
                                outModes: {
                                    default: "out"
                                },
                                speed: 2,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true
                                },
                                value: 80
                            },
                            opacity: {
                                value: { min: 0.4, max: 0.9 },
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
                                value: { min: 4, max: 10 },
                                animation: {
                                    enable: true,
                                    speed: 3,
                                    minimumValue: 4,
                                    sync: false
                                }
                            },
                            wobble: {
                                distance: 15,
                                enable: true,
                                speed: {
                                    min: 8,
                                    max: 20
                                }
                            },
                            collisions: {
                                enable: true,
                                mode: "bounce"
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

export default ParticlesBackgroundGrab;