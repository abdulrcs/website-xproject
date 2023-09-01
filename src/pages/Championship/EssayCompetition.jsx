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

const EssayCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Essay Competition" link="#about-essay" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-essay">
        <SubTitleExtra title="Overview" sub="Essay Competition" />
        <OverviewIC
          desc="Lomba Essay Informatics Championship merupakan sebuah kompetisi menulis essay yang ditujukan untuk mendorong kreativitas dan pemikiran kritis peserta. Lomba ini bertujuan untuk memberikan platform bagi para penulis muda untuk mengekspresikan pandangan mereka tentang isu-isu penting dan kontemporer di berbagai bidang."
          kategori="Mahasiswa"
          tempat="Online"
          jam="Via Zoom"
          biaya="Rp 40.000"
          tingkat="Nasional"
        />
        <SubTitleExtra title="Timeline" sub="Essay Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran" tanggal="11 September - 2 November 2023" />
          <TimelineRight nama="Pengumpulan Karya" tanggal="3 - 13 November 2023" />
          <TimelineLeft nama="Penjurian Karya" tanggal="14 - 19 November 2023" />
          <TimelineRight nama="Pengumuman Final" tanggal="20 November 2023" />
          <TimelineLeft nama="Pengumpulan Media Presentasi (PPT)" tanggal="21 - 23 November 2023" />
          <TimelineRight nama="Technical Meeting" tanggal="24 November 2023" />
          <TimelineLeft nama="Final" tanggal="25 November 2023" />
          <TimelineRight nama="Penjurian Final" tanggal="26 - 30 November 2023" />
          <TimelineLeft nama="Pengumuman Pemenang" tanggal="1 Desember 2023" />
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="Essay Competition" />
        <Prizes first="Uang Pembinaan" second="Uang Pembinaan" third="Uang Pembinaan" />
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="wa.me/" firstcp="Louis Wang" firstno="0819 3840 4189" secondlink="wa.me/" secondcp="Deirdre" secondno="0895 7069 70205" />
        <Registration link="google.com" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default EssayCompetition;
