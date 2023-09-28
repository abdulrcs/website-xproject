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

const UiuxCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="UI/UX Design Competition" link="#about-uiuxcomp" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-uiuxcomp">
        <SubTitleExtra title="Overview" sub="UI/UX Design Competition" />
        <OverviewIC
          desc="Bootcamp UI/UX Design adalah program intensif yang dirancang untuk mengajarkan para peserta tentang pengalaman pengguna (UX) dan desain antarmuka (UI) pada website atau aplikasi. Dalam bootcamp ini, peserta akan diajarkan prinsip-prinsip desain yang efektif dan strategi untuk menciptakan pengalaman online yang menarik, fungsional, dan mudah digunakan."
          kategori="Mahasiswa"
          tempat="Online"
          via = "Via ZOOM"
          biaya="Free Pendaftaran"
          tingkat="Nasional"
           daftar = "http://unesa.me/InformaticChampionshipUIUXDesign"
          guideBook= "http://unesa.me/GuidebookUIUXDesign"
        />
        <SubTitleExtra title="Timeline" sub="UI/UX Design Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran & Pengumpulan Proposal" tanggal="12 September - 2 November 2023" />
          <TimelineRight nama="Pengumuman Semifinal" tanggal="6 November 2023" />
          <TimelineLeft nama="Pengumpulan Karya Semifinal dan Pembayaran" tanggal="7-13 November 2023" />
          <TimelineRight nama="Pengumuman Final" tanggal="20 November 2023" />
          <TimelineLeft nama="Technical Meeting" tanggal="21 November 2023" />
          <TimelineRight nama="Pengumpulan media presentasi (PPT)" tanggal="22 - 24 November 2023" />
          <TimelineLeft nama="Final" tanggal="26 November 2023" />
          <TimelineRight nama="Pengumuman Pemenang Lomba" tanggal="1 Desember 2023" />
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="UI/UX Design Competition" />
        <Prizes first="Uang Pembinaan" second="Uang Pembinaan" third="Uang Pembinaan" />
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="https://api.whatsapp.com/send/?phone=6285812066072" firstcp="Muhammad Ammarul R" firstno="0858 1206 6072" secondlink="https://api.whatsapp.com/send/?phone=6281231930529" secondcp="Mutiara" secondno="0812 3193 0529" />
        <Registration link="http://unesa.me/InformaticChampionshipUIUXDesign" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default UiuxCompetition;
