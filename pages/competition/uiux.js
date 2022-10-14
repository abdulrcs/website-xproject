import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const UIUXCompetition = () => {
  const timelineData = [
    {
      title: 'Pendaftaran',
      date: '25 September  - 25 Oktober 2022',
    },
    {
      title: 'Technical Meeting 1',
      date: '26 Oktober 2022',
    },
    {
      title: 'Pengumpulan Proposal',
      date: '27 Oktober  – 2 November 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Semifinal',
      date: '7 November 2022',
    },
    {
      title: 'Pengumpulan Karya',
      date: '8 November – 14 November 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Final',
      date: '22 November 2022',
    },
    {
      title: 'Technical Meeting Final',
      date: '23 November 2022',
    },
    {
      title: 'Pengumpulan Poster & PPT',
      date: '24 – 30 November 2022',
    },
    {
      title: 'Final',
      date: '3 Desember 2022',
    },
    {
      title: 'Pengumuman Pemenang Lomba',
      date: '10 Desember 2022',
    },
  ];

  const uploadData = [
    {
      name: 'Penyisihan',
      url: 'https://forms.gle/HYKwF4oGoSR1sPiL8',
    },
    {
      name: 'Semifinal',
      url: 'https://forms.gle/R5CQbnXoZFDE6iYg7',
    },
    {
      name: 'Final',
      url: 'https://forms.gle/hgo8jVjARycBryfA7',
    },
  ]

  return (
    <CompetitionPage
      title='UI/UX Competition (Mobile App)'
      img='/assets/comp_uiux.png'
      desc='Kompetisi Desain UI/UX merupakan sebuah kompetisi desain antarmuka dari suatu sistem/produk yang berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.'
      register='https://forms.gle/zLvLDmdYtaDhnFVr9'
      guidebook='https://drive.google.com/file/d/14YYOrrLcG0psaEBoFnkV-0LxB-bS5RzB/view?usp=sharing'
      type='Mahasiswa'
      level='Tingkat Nasional'
      htm='Rp. 75.000,00'
      timelineData={timelineData}
      uploadData={uploadData}
    />
  );
};

export default UIUXCompetition;
