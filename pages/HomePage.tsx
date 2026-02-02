
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, BookOpen, Target, Flag, MessageCircle } from 'lucide-react';
import { News } from '../types';

interface HomePageProps {
  news: News[];
}

const HomePage: React.FC<HomePageProps> = ({ news }) => {
  const latestNews = news.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/sport-field/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 text-red-500 text-sm font-bold mb-6 border border-red-800/30">
              DEWAN PERWAKILAN MAHASISWA
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              DPM HIMA <span className="text-red-600">PKO</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Wadah legislasi, pengawasan, dan penyaluran aspirasi demi mewujudkan mahasiswa Pendidikan Kepelatihan Olahraga yang progresif dan berintegritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/profil" className="px-8 py-4 bg-red-800 hover:bg-red-900 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-950/40">
                Lihat Profil <ChevronRight size={20} />
              </Link>
              <Link to="/aspirasi" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                Kirim Aspirasi <MessageCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-800 shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Legislasi</h3>
              <p className="text-slate-500 text-sm">Merancang dan menetapkan landasan hukum organisasi yang kuat.</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-black shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Pengawasan</h3>
              <p className="text-slate-500 text-sm">Memastikan setiap program kerja departemen berjalan sesuai amanah.</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-start gap-5">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 shrink-0">
              <Flag size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Aspirasi</h3>
              <p className="text-slate-500 text-sm">Menjembatani suara mahasiswa kepada pihak kampus dan fakultas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Brief */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Visi & Misi DPM HIMA PKO</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Menjadi lembaga legislatif yang responsif, transparan, dan mampu menggerakkan potensi mahasiswa PKO dalam bingkai kekeluargaan dan profesionalitas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center text-white shrink-0 mt-1">1</div>
                  <p className="text-slate-700 font-medium">Optimalisasi fungsi legislasi dan pengawasan internal.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center text-white shrink-0 mt-1">2</div>
                  <p className="text-slate-700 font-medium">Penguatan sistem advokasi mahasiswa yang cepat tanggap.</p>
                </div>
              </div>
              <Link to="/profil" className="text-red-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Selengkapnya di Profil <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/pko-group/800/600" alt="Group Member" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-800 rounded-3xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">Warta Kegiatan</h2>
            <p className="text-slate-500">Ikuti perkembangan terbaru kegiatan DPM HIMA PKO.</p>
          </div>
          <Link to="/berita" className="px-6 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 font-semibold transition-colors">
            Lihat Semua Berita
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-red-800 uppercase tracking-widest mb-3 block">{item.category}</span>
                <h3 className="text-xl font-bold mb-4 line-clamp-2 hover:text-red-800 transition-colors">
                  <Link to={`/berita/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">{item.excerpt}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                  <Link to={`/berita/${item.id}`} className="text-red-800 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Baca <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aspiration CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-950 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/10 skew-x-12 translate-x-1/4"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Punya Aspirasi? <br/>Kami Siap Mendengar.</h2>
              <p className="text-red-100/70 mb-8 text-lg">
                Jangan biarkan keresahanmu menguap begitu saja. Sampaikan masukan, kritik, atau keluhan melalui form aspirasi resmi kami.
              </p>
              <Link to="/aspirasi" className="inline-flex items-center gap-2 bg-white text-red-950 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
                Mulai Kirim Aspirasi <ArrowRight size={20} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="flex gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                  <div className="h-20 w-full bg-white/10 rounded-xl"></div>
                  <div className="h-10 w-32 bg-red-800 rounded-lg ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
