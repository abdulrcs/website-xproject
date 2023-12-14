import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import OverviewTS from "../../components/techsymphony/OverviewTS";
import SubTitleExtra from "../../components/SubTitleExtra";
import ButtonPrimary from "../../components//ButtonPrimary";
import Guest from "../../components/techsymphony/Guest";
import { guestPhoto1,name } from "../../assets";
import SubTitle from "../../components/SubTitle";
import Venue from "../../components/techsymphony/Venue";

const TechSymphony = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Techno Symphony" link="#about-ts" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-ts">
        <SubTitleExtra title="Overview" sub="Techno Symphony" />
        <OverviewTS desc="Techno Syhmphony merupakan rangkaian terakhir acara X-Project 9.0, acara ini bertujuan mengenalkan tentang Rumpun Teknik Informatika ke mahasiswa baru serta menjadi ajang kreativitas mahasiswa baru, selain itu kegiatan ini menjadi bentuk wadah apresiasi untuk mahasiswa di berbagai kegiatan." />
        <SubTitleExtra title="Guest Star" sub="After Party" />
        <Guest img={guestPhoto1} guest={name} />
         <div className="mt-[1rem]">
          <SubTitleExtra title="Pembelian Ticket" sub="Techno Symphony" />
          <div className="flex mb-[10rem] items-center md:justify-center">
        <ButtonPrimary text="Daftar" target="_blank" link="https://forms.gle/tvawhyEzjgZCYuAeA" />
         </div>
      </div>
        <SubTitleExtra title="Timeline" sub="Techno Symphony" />
      <div className="pb-36 ">
      <div class="   w-full h-full px-6 md:px-[8.2rem] relative z-20">
      <div class="flex flex justify-center item-center w-full max-w-6xl  mx-auto">
        <div class="w-[40rem] h-full ">
          <div class="w-full h-full px-2 py-6 bg-white rounded bg-opacity-20 backdrop-blur-sm ring-inset drop-shadow-lg ring-[0.8px] ring-[#F8F9FA] md:pl-4 text-center">
            <h1 class="md:text-2xl font-bold text-[#F8F9FA] text-lg leading-tight">Informatic Show Off, After Party </h1>
            <p class="md:text-xl text-sm font-base text-white mt-2">16 Desember 2023</p>
          </div>
        </div>
      </div>
    </div>
      </div>
        <SubTitle title="Venue" />
        <Venue  />
        <Background />
    </div>
      <Footer />
    </div>
  );
};

export default TechSymphony;
