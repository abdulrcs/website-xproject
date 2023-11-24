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
          kategori="Mahasiswa (Tim)"
          tempat="Online"
          via = "Via ZOOM"
          biaya="Free Pendaftaran"
          tingkat="Nasional"
           daftar = "https://forms.gle/3cBzUCDutupT1Bv67"
           txtDaftar="Upload Final"
          guideBook= "http://unesa.me/GuidebookUIUXDesign"
        />
        <SubTitleExtra title="Timeline" sub="UI/UX Design Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran & Pengumpulan Proposal" tanggal="12 September - 8 November 2023" />
          <TimelineRight nama="Pengumuman Semifinal" tanggal="10 November 2023" />
          <TimelineLeft nama="Pengumpulan Karya Semifinal dan Pembayaran" tanggal="11-15 November 2023" />
          <TimelineRight nama="Pengumuman Final" tanggal="20 November 2023" />
          <TimelineLeft nama="Technical Meeting" tanggal="21 November 2023" />
          <TimelineRight nama="Pengumpulan media presentasi (PPT)" tanggal="22 - 24 November 2023" />
          <TimelineLeft nama="Final" tanggal="26 November 2023" />
          <TimelineRight nama="Pengumuman Pemenang Lomba" tanggal="1 Desember 2023" />
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="UI/UX Design Competition" />
        <div className="flex flex-col">
        <Prizes first="2 Voucher Gratis Course UI/UX Design Mastery by Skilvul / Tim, Uang Pembinaan, " second="2 Voucher Gratis Course UI/UX Design Mastery by Skilvul / Tim, Uang Pembinaan, " third="1 Voucher Gratis Course UI/UX Design Mastery by Skilvul / Tim, Uang Pembinaan, " />
        <div className="w-full h-full px-6 md:px-[8.2rem] -mt-[5rem] pb-36 relative z-20">
          <div className="flex justify-center items-center md:items-end text-white gap-10">
            <div className="bg-gradient-to-r from-blue-400/70 to-blue-400/50 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] rounded-lg w-60 md:w-72 h-fit text-center md:order-2">
              <div className="pb-10 px-10">
                <h3 className="text-2xl md:text-3xl mt-10 font-extrabold mb-2">Participant</h3>
                <p className="text-lg md:text-xl">Voucher Discount 50% Course UI/UX Design Mastery by Skilvul, </p>
                <p className="text-lg md:text-xl">E-Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
