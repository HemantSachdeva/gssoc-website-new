import Head from "next/head";
import Image from "next/image";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import SocialFollow from "../components/homepage/SocialFollow";
import Tilt from "react-tilt";
import ThemeChanger from "../components/Toggler";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Aos from "aos";
import "aos/dist/aos.css";
import Bighex from "../components/BgAssets/Bighex";
import EllipseBox from "../components/BgAssets/EllipseBox";
import SmallHex from "../components/BgAssets/SmallHex";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Favicon/favicon.png"
        />
      </Head>
      {/* Bg assets */}
      <div className="hidden lg:block 3xl:hidden">
        <div className="absolute bottom-80 right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
            alt="bg"
          />
        </div>
        <div className="absolute w-full left-0 -top-10 right-0">
          <Bighex />
        </div>
        <div className="absolute top-0 left-0">
          <Hex1 />
        </div>
        <div className="absolute top-0 left-0">
          <Hex2 />
        </div>
        <div className="absolute top-0 left-48">
          <EllipseBox2 />
        </div>
        <div className="absolute top-10 -left-20">
          <EllipseBox />
        </div>
        <div className="absolute top-0">
          <SmallHex />
        </div>
      </div>
      <SocialFollow />
      <div className="absolute object-right text-xs text-right right-1 dark:bg-primary_orange-0 px-2 animate-pulse py-2 rounded-full opacity-80 bg-black top-20 md:hidden">
        <ThemeChanger />
      </div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <p className="text-black dark:text-white text-6xl font-sans font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GSSoC </span>
              2022
              <p className="mt-2">is here!</p>
            </p>
            <p className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 dark:text-white mb-24">
              GirlScript Summer of Code is a 3-month long
              <br />
              <span className="text-primary_orange-0">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
              <br />
              <b> 1st March - 31st May 2022 </b>
            </p>
            <div className="flex items-center mb-10 md:mb-52 lg:mb-56">
              <a className="" href="#card-1">
                <button
                  id="CTA-button"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
                >
                  Register Here
                </button>
                {/* <Box
                  as="button"
                  height="50px"
                  width="200px"
                  lineHeight="1.2"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  border="0px"
                  px="8px"
                  borderRadius="15px"
                  fontSize="24px"
                  fontWeight="semibold"
                  bg="#FF7A19"
                  borderColor="##b55712"
                  color="#ffffff"
                  _hover={{ bg: "#b55712" }}
                  _active={{
                    bg: "#FF7A19",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  Register Here
                </Box> */}
              </a>
              <a data-aos="fade-down" href="#Learn_more">
                <p className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                  Learn More
                </p>
              </a>
            </div>
          </div>

          <div data-aos="fade-down" className="hero__image hidden md:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                <img
                  src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/Saly-13.svg"
                  alt="hero-image"
                  className="dark:invert dark:hue-rotate-180"
                />
              </div>
            </Tilt>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mb-24">
            <div
              className="border-8 rounded drop-shadow-xl border-black dark:border-white"
              data-aos="flip-left"
              data-aos-duration="700"
            >
              <img
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/Rectangle%20(1).png"
                height="453"
                width="420"
                alt="Rectangle light"
              />
            </div>
          <div className="basis-full md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            {/* <img
              className=" mt-4 mb-8 md:mb-9 md:mt-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
            /> */}
            {theme === "light" ? (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GirlScript_logo_Black.png?raw=true"
                alt="logo"
              />
            ) : (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://raw.githubusercontent.com/GSSoC-Web/gssoc-assets/main/Logos/GsLogo_White.png"
                alt="logo"
              />
            )}
            <p className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              About <span className="text-primary_orange-0">GirlScript </span>
              Foundation
            </p>
            <p className="dark:text-white font-serif text-1xl text-black-100">
              The GirlScript Foundation is one of the leading foundations in
              India. It has successfully completed Five Years of educating young
              minds through robust initiatives. It aims to change lives by
              imparting tech education and relevant skills while fostering
              diversity. Apart from this, the Foundation is one of the world’s
              largest tech community for students to polish and nurture their
              technical skills. Our tremendous endeavors curb the gap to offer a
              technophilic environment and revolutionize the tech domain by
              promoting, sharing, and spreading knowledge equally to every
              individual.
            </p>
            {/* <button className="bg-primary_orange-0 rounded-xl font-bold py-3 w-full text-white dark:text-gray-800 mt-5">
              Wanna know more about GIRLSCRIPT?
            </button> */}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center bg-[#FFECDE] dark:bg-black flex-wrap rounded-xl mb-24">
          <div className="w-560px px-4 pt-3 lg:text-right rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
            {theme === "light" ? (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
                alt="Learn More light"
              />
            ) : (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_White.png?raw=true"
                alt="Learn More dark"
              />
            )}
            <p className="text-primary_orange-0 text-left font-semibold font-sans text-4xl 2.25rem 3rem mb-10 lg:w-[570px]">
              <h1 className="dark:text-white text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </h1>
              Summer of Code
            </p>
            <p className="dark:text-white font-serif text-left text-xl">
              GirlScript Summer Of Code is a three-month-long Open-Source
              Program conducted every summer by the Girlscript Foundation. With
              constant efforts, participants contribute to numerous projects
              under the extreme guidance of skilled mentors over these months.
              With such exposure, students begin to contribute to real-world
              projects from the comfort of their homes. GirlScript Summer Of
              Code has witnessed active participation over the years, and the
              2022 edition aims to carry the legacy with a promising impact.
            </p>
          </div>

          <div className="w-560px px-4 pt-3 lg:text-left rounded-xl md:w-1/2 lg:my-4 lg:px-10 lg:py-10 lg:w-1/2">
            {/* <h1>GSSOC 2021 by the numbers</h1> */}
            {theme === "light" ? (
              <img
                className="mt-3 mb-3 md:mt-0"
                id="Learn_more"
                src="https://user-images.githubusercontent.com/64256342/152652343-d9c8d7c0-2cb4-401e-aef0-f4aed14f7731.svg"
              />
            ) : (
              <img
                className="mt-3 mb-3 md:mt-0"
                id="Learn_more"
                src="https://user-images.githubusercontent.com/64256342/152652299-9d3ac037-628b-46bb-ba07-fe5f2d4587b9.svg"
              />
            )}
          </div>
        </div>
        {/* <div className="organisation mb-24">
          <p className="font-sans font-semibold dark:text-white text-center text-gray-800 text-4xl 2.25rem 3rem mb-8">
            Some of the <br />
            <span className="text-[#511A97] dark:text-primary_orange-0 text-4xl 2.25rem 3rem">
              participating organisations!
            </span>
          </p>
          <div className="org__box flex flex-row items-center justify-center flex-wrap">
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            />
            <div>
              <p className="font-sans font-medium text-4xl dark:text-white text-gray-800">
                and more ...
              </p>
            </div>
          </div>
        </div> */}
        <div className="be-part-of">
          <p className="font-sans font-semibold text-center dark:text-white text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GSSoC 2022
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="container my-12 mx-auto"
          >
            <div
              className="flex flex-wrap justify-between -mx-1 lg:-mx-4 md:justify-items-stretch"
              id="card-1"
            >
              {/* Card-1 */}
              <Card
                title="Start your Journey"
                content="If you have basic git skills or are first timers or even veteran developers, GirlScript Summer of Code would give you a taste of contributing in a long open source projects. Continuously for 3 months you will contribute to your assigned projects under guidance of experienced mentors. Register yourself as a participant for GSSoc 2022 here. "
                btntext="Register to Participate"
                link="https://forms.gle/FHtuuhW17hv2dqua8"
              />
              {/* Card-2 */}
              <Card
                title="Lead the Pack"
                content="Mentors are the experts and take the lead of the open-source project team. They guide the fellow participants at each stage in a road map of the project. They are the backbone of team and are available throughout the summer to review the pull requests and suggest betterment. Apply to be a mentor at Girlscript summer of code and be the foundation of your team."
                btntext="Register to Mentor"
                link="https://forms.gle/4F3aBfdt6DC6bkVT6"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="container my-12 mx-auto "
          >
            <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                title="Inviting Projects &amp; NGOs"
                content="If you are an organization with a project idea in mind, a website or an app then this is the golden opportunity to become a part of an awesome community. The budding developers under the guidance of expert mentors will work on your projects and strive to achieve the best version. Apply and let’s collaborate together because Together Everyone Achieves More."
                btntext="Submit your Project"
                link="https://forms.gle/vbLVda6KNQGSbzZ59"
              />
              {/* Card-4 */}
              <Card
                title="Add a Shade to GSSOC"
                content="Sponsors with their precious resources make it possible for GirlScript to conduct the entire event smoothly. They make it possible to encourage talent by enabling us to give perks to our top participants. Hence as a token of gratitude, we provide great publicity on our social platforms and exposure on media about our sponsors."
                btntext="Sponsor Us"
                link="https://forms.gle/fkzq3xQ7nh2CbrA78"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sponsors */}
      {/* <div className="sponsors__container flex flex-row justify-center">
        <div className="sponsors__wrapper flex flex-col w-[1136px] mt-[93px]">
          <div className="sponsors__header mb-9">
            <p className="font-sans font-semibold dark:text-white text-gray-800 text-4xl leading-10">
              Our Sponsors
            </p>
          </div>
          
          <div className="sponsors__card__container flex flex-row justify-between">

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="700"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl mb-9">
                Gold Sponsor
              </p>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="700"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/do_blue.svg"
                alt="logo"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="700"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Silver Sponsor
              </p>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="700"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/linode.svg"
                alt="logo"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="700"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Bronze Sponsor
              </p>
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="700"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/honeybadger.svg"
                alt="logo"
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="700"
            className="dark:bg-white other__sponsors px-9 py-9 shadow-xl rounded mt-9"
          >
            <div className="other__sponsors__title">
              <p className=" dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Other Sponsors
              </p>
            </div>
            <div className="sponsors__row__one flex flex-row mb-9">
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/taskade-logo.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sticker-mule.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/xyz-logo-color.png"
                alt="logo"
              />
            </div>
            <div className="sponsors__row__two flex flex-row">
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sketch-logo-light.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/egghead_logo.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/ORM_logo_red_rgb.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* Schedule */}
      {/* <Schedule /> */}
      <div className="schedule__container flex flex-col items-center mb-48 ">
        <div className="schedule__overview mt-24 relative">
          <p className="font-sans font-semibold text-3xl ml-5 mb-4 dark:text-white">
            <span className="text-primary_orange-0">Schedule</span> of GSSoC
            2022!
          </p>
          {theme === "light" ? (
            <img
              id="Learn_more"
              className="mb-10"
              src="https://user-images.githubusercontent.com/64256342/152652419-27cc707a-628e-4f6e-bc80-e7157ecfcfe1.svg"
            />
          ) : (
            <img
              id="Learn_more"
              className="mb-10"
              src="https://user-images.githubusercontent.com/64256342/152650154-ddc67996-9855-45e8-b2bc-287a8b07b2fc.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
