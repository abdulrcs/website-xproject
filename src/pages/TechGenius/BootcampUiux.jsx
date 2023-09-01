import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewBoot from "../../components/techgenius/OverviewBoot";
import Speaker from "../../components/techgenius/Speaker";
import { Andika } from "../../assets";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";
import Accordion from "../../components/Accordion";

const BootcampUiux = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Bootcamp UI/UX Design" link="#about-bootcamp" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-bootcamp">
        <SubTitleExtra title="Overview" sub="Bootcamp UI/UX Design" />
        <OverviewBoot
          desc="Bootcamp UI/UX Design adalah program intensif yang dirancang untuk mengajarkan para peserta tentang pengalaman pengguna (UX) dan desain antarmuka (UI) pada website atau aplikasi. Dalam bootcamp ini, peserta akan diajarkan prinsip-prinsip desain yang efektif dan strategi untuk menciptakan pengalaman online yang menarik, fungsional, dan mudah digunakan."
          tempat="Online Via Zoom"
          jam="18.00-Selesai"
          biaya="Rp 25.000"
          waktu="3, 4, 5, 9 September 2023"
        />
        
        <SubTitleExtra title="Pemateri" sub="Bootcamp UI/UX Design" />
        <Speaker img={Andika} speaker="Andika Leonardo" position="Product Designer | UI/UX Lead at Amoeba Telkom | Content Creator" />
        <SubTitleExtra title="Timeline" sub="Bootcamp UI/UX Design" />
        <div className="pb-36">


          <TimelineLeft nama="Pendaftaran dan Pembayaran" tanggal="15 Agustus - 1 September 2023" />
          <TimelineRight nama="Pelaksanaan Bootcamp Day 1" tanggal="3 September 2023" />
          <TimelineLeft nama="Pelaksanaan Bootcamp Day 2" tanggal="4 September 2023" />
          <TimelineRight nama="Pelaksanaan Bootcamp Day 3" tanggal="5 September 2023" />
          <TimelineLeft nama="Pelaksanaan Bootcamp Day 4" tanggal="9 September 2023" />
        </div>
        
        <SubTitleExtra title="Silabus Materi" sub="Bootcamp UI/UX Design" />
        <Accordion/>
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="https://api.whatsapp.com/send/?phone=6285746684976" firstcp="Lintang Iqhtiar Dwi Mawarni" firstno="0857 4668 4976" secondlink="https://api.whatsapp.com/send/?phone=6281938404189" secondcp="Louis Wang" secondno="0819 3840 4189" />
        <Registration link="http://Unesa.me/BootcampUIUXDesign2023" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default BootcampUiux;
