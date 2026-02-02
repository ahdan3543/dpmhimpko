
import React, { useState } from 'react';
import { AKD } from '../types';
import { Target, Users, ShieldCheck, ChevronDown, UserCircle } from 'lucide-react';

interface ProfilePageProps {
  akds: AKD[];
}

const ProfilePage: React.FC<ProfilePageProps> = ({ akds }) => {
  const [activeAkd, setActiveAkd] = useState(akds[0].id);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-black py-24 mb-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Profil DPM HIMA PKO</h1>
          <p className="text-slate-400 text-lg">Mengenal lebih dekat lembaga legislatif mahasiswa Pendidikan Kepelatihan Olahraga.</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full -z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* Sejarah */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-8 text-black">Sejarah Singkat</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                DPM HIMA PKO dibentuk seiring dengan kebutuhan akan lembaga pengawas di tingkat departemen Pendidikan Kepelatihan Olahraga. Sejak berdirinya, DPM berkomitmen menjadi pilar demokrasi yang menjamin transparansi di lingkungan himpunan.
              </p>
              <p>
                Melalui berbagai periode kepengurusan, kami terus berinovasi dalam mengelola aturan-aturan organisasi agar tetap relevan dengan dinamika dunia mahasiswa dan olahraga saat ini.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-100">
              <img src="https://picsum.photos/seed/history/800/600" alt="History" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Visi Misi Detail */}
        <section className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-800 font-bold uppercase tracking-widest text-sm block mb-4">Amanah & Visi</span>
              <h2 className="text-4xl font-bold text-black">Landasan Perjuangan Kami</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="w-14 h-14 bg-red-800 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200/50">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-black">Visi</h3>
                <p className="text-slate-600 leading-relaxed">
                  "Terwujudnya DPM HIMA PKO sebagai lembaga legislatif yang inklusif, aspiratif, dan berwibawa guna menciptakan lingkungan kampus PKO yang harmonis dan berprestasi."
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-black/20">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-black">Misi Utama</h3>
                <ul className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                    <span>Mengoptimalkan fungsi legislasi dan pengawasan secara profesional.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                    <span>Membangun kanal aspirasi yang modern dan mudah diakses.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-2 shrink-0"></div>
                    <span>Menjaga hubungan harmonis dengan seluruh elemen ormawa.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AKD Structure */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Struktur Alat Kelengkapan Dewan</h2>
            <p className="text-slate-500">Masing-masing komisi memiliki tanggung jawab spesifik.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {akds.map((akd) => (
                <button
                  key={akd.id}
                  onClick={() => setActiveAkd(akd.id)}
                  className={`flex-shrink-0 text-left p-6 rounded-2xl transition-all border ${
                    activeAkd === akd.id 
                    ? 'bg-red-800 border-red-800 text-white shadow-lg shadow-red-200' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-red-200'
                  }`}
                >
                  <h4 className="font-bold mb-1">{akd.name}</h4>
                  <p className={`text-xs ${activeAkd === akd.id ? 'text-red-100' : 'text-slate-400'}`}>Klik untuk detail</p>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm animate-in fade-in duration-500">
                {akds.map((akd) => akd.id === activeAkd && (
                  <div key={akd.id}>
                    <h3 className="text-2xl font-bold mb-4 text-black">{akd.name}</h3>
                    <p className="text-slate-500 mb-10 pb-10 border-b border-slate-100">{akd.description}</p>
                    
                    <h4 className="font-bold mb-8 flex items-center gap-2 text-black">
                      <Users size={20} className="text-red-800" /> Anggota Komisi
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {akd.members.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400">
                            <UserCircle size={32} />
                          </div>
                          <div>
                            <h5 className="font-bold text-black">{member.name}</h5>
                            <p className="text-xs font-semibold text-red-800 uppercase">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
