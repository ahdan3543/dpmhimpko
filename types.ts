
export enum Category {
  PROKER = 'Kegiatan/Proker',
  REWARD = 'Penghargaan',
}

export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  image: string;
}

export interface Member {
  name: string;
  role: string;
  photo?: string;
}

export interface AKD {
  id: string;
  name: string;
  description: string;
  members: Member[];
}

export enum AspirationCategory {
  AKADEMIK = 'Akademik',
  FASILITAS = 'Fasilitas',
  ORGANISASI = 'Organisasi',
  LAINNYA = 'Lainnya',
}

export enum AspirationStatus {
  BARU = 'Baru',
  PROSES = 'Diproses',
  SELESAI = 'Selesai',
}

export interface Aspiration {
  id: string;
  ticketNumber: string;
  name?: string;
  nim?: string;
  contact?: string;
  category: AspirationCategory;
  message: string;
  isAnonymous: boolean;
  status: AspirationStatus;
  createdAt: string;
}
