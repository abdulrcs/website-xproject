import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const IDP = () => {
  const timelineData = [
    {
      title: 'Pendaftaran & Pengumpulan Berkas',
      date: '25 September  - 25 November 2022',
    },
    {
      title: 'Penjurian Karya',
      date: '26 November - 5 Desember',
    },
    {
      title: 'Pengumuman Pemenang Lomba',
      date: '8 Desember 2022',
    },
  ];

  const uploadData = [
    {
      name: 'Upload Karya',
      url: 'http://unesa.me/PengumpulanBerkasLKTIN',
    },
  ]

  return (
    <CompetitionPage
      title='International Digital Poster'
      img='/assets/comp_idp.png'
      desc='International Digital Poster (IDP) merupakan kompetisi di bidang desain grafis tingkat internasional, kompetisi ini untuk meningkatkan kreativitas dan juga inovasi dalam desain grafis. Desain pada poster ini mengarah ke bidang teknologi informasi yang mengarah ke masa depan'
      register='https://forms.gle/Lf9NseMfb2ZVtcSWA'
      guidebook='https://drive.google.com/file/d/1eYxcHHVrcL58GxUL4ii4_riZuvCmGDjR/view?usp=sharing'
      type='Umum'
      level='Tingkat Internasional'
      htm='Free'
      timelineData={timelineData}
      uploadData={uploadData}
    />
  );
};

export default IDP;
