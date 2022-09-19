import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const LKTIN = () => {
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
      title: 'Pengumpulan Abstrak',
      date: '17 Oktober - 21 Oktober 2022',
    },
    {
      title: 'Pengumuman Lolos Abstrak',
      date: '26 Oktober 2022',
    },
    {
      title: 'Pengumpulan Fullpaper',
      date: '27 Oktober – 5 November 2022',
    },
    {
      title: 'Technical Meeting 2',
      date: '29 Oktober 2022',
    },
    {
      title: 'Penjurian Full Paper',
      date: '6 November - 11 November 2022',
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
      title: 'Pengumpulan PPT',
      date: '25 November 2022',
    },
    {
      title: 'Final',
      date: '27 November 2022',
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
      title='LKTIN'
      img='/assets/comp_lktin.png'
      desc='LKTIN (Lomba Karya Tulis Ilmiah Nasional) merupakan sebuah kompetisi yang ditujukan kepada siswa dan siswi SMA/SMK atau sederajat untuk meningkatkan kreativitas dan inovasi dengan cara berkompetisi menuangkan ide atau gagasan mengenai tema tertentu yang berbasis ilmiah.'
      register='http://unesa.me/PendaftaranLKTINShifterion'
      guidebook=''
      type='Siswa'
      level='Tingkat Nasional'
      prize='Rp. 70.000,00'
      timelineData={timelineData}
    />
  );
};

export default LKTIN;
