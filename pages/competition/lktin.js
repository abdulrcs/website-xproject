import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const LKTIN = () => {
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
      title: 'Pengumpulan Abstrak',
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
      title: 'Pengumuman Lolos ke Tahap Final',
      date: '22 November 2022',
    },
    {
      title: 'Technical Meeting 2',
      date: '23 November 2022',
    },
    {
      title: 'Pengumpulan PPT',
      date: '24 – 30 November 2022',
    },
    {
      title: 'Final',
      date: '4 Desember 2022',
    },
    {
      title: 'Pengumuman Pemenang Lomba',
      date: '10 Desember 2022',
    },
  ];

  return (
    <CompetitionPage
      title='LKTIN'
      img='/assets/comp_lktin.png'
      desc='LKTIN (Lomba Karya Tulis Ilmiah Nasional) merupakan sebuah kompetisi yang ditujukan kepada siswa dan siswi SMA/SMK atau sederajat untuk meningkatkan kreativitas dan inovasi dengan cara berkompetisi menuangkan ide atau gagasan mengenai tema tertentu yang berbasis ilmiah.'
      register='http://unesa.me/PendaftaranLKTINShifterion'
      guidebook=''
      type='Siswa SMA/SMK Sederajat'
      level='Tingkat Nasional'
      htm='Rp. 75.000,00'
      timelineData={timelineData}
    />
  );
};

export default LKTIN;
