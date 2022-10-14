import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const UIUXCompetition = () => {
  const timelineData = [
    {
      title: 'Pendaftaran',
      date: '25 September  - 30 Oktober 2022',
    },
    {
      title: 'Technical Meeting 1',
      date: '31 Oktober 2022',
    },
    {
      title: 'Pengumpulan Proposal',
      date: '1 - 6 November',
    },
    {
      title: 'Penjurian Proposal',
      date: '7 - 10 November 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Semifinal',
      date: '11 November 2022',
    },
    {
      title: 'Pengumpulan Karya',
      date: '11 - 18 November 2022',
    },
    {
      title: 'Penjurian Semifinal',
      date: '19 - 25 November 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Final dan Technical Meeting 2',
      date: '26 November 2022',
    },
    {
      title: 'Pengumpulan Poster & PPT',
      date: '27 November - 3 Desember 2022',
    },
    {
      title: 'Final',
      date: '4 Desember 2022',
    },
    {
      title: 'Pengumuman Pemenang Lomba',
      date: '8 Desember 2022',
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
