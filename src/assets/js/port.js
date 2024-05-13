import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    // 사용한다고 선언

    const horSection = gsap.utils.toArray(".port__item")

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top 30px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false
        }
    })
}