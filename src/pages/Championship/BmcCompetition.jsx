import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewIC from "../../components/championship/OverviewIC";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Prizes from "../../components/Prizes";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";

const BmcCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="BMC Competition" link="#about-bmccomp" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-bmccomp">
        <SubTitleExtra title="Overview" sub="BMC Competition" />
        <OverviewIC
          desc="Perlombaan Business Model Canvas adalah suatu kompetisi di mana peserta diminta untuk mengembangkan dan menyajikan model bisnis menggunakan kerangka kerja Business Model Canvas. Business Model Canvas adalah alat yang digunakan untuk menggambarkan dan merancang elemen-elemen kunci dari suatu model bisnis secara komprehensif dan terstruktur."
          kategori="Mahasiswa"
           tempat="Online"
          jam="Via Zoom"
          biaya="Free Pendaftaran"
          tingkat="Nasional"
        />
        <SubTitleExtra title="Timeline" sub="BMC Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran Gel. 1 & Pembayaran" tanggal="11 September - 2 Oktober 2023" />
          <TimelineRight nama="Pendaftaran Gel. 2 & Pembayaran" tanggal="3 - 21 Oktober 2023" />
          <TimelineLeft nama="Technical Meeting" tanggal="22 Oktober 2023" />
          <TimelineRight nama="Pengumpulan Karya" tanggal="2 Oktober - 5 November 2023" />
          <TimelineLeft nama="Penjurian" tanggal="6 - 7 November 2023" />
          <TimelineRight nama="Pengumuman tim yang masuk ke final (10 tim yang terbaik)" tanggal="10  November 2023" />
          <TimelineLeft nama="Pengumpulan Media Presentasi (Power Point)" tanggal="15 - 17  November 2023" />
          <TimelineRight nama="Final IC + Presentasi" tanggal="25 November 2023" />
          
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="BMC Competition" />
        <Prizes first="Uang Pembinaan" second="Uang Pembinaan" third="Uang Pembinaan" />
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="wa.me/" firstcp="Kartika" firstno="0821 8286 8031" secondlink="wa.me/" secondcp="Nafla Aurellian" secondno="0896 7100 5203" />
        <Registration link="google.com" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default BmcCompetition;
