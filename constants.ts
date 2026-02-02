
import { News, Category, AKD, AspirationCategory } from './types';

export const INITIAL_NEWS: News[] = [
  {
    id: '1',
    title: 'Musyawarah Mahasiswa PKO 2024: Menuju Sinergi Baru',
    excerpt: 'DPM HIMA PKO sukses menyelenggarakan Musyawarah Mahasiswa untuk membahas AD/ART organisasi.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: Category.PROKER,
    author: 'Komisi B',
    date: '2024-03-15',
    image: 'https://picsum.photos/seed/musma/800/400'
  },
  {
    id: '2',
    title: 'PKO Upgrade: Pelatihan Kepemimpinan Tingkat Dasar',
    excerpt: 'Meningkatkan kualitas softskill pengurus HIMA PKO melalui pelatihan intensif.',
    content: 'Isi konten berita yang mendalam mengenai pelatihan kepemimpinan yang telah dilaksanakan...',
    category: Category.PROKER,
    author: 'BPH',
    date: '2024-03-10',
    image: 'https://picsum.photos/seed/upgrade/800/400'
  },
  {
    id: '3',
    title: 'Reward Staff Terbaik Bulan Februari 2024',
    excerpt: 'Apresiasi kepada rekan-rekan yang telah memberikan dedikasi tinggi bulan ini.',
    content: 'Selamat kepada Andi Saputra atas dedikasinya di Komisi Aspirasi...',
    category: Category.REWARD,
    author: 'Ketua Umum',
    date: '2024-02-28',
    image: 'https://picsum.photos/seed/reward1/800/400'
  },
  {
    id: '4',
    title: 'Studi Banding DPM ke Universitas Sebelas Maret',
    excerpt: 'Kunjungan kerja dalam rangka berbagi wawasan tata kelola legislasi mahasiswa.',
    content: 'Rincian kunjungan dan poin-poin penting hasil diskusi antar universitas...',
    category: Category.PROKER,
    author: 'Komisi B',
    date: '2024-02-15',
    image: 'https://picsum.photos/seed/studibanding/800/400'
  },
  {
    id: '5',
    title: 'Hearing Dekanat: Menyuarakan Keresahan Fasilitas Lapangan',
    excerpt: 'DPM memfasilitasi pertemuan antara mahasiswa dan birokrasi fakultas terkait renovasi GOR.',
    content: 'Laporan hasil hearing yang membahas jadwal renovasi lapangan basket dan voli...',
    category: Category.PROKER,
    author: 'Komisi A',
    date: '2024-02-05',
    image: 'https://picsum.photos/seed/hearing/800/400'
  },
  {
    id: '6',
    title: 'Workshop Administrasi Organisasi 2024',
    excerpt: 'Standarisasi persuratan dan administrasi keuangan di lingkungan HIMA PKO.',
    content: 'Detail acara workshop yang dihadiri oleh seluruh sekretaris dan bendahara departemen...',
    category: Category.PROKER,
    author: 'Sekretaris',
    date: '2024-01-25',
    image: 'https://picsum.photos/seed/workshop/800/400'
  }
];

export const INITIAL_AKD: AKD[] = [
  {
    id: 'akd-1',
    name: 'BPH (Badan Pengurus Harian)',
    description: 'Mengoordinasikan seluruh agenda internal dan eksternal DPM HIMA PKO.',
    members: [
      { name: 'Rizky Pratama', role: 'Ketua Umum' },
      { name: 'Salsabila Putri', role: 'Sekretaris Jenderal' },
      { name: 'Aditya Nugroho', role: 'Bendahara Umum' }
    ]
  },
  {
    id: 'akd-2',
    name: 'Komisi A (Aspirasi & Advokasi)',
    description: 'Menampung dan menindaklanjuti segala bentuk aspirasi dari mahasiswa PKO.',
    members: [
      { name: 'Bagas Wahyu', role: 'Ketua Komisi' },
      { name: 'Dina Lestari', role: 'Anggota' },
      { name: 'Fajar Ramadhan', role: 'Anggota' }
    ]
  },
  {
    id: 'akd-3',
    name: 'Komisi B (Legislasi & Yudikatif)',
    description: 'Bertanggung jawab atas penyusunan draf hukum dan aturan organisasi.',
    members: [
      { name: 'Hendri Kurnia', role: 'Ketua Komisi' },
      { name: 'Maya Sari', role: 'Anggota' }
    ]
  },
  {
    id: 'akd-4',
    name: 'Komisi C (Pengawasan & Audit)',
    description: 'Mengawasi jalannya program kerja HIMA PKO agar tetap sesuai jalur.',
    members: [
      { name: 'Taufiq Ismail', role: 'Ketua Komisi' },
      { name: 'Rina Amalia', role: 'Anggota' }
    ]
  }
];
