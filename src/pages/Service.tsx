function Service() {
  return (
    <section className="relative py-[125px] px-0 overflow-hidden" id="service">
      <div className="w-full px-[15px] mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px]">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="mx-auto xs:basis-2/5 text-center">
            <div
              className="text-[50px] text-white font-bold leading-[1.28]"
              data-wow-duration=".9s"
              data-wow-delay=".1s"
            >
              <h1>What I Do</h1>
              <p className="font-normal opacity-[0.6] text-[16px] leading-[1.88]">
                Yeah, but your scientists were so preoccupied with whether or
                not they could, they didn't stop
              </p>
            </div>
          </div>
          <div className="mx-auto xs:basis-9/10">
            <div className="sm:py-[40px] text-white">
              <div className="flex flex-wrap -mx-[15px]">
                <div className="xs:basis-1/3 xs:max-w-1/3 relative w-full px-[15px] min-h-px">
                  <div
                    className=""
                    data-wow-duration=".9s"
                    data-wow-delay=".13s"
                  >
                    <div className="w-[72px] h-[72px] grid place-items-center rounded-[50%] bg-white ml-[25px] mb-[70px] shadow-do-icon">
                      <img
                        src="assets/images/do-1.svg"
                        alt=""
                        className="max-w-full"
                      />
                      <div className="absolute top-[5px] left-[15px] -z-[1]">
                        <img
                          src="assets/images/do-s-1.svg"
                          alt=""
                          className="max-w-full"
                        />
                      </div>
                    </div>
                    <h3 className="-tracking-[0.63px] text-[25px] font-semibold leading-[1.2]">
                      User Experience Design
                    </h3>
                    <p className="opacity-[0.6] text-[16px] leading-[1.88]">
                      Yeah, but your scientists were so he preoccupied with
                      whether.
                    </p>
                  </div>
                </div>
                <div className="xs:basis-1/3 xs:max-w-1/3 relative w-full px-[15px] min-h-px">
                  <div
                    className=""
                    data-wow-duration=".9s"
                    data-wow-delay=".13s"
                  >
                    <div className="w-[72px] h-[72px] grid place-items-center rounded-[50%] bg-white ml-[25px] mb-[70px] shadow-do-icon">
                      <img
                        src="assets/images/do-2.svg"
                        alt=""
                        className="max-w-full"
                      />
                      <div className="absolute top-[5px] left-[15px] -z-[1]">
                        <img
                          src="assets/images/do-s-2.svg"
                          alt=""
                          className="max-w-full"
                        />
                      </div>
                    </div>
                    <h3 className="-tracking-[0.63px] text-[25px] font-semibold leading-[1.2]">
                      Front-end Development
                    </h3>
                    <p className="opacity-[0.6] text-[16px] leading-[1.88]">
                      Yeah, but your scientists were so he preoccupied with
                      whether.
                    </p>
                  </div>
                </div>
                <div className="xs:basis-1/3 xs:max-w-1/3 relative w-full px-[15px] min-h-px">
                  <div
                    className=""
                    data-wow-duration=".9s"
                    data-wow-delay=".13s"
                  >
                    <div className="w-[72px] h-[72px] grid place-items-center rounded-[50%] bg-white ml-[25px] mb-[70px] shadow-do-icon">
                      <img
                        src="assets/images/do-3.svg"
                        alt=""
                        className="max-w-full"
                      />
                      <div className="absolute top-[5px] left-[15px] -z-[1]">
                        <img
                          src="assets/images/do-s-3.svg"
                          alt=""
                          className="max-w-full"
                        />
                      </div>
                    </div>
                    <h3 className="-tracking-[0.63px] text-[25px] font-semibold leading-[1.2]">
                      Brand Identity Design
                    </h3>
                    <p className="opacity-[0.6] text-[16px] leading-[1.88]">
                      Yeah, but your scientists were so he preoccupied with
                      whether.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute visible -top-[40px] -left-[30px]">
        <img
          src="assets/images/keyboard-dark.png"
          srcSet="assets/images/keyboard-dark.png 2x"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
export default Service;
