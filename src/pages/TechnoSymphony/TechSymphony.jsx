import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import OverviewTS from "../../components/techsymphony/OverviewTS";
import SubTitleExtra from "../../components/SubTitleExtra";
import Guest from "../../components/techsymphony/Guest";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import { GS } from "../../assets";
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
        <Guest img={GS} guest="Anyone Can Guess?" />
        <SubTitleExtra title="Timeline" sub="Techno Symphony" />
        <div className="pb-36">
          <TimelineLeft nama="Informatic Expo, KWU" tanggal="16 Desember 2023" />
          <TimelineRight nama="Informatic Show Off, After Party" tanggal="17 Desember 2023" />
        </div>
        <SubTitle title="Venue" />
        <Venue venue1="Gedung A10 Teknik Informatika" venue2="Coming Soon" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default TechSymphony;
