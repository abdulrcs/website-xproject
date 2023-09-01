import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewWebinar from "../../components/techgenius/OverviewWebinar";
import Speaker from "../../components/techgenius/Speaker";
import { Ruhi } from "../../assets";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";

const WebinarBmc = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Webinar BMC" link="#about-webbmc" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-webbmc">
        <SubTitleExtra title="Overview" sub="Webinar Business Model Canvas" />
        <OverviewWebinar
          desc="Webinar ini memberikan pemahaman tentang tips and trik untuk membangun bisnis dengan BMC dan memahami cara untuk bisa memulai bisnis dengan tools yang ada seperti BMC / Business Plan. Webinar BMC juga memberikan wawasan tentang tren terkini di pasar, peluang bisnis yang muncul, atau perkembangan industri yang relevan. Selain itu, juga untuk memahami elemen – elemen  dalam konsep BMC / Business Plan, serta meningkatkan minat peserta di Informatic Competition."
          tempat="Online Via Zoom"
          jam="09.00-Selesai"
          biaya="Rp 5.000"
          waktu="10 September 2023"
        />
        <SubTitleExtra title="Pemateri" sub="Webinar Business Model Canvas" />
        <Speaker img={Ruhi} speaker="Ruhi Asandi" position="CEO Asandicorp" />
        <SubTitleExtra title="Timeline" sub="Bootcamp UI/UX Design" />
        <div className="pb-36">
          <TimelineLeft nama="Pendaftaran dan Pembayaran" tanggal="11 Agustus - 9 September 2023" />
          <TimelineRight nama="Pelaksanaan Webinar BMC" tanggal="10 November 2023" />
        </div>
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="https://api.whatsapp.com/send/?phone=6281357281859" firstcp="Dawwas Inha Ulhaq" firstno="0813 5728 1859" secondlink="https://api.whatsapp.com/send/?phone=6285336051254" secondcp="Ahmad Rizal Mustofa" secondno="0853 3605 1254" />
        <Registration link="http://unesa.me/PendaftaranWebinarBMC2023" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default WebinarBmc;
