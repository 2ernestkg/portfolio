import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const words = [
  "Back-End Developer",
  "Front-End Developer",
  "Flutter Developer",
];
let isDeleting = false;
let currentIndex = 0;
let charIndex = 0;
let timeoutRef: NodeJS.Timeout;

const ms = 100;
const typeRoles = (el: HTMLElement) => {
  const currentWord = words[currentIndex];
  if (isDeleting) {
    el.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex == 0) {
      isDeleting = false;
      currentIndex++;
      if (currentIndex == words.length) {
        currentIndex = 0;
      }
    }
    timeoutRef = setTimeout(() => {
      typeRoles(el);
    }, ms);
  } else {
    el.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex == currentWord.length) {
      isDeleting = true;
      timeoutRef = setTimeout(() => {
        typeRoles(el);
      }, 1000);
    } else {
      timeoutRef = setTimeout(() => {
        typeRoles(el);
      }, ms);
    }
  }
};
function About() {
  const cursorRef = useRef(null);
  const typewriterRef = useRef(null);
  useEffect(() => {
    if (typewriterRef.current !== null) {
      typeRoles(typewriterRef.current);
    }
    return () => {
      clearTimeout(timeoutRef);
    };
  }, []);

  return (
    <section className="h-[100vh] relative overflow-hidden block" id="about">
      <div className="w-full px-[15px] mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px]">
        <div className="py-[60px]">
          <div className="flex flex-wrap -mr-[15px] -ml-[15px]">
            <div className="sm:flex-grow-0 sm:flex-shrink-0 sm:basis-[50%] relative w-full min-h-[1px] px-[15px]">
              <div className="py-[50px] px-0 pt-[100px] sm:py-[140px] sm:px-0">
                <h1 className="sm:text-[40px] lg:text-[50px] font-bold leading-[1.28] -tracking-[1.25px] mb-5 sm:mb-[20px] md:mb-10 text-white text-opacity-70">
                  Hi, I’m Ernest Kuttubaev <br />
                  <span ref={typewriterRef} className="text-white"></span>
                  <span ref={cursorRef} className="text-white">
                    |
                  </span>
                </h1>
                <p className="text-[14px] sm:text-[16px] max-w-full opacity-60 font-normal not-italic leading-[1.88] tracking-normal text-white sm:max-w-[90%]">
                  A software engineer with 13 years of experience
                </p>
                <div className="mt-[30px]">
                  <a
                    href="#"
                    className="text-[16px] font-bold text-white mb-0 cursor-pointer p-0 no-underline bg-transparent transition-colors duration-300 ease-in opacity-90"
                  >
                    More{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[14px] ml-[10px]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:flex-grow-0 sm:flex-shrink-0 min-h-px sm:basis-[50%] relative sm:max-w-[50%] w-full min-h-[1px] px-[15px]">
              <div className="pt-[18px] ml-0 w-full h-full sm:pt-[18px] sm:ml-[30px] sm:w-[125%] sm:h-full relative visible animate-fadeInRight">
                <img
                  src="assets/images/resume-header.png"
                  alt=""
                  className="overflow-clip inline"
                />
                <div className="absolute top-[6%] -left-[5%] animate-spin-slow">
                  <img
                    src="assets/images/do-s-1.svg"
                    srcSet="assets/images/do-s-1.svg 1.2x"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
