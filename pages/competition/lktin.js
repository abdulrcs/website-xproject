import React from 'react';
import CompetitionPage from '../../layout/CompetitionPage';

const LKTIN = () => {
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
      title: 'Pengumpulan Abstrak',
      date: '1 - 6 November 2022',
    },
    {
      title: 'Penjurian Abstrak',
      date: '7 - 10 November 2022',
    },
    {
      title: 'Pengumuman Lolos ke Tahap Semifinal',
      date: '11 November 2022',
    },
    {
      title: 'Pengumpulan Karya Full Paper',
      date: '11 - 18 November 2022',
    },
    {
      title: 'Penjurian Semifinal',
      date: '19 - 25 November 2022',
    },
    {
      title: 'Pengumuman Lolos ke Tahap Final dan Technical Meeting 2',
      date: '26 November 2022',
    },
    {
      title: 'Pengumpulan PPT',
      date: '27 November – 3 Desember 2022',
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
      url: 'http://unesa.me/PengumpulanBerkasLKTIN',
    },
    {
      name: 'Semifinal',
      url: 'http://unesa.me/SemiFinalLKTINXProject',
    },
    {
      name: 'Final',
      url: 'http://unesa.me/FinalLKTINXProject',
    },
  ]

  return (
    <CompetitionPage
      title='LKTIN'
      img='/assets/comp_lktin.png'
      desc='LKTIN (Lomba Karya Tulis Ilmiah Nasional) merupakan sebuah kompetisi yang ditujukan kepada siswa dan siswi SMA/SMK atau sederajat untuk meningkatkan kreativitas dan inovasi dengan cara berkompetisi menuangkan ide atau gagasan mengenai tema tertentu yang berbasis ilmiah.'
      register='http://unesa.me/PendaftaranLKTINShifterion'
      guidebook='https://drive.google.com/file/d/1OoBHwEK3vOk4Iih34t1spzraHbIUQZbf/view?usp=sharing'
      type='Siswa SMA/SMK Sederajat'
      level='Tingkat Nasional'
      htm='Rp. 75.000,00'
      timelineData={timelineData}
      uploadData={uploadData}
    />
  );
};

export default LKTIN;
