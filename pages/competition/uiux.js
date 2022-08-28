import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const UIUXCompetition = () => {
  const timelineData = [
    {
      title: 'Pendaftaran',
      date: '11 September  - 15 Oktober 2022',
    },
    {
      title: 'Technical Meeting 1',
      date: '16 Oktober 2022',
    },
    {
      title: 'Pengumpulan Proposal',
      date: '17 Oktober  – 21 Oktober 2022',
    },
    {
      title: 'Penjurian Proposal',
      date: '22 – 25 Oktober 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Semifinal',
      date: '26 Oktober 2022',
    },
    {
      title: 'Pengumpulan Karya',
      date: '27 Oktober – 5 November 2022',
    },
    {
      title: 'Technical Meeting 2',
      date: '29 Oktober 2022',
    },
    {
      title: 'Penjurian Semifinal',
      date: '6 – 11 November 2022',
    },
    {
      title: 'Pengumuman Lolos Ke Tahap Final',
      date: '11 November 2022',
    },
    {
      title: 'Technical Meeting 3',
      date: '13 November 2022',
    },
    {
      title: 'Pengumpulan Poster & PPT',
      date: '13 – 25 November 2022',
    },
    {
      title: 'Final',
      date: '26 November 2022',
    },
    {
      title: 'Pengumuman Pemenang Lomba',
      date: '5 Desember 2022',
    },
    {
      title: 'Closing Ceremony',
      date: '17 Desember 2022',
    },
  ];

  return (
    <CompetitionPage
      title='UI/UX Competition'
      img='/assets/comp_uiux.png'
      desc='Kompetisi Desain UI/UX merupakan sebuah kompetisi desain antarmuka dari suatu sistem/produk yang berorientasi pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.'
      register=''
      guidebook=''
      type='Mahasiswa'
      level='Tingkat Nasional'
      prize='Rp. 75.000,00'
      timelineData={timelineData}
    />
  );
};

export default UIUXCompetition;
