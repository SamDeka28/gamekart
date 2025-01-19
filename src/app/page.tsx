"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
const testimonials = [
  {
    name: 'Yuvraj Ghule',
    role: 'Data Engineer, Amazon',
    quote: `Thank you for providing a great platform for learning.
            Recently, Amazon visited our campus, 
            and I was interviewed by Amazon and got
            the offer just because of Gamekart.
            Thanks a lot.`,
    image: `https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/
        JSBinCollaborativeJavaScriptDebugging6-300x160.png`,
  },
  {
    name: 'Priya Patel',
    role: 'Placed in TCS',
    quote: `It’s a very pleasant environment to 
            be on a very interactive learning platform
            which helps me to enhance my skill set to move
            forward in an IT marathon.`,
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png',
  },
  {
    name: 'Ravi Kumar',
    role: 'Placed in Swiss Bank',
    quote: `Gamekart helped me a lot to
crack the coding rounds/Interviews.`,
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png',
  },
  {
    name: 'Neha Singh',
    role: 'DSE, Infosys',
    quote: `I got very good problem-solving skills 
            in GC 6 classes. After completing this className, 
            I gained in-depth knowledge of data structures 
            and algorithms. Gamekart helped a lot to 
            crack the interviews.`,
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png',
  },
];


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] via-[#111111] to-[#2D2D2D]">
      <div className="px-8 md:px-[146px] pt-[30px] pb-20">
        {/**Header */}
        <div className="header">
          <div className="flex justify-between">
            <img src="/assets/Logo.png" alt="" className="h-[47px]" />
            <span className="text-white font-sans flex items-center gap-2 relative">
              <span className="z-10">Let's talk</span>
              <FaArrowRight />
              <img src="/assets/letstalkbg.png" className="absolute top-0 w-[100%] z-0 object-fill" />
            </span>
          </div>
        </div>
        {/**Hero section */}
        <div className="flex flex-col gap-[200px] md:gap-[300px] mt-[60px]">
          <p className="flex gap-14">
            <span className="text-white text-[12px]">/</span>
            <span className="text-white text-[12px] z-10">
              Professional gemekart experts,<br />
              provide a full package of game<br />
              development, software<br />
              engineering, and digital<br />
              transformation.<br />
            </span>
            <img src="/assets/gradienthome.png" className="absolute top-0 right-[10%] w-[80%] z-0" />
            <img src="/assets/gradientdark.png" className="absolute top-0 right-[10%] w-[80%] z-0" />
          </p>
          <div className="flex flex-col  gap-[25px] relative">
            <img src="/assets/objects.png" className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] object-contain absolute left-[-30%] -md:left-[18%] top-[40%] md:top-[40%] z-20" />
            {/**GLOWING CUBE */}
            <img src="/assets/cube.png" className="hidden md:block absolute md:w-[750px] bottom-[100%] md:bottom-36 right-[15%] z-20" />
            <img src="/assets/objects.png" className="hidden md:block h-[400px] w-[400px] object-contain absolute -right-[20%] bottom-10 z-20 rotate-180" />
            <p className="text-white text-[12px] tracking-[48%]">INNOVATION AT EVERY TURN</p>
            <p className="text-white text-3xl md:text-[116px] leading-[110%] flex flex-col z-30">
              <span className="text-[#9D9D9D]">TURN IDEAS</span>
              <span><span className=" text-[#9D9D9D]">INTO </span>/ INNOVATION /</span></p>
          </div>
        </div>
        {/**ABOUT GAMEKART */}
        <div>
          <div className="relative flex flex-col mt-40 md:mt-0">
            <img src="/assets/image.png" />
            <div className="md:absolute bottom-52">
              <img src="/assets/logoshort.png" className="w-[58px]" />
              <p className="text-3xl md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent">ABOUT<br />GAMEKART</p>
            </div>
            <div className="mt-6 md:w-[40%] self-end ">
              <p className="text-white leading-[220%]">
                GameKart Studios is a leading IT consultation company specializing in
                delivering cutting-edge technology solutions to businesses across
                diverse industries. Our team of experts provides comprehensive
                services, from strategic planning and design to implementation and
                optimization, with a focus on game development, software engineering,
                and digital transformation. We are dedicated to helping our clients
                achieve their goals through customized solutions that drive growth
                and enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**OUR EXPERTISE */}
      <div>
        <div className="relative flex flex-wrap items-center justify-center">
          <h1 className="md:absolute z-10 w-[100%] top-0 mt-[197px] text-3xl md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent text-center">Our Expertise</h1>

          <img src="/assets/gd.png" className="w-[100%] object-contain" />
          <div className="md:absolute flex justify-center md:w-[85%]">
            <img src="/assets/gdbg.png" className="hidden md:block"/>
            <div className="md:absolute w-[100%] px-8 md:px-[144px] py-[46px] gap-6 flex flex-col">
              <div className="flex justify-between  flex-wrap items-end">
                <h1 className="text-white text-[32px] font-bold">Game Development</h1>
                <span className="text-white italic text-sm">View Portfolio </span>
              </div>
              <p className="text-white text-sm font-normal">Bring your vision to life with immersive, interactive games for mobile, web, and desktop platforms. Whether it’s a
                stunning 2D platformer or a high-fidelity 3D experience, we excel in delivering gameplay and visuals that captivate.</p>
              <div className="flex flex-wrap flex-col gap-[6px] text-white">
                <div className="flex flex-wrap gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-max flex justify-center items-center flex-1 py-3 text-base">Mobile Development</p>
                  <p className="bg-[#74440040] min-w-max flex justify-center items-center flex-1 py-3 text-base">Unity 3D Game Development</p>
                  <p className="bg-[#002B7440] min-w-max flex justify-center items-center flex-1 py-3 text-base">Game LiveOps Services</p>
                </div>
                <div className="flex flex-wrap  gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-max flex justify-center items-center flex-1 py-3 text-base">Unreal Game Development</p>
                  <p className="bg-[#74440040] min-w-max flex justify-center items-center flex-1 py-3 text-base">HTML5 Game Development</p>
                  <p className="bg-[#002B7440] min-w-max flex justify-center items-center flex-1 py-3 text-base">Game Co Development</p>
                </div>
                <div className="flex flex-wrap  gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">PC Game Development</p>
                  <p className="bg-[#74440040]  min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">VR Game Development</p>
                  <p className="bg-[#002B7440] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">AR Game Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**2D 3D GAME ART */}
      <div className="relative mt-12 md:mt-0">
        <img src="/assets/objects.png" className="h-[200px] w-[200px] z-0 md:h-[550px] md:w-[550px] object-contain absolute -left-32 md:top[-20%] md:z-20" />
        <div className="relative flex items-center justify-center md:translate-y-[-5%]">

          <img src="/assets/gabg.png" className="w-[100%] object-contain hidden md:block" />
          <div className="md:absolute flex justify-center md:w-[85%]">
            <img src="/assets/gdbg.png" className="hidden md:block"/>
            <div className="md:absolute md:w-[100%] px-8 md:px-[144px] py-[46px] gap-6 flex flex-col">
              <div className="flex flex-wrap justify-between items-end">
                <h1 className="text-white text-[32px] font-bold">2D and 3D Game Art</h1>
                <span className="text-white italic text-sm">View Portfolio </span>
              </div>
              <p className="text-white text-sm font-normal">Our talented artists create visually stunning environments, characters, and assets for games. From concept art to
                fully rendered models, we craft artwork that enhances the player experience and brings your game world to life.
              </p>
              <div className="flex flex-col gap-[6px] text-white">
                <div className="flex flex-wrap gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">Game Concept Art</p>
                  <p className="bg-[#74440040]  min-w-[200px]  flex justify-center items-center flex-1 py-3 text-base">2D Game Art</p>
                  <p className="bg-[#002B7440]  min-w-[200px]  flex justify-center items-center flex-1 py-3 text-base">Lighting Art</p>
                </div>
                <div className="flex flex-wrap gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">3D Character Design</p>
                  <p className="bg-[#74440040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">3D Modelling</p>
                  <p className="bg-[#002B7440] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">Dummy text</p>
                </div>
                <div className="flex flex-wrap gap-[6px] md:gap-16">
                  <p className="bg-[#74000040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">3D Animation</p>
                  <p className="bg-[#74440040] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">AAA Game Art</p>
                  <p className="bg-[#002B7440] min-w-[200px] flex justify-center items-center flex-1 py-3 text-base">Dummy text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**WHY US */}
      <div className="flex flex-wrap flex-col px-8 items-center gap-[56px] md:translate-y-[-20%]">
        <div className="relative flex justify-center items-center">
          <img src="/assets/whyusg.png" className="z-10 md:w-[80%]" />
          <h1 className="absolute z-0 w-[100%] text-3xl md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent text-center">Why us</h1>
        </div>

        <div className="md:translate-y-[-70%] flex flex-col items-center gap-[56px]">
          <p className="text-white flex flex-wrap justify-center gap-2 text-3xl md:text-[32px]">
            Why choose
            <span className="font-bold min-w-min  z-0 text-wrap w-[100%]leading-[118%] bg-gradient-to-r from-[#FD6A48] to-[#A864FF] bg-clip-text text-transparent text-center">GameKart</span>
            Studios
          </p>

          <div className="flex flex-col gap-4 text-white w-[75%] pt-[30px] md:gap-5">
            <div className="flex flex-wrap gap-14">
              <div className="flex flex-wrap flex-1 flex-col gap-4 relative  md:pr-20">
                <div className="flex flex-wrap items-center gap-4" >
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/Group 2102.png" />
                  </div>
                  <span className="font-semibold font-sm min-w-max">Tailored Solutions</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Custom-built services aligned
                  with your
                  goals and vision.</p>
                <div className="hidden md:block md:absolute right-0 top-[110%]  hr bg-gradient-to-b from-[#AA64F900] via-[#AA64F9] to-[#AA64F900] w-[2px] h-[100px] self-center" />
              </div>
              <div className="flex  flex-1 flex-col gap-4 relative md:pr-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/Group 2103.png" />
                  </div>
                  <span className="font-semibold font-sm min-w-max">Expert Team</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Experienced developers, artists and
                  designers
                  dedicated to
                  excellence.</p>
                <div className="hidden md:block md:absolute right-0 top-[110%]  hr bg-gradient-to-b from-[#AA64F900] via-[#AA64F9] to-[#AA64F900] w-[2px] h-[100px] self-center" />

              </div>
              <div className="flex flex-1 flex-col gap-4 relative  md:pr-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/professional-services 1.png" />
                  </div>
                  <span className="font-semibold font-sm min-w-max">End-to-End Service</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Comprehensive solutions from
                  ideation
                  to post-launch support.</p>

              </div>
            </div>
            <div className="hidden md:block mt-10 hr bg-gradient-to-r from-[#00000058] via-[#373737] to-[#00000058] w-[100%] h-[1px] self-center" />
            <div className="flex mt-10 md:mt-0 flex-wrap gap-14">

              <div className="flex flex-1 flex-col gap-4  md:pr-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/high-quality 1.png" />
                  </div>
                  <span className="font-semibold font-sm">Quality Assurance</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Rigorously tested to deliver reliable
                  secure, and polished products.</p>
              </div>
              <div className="flex flex-1 flex-col gap-4  md:pr-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/Group.png" />
                  </div>
                  <span className="font-semibold font-sm">Cutting-Edge Technology</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Leverage the latest tools and
                  technologies
                  for optimal results.</p>
              </div>
              <div className="flex  flex-1 flex-col gap-4  md:pr-20">
                <div className="flex items-center gap-4">
                  <div className="bg-[#28272F] flex justify-center items-center w-[38px] h-[38px] p-[6px] rounded-md">
                    <img src="/assets/Group 2104.png" />
                  </div>
                  <span className="font-semibold font-sm">Cutting-Edge Technology</span>
                </div>
                <p className="font-light text-sm text-[#A1A1A4]">Leverage the latest tools and
                  technologies
                  for optimal results.</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/**ideas */}
      <div className="relative flex flex-col gap-[34px] mt-[108px] md:mt-0  md:translate-y-[-50%]">
        <h1 className="w-[100%] text-6xl md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent text-center opacity-[60%]">Gamekart</h1>
        <p className="text-white flex flex-col md:flex-row justify-center items-center gap-2 text-2xl md:text-[32px]">
          Let's Bring Your Ideas to Life with
          <p className="flex gap-2"><span className="font-bold z-0 w-[100%]leading-[118%] bg-gradient-to-r from-[#FD6A48] to-[#A864FF] bg-clip-text text-transparent text-center">GameKart</span>
          Studios?</p>
        </p>
        <p className="text-[#A1A1A4] flex justify-center gap-2 text-base px-8 text-center md:text-left">
          From designing breathtaking game worlds to creating engaging mobile interfaces and<br />
          soundscapes,Gamekart Studios has the expertise to make your project a success
        </p>
        <div className="md:flex flex-wrap items-center text-white justify-center mt-[68px] md:bg-[url('/assets/statbg.png')] h-max md:h-[200px] w-full object-contain bg-contain bg-no-repeat bg-center">
          <div className="flex flex-1 gap-[36px] justify-center items-center">
            <img src="/assets/Subtract.png" className="w-[55px] h-[55px]" />
            <div>
              <p className="font-bold text-2xl">90+</p>
              <p className="text-base font-normal">Clients</p>
            </div>
          </div>
          <div className="hr bg-gradient-to-b from-[#AA64F900] via-[#AA64F9] to-[#AA64F900] w-[2px] h-[100px] self-center" />

          <div className="flex flex-1 gap-[36px] justify-center items-center">
            <img src="/assets/Subtract.png" className="w-[55px] h-[55px]" />
            <div>
              <p className="font-bold text-2xl">30+</p>
              <p className="text-base font-normal">Countries</p>
            </div>
          </div>
          <div className="hr bg-gradient-to-b from-[#AA64F900] via-[#AA64F9] to-[#AA64F900] w-[2px] h-[100px] self-center" />

          <div className="flex flex-1 gap-[36px] justify-center items-center">
            <img src="/assets/Subtract.png" className="w-[55px] h-[55px]" />
            <div>
              <p className="font-bold text-2xl">50+</p>
              <p className="text-base font-normal">Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/**Testimonials */}
      <div className="mt-[200px] flex flex-col gap-[34px]  md:translate-y-[-30%]">
        <h1 className="w-[100%] text-6xl md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent text-center opacity-[60%]">Testimonials</h1>
        <p className="text-white text-center md:text-left flex justify-center gap-2 text-[32px]">
          What our Customers are saying
        </p>
        <TestimonialSlider />
      </div>
      {/**Contact */}
      <div className="mt-[84px] md:mt-[200px] flex flex-col justify-center items-center gap-[34px]  md:translate-y-[-30%] self-center">
        <div className="relative md:w-[60%] bg-[#292945] rounded-lg flex justify-center py-[26px] px-8 md:px-[96px] flex-col items-center">
          <img src="/assets/lowinglight.png" className="z-0 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] object-contain" />
          <img src="/assets/lowinglight.png" className="z-0 absolute -top-16 right-0 translate-x-[50%] rotate-180 object-contain" />
          <img src="/assets/lowinglight.png" className="z-0 absolute -bottom-0 left-0 -translate-x-[35%] translate-y-[50%] object-contain" />
          <div className="z-20">
            <div className="flex flex-col">
            <span className="relative z-10 font-bold text-3xl md:text-[40px] w-[100%] leading-[118%] bg-gradient-to-r from-[#FD6A48] to-[#A864FF] bg-clip-text text-transparent text-center">Contact us today</span>
            <span className="text-[#A1A1A4] mt--[30px] text-base">to start your journey with Gameskart Studios</span>
            </div>
            <div className="grid grid-cols-2 mt-[64px] gap-[27px] w-full">
              <div className="flex flex-col gap-[6px]">
                <label className="text-white text-[14px]">First Name</label>
                <input className="bg-[rgba(255,255,255,0.07)] w-full py-1  px-2 rounded-md  text-white"></input>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-white text-[14px]">Last Name</label>
                <input className="bg-[rgba(255,255,255,0.07)] w-full py-1  px-2 rounded-md  text-white"></input>
              </div>
              <div className="flex flex-col col-span-2 gap-[6px]">
                <label className="text-white text-[14px]">Email Address</label>
                <input className="bg-[rgba(255,255,255,0.07)] w-full py-1  px-2 rounded-md  text-white"></input>
              </div>
              <div className="flex flex-col col-span-2 gap-[6px]">
                <label className="text-white text-[14px]">Message</label>
                <textarea className="bg-[rgba(255,255,255,0.07)] w-full py-1 px-2 rounded-md text-white " rows={8}></textarea>
              </div>
              <div className="flex flex-col col-span-2 gap-[6px] items-center md:items-end">
                <button className="bg-gradient-to-r from-[#FD6A48] to-[#A864FF] w-max py-[10px] px-[48px] rounded-md font-bold">Get In touch</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
      {/**Stay in loop */}
      <div className="px-8 md:px-[135px]">
        <div className="bg-gradient-to-r flex-wrap from-[#00000000] via-[#000000] to-[#00000000] md:px-[56px] py-[46px] flex items-center justify-between gap-20 md:gap-[183px]">
          <div className="flex flex-col gap-[19px] flex-1">
            <p className="text-[30px] text-white font-medium min-w-max">Stay in the loop</p>
            <p className="text-white">Subscribe to receive the latest news and updates about TDA.
              We promise not to spam you! </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.07)] flex h-[48px] flex-1 rounded-lg pl-[18px]">
            <input className="w-full py-1  px-2   text-white bg-transparent " placeholder="Enter email address"></input>
            <button className="bg-gradient-to-r m-[5px] flex items-center from-[#FD6A48] to-[#A864FF] w-max py-[10px] px-[48px] rounded-lg font-bold">Continue</button>
          </div>
        </div>
      </div>
      {/**We are unique */}
      <div className="relative flex justify-center items-center flex-col">
        <img src="/assets/girl_12 1.png" className="w-[386px] z-10" />
        <img src="/assets/lowinglight.png" className="absolute z-0" />
        <h1 className="w-[100%] text-[48px] md:text-[100px] font-medium leading-[118%] bg-gradient-to-b from-[#9D9D9D] from-5% via-[#2B2B2B] via-100% to-[#373737] bg-clip-text text-transparent text-center opacity-[60%]">We Are Unique</h1>
      </div>
      {/**Footer */}
      <div className="mt-20 px-8 bg-gradient-to-r from-[#070707] to-[#141414] py-[80px] flex-wrap md:px-[108px]  grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-[115px]  border-b-[1px] border-[#D2D2D2]">
        <div className="flex flex-col gap-[40px] md:col-span-1 col-span-2  justify-between">
          <img src="/assets/Logo.png" className="w-[173.28px]" />
          <p className="text-gray-400 md:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="flex flex-col gap-[15px] text-white font-medium justify-between">
          <p className=" ">About us</p>
          <p className="text-gray-400 md:text-white flex flex-col  gap-[5px]">
            <span>Zeux</span>
            <span>Portfolio</span>
            <span>Careers</span>
            <span>Contact us</span>
          </p>
        </div>
        <div className="flex flex-col gap-[15px] text-white font-medium  justify-between">
          <p className="">Contact us</p>
          <p className="text-gray-400 md:text-white flex flex-col gap-[10px] text-sm">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            <span>+908 89097 890</span>
          </p>
        </div>
        <div className="flex gap-[15px] md:col-span-1 col-span-2  text-white font-medium self-end">
          <div className="bg-gradient-to-b from-[#FD6A48] to-[#A964FC] w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <FaFacebookF />
          </div>
          <div className="bg-gradient-to-b from-[#FD6A48] to-[#A964FC] w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="bg-gradient-to-b from-[#FD6A48] to-[#A964FC] w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <FaTwitter />
          </div>
          <div className="bg-gradient-to-b from-[#FD6A48] to-[#A964FC] w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <FaTwitter />
          </div>
          <div className="bg-gradient-to-b from-[#FD6A48] to-[#A964FC] w-[34px] h-[34px] rounded-full flex justify-center items-center">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="text-center text-white p-[30px] text-[13px]">
        Copyright ® 2024 Gamekart
      </div>
    </div>
  );
}

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto md:py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-6 sm:p-10 h-auto justify-center items-center flex"
            >
              <div className="bg-[#292945] shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex gap-4 sm:gap-6 min-h-[280px] w-full">
                {/* Testimonial Text */}
                <div className="md:flex-1 flex flex-col gap-4">
                  <div className="flex space-x-1 mt-2 sm:mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 3 ? 'fill-[#FFB820]' : 'fill-[#CED5D8]'}`}
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-sm sm:text-base">{testimonial.quote}</p>
                  <div>
                    <span className="text-white text-lg sm:text-2xl font-semibold">
                      {testimonial.name}
                    </span>
                    <div className="text-[#9BA5FE] font-normal text-sm sm:text-base">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Testimonial Image */}
                <div className="hidden md:flex md:flex-1 relative">
                  <img
                    src="/assets/man1.png"
                    alt=""
                    className="absolute w-[70%] sm:w-[85%] object-contain -bottom-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? 'bg-[#FC6A48] scale-125' : 'bg-[#AB64F7]'
            } transition-all duration-300`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Buttons for Navigation
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
    </div>
  );
};