
import React, { useState } from 'react';
import { News, Aspiration, AspirationStatus } from '../types';
import { LayoutDashboard, FileText, MessageSquare, LogOut, ChevronRight, Eye, Trash2, Check, Clock, AlertCircle, Download, Search } from 'lucide-react';

interface AdminDashboardProps {
  news: News[];
  aspirations: Aspiration[];
  onUpdateAspiration: (id: string, status: AspirationStatus) => void;
  onDeleteNews: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ news, aspirations, onUpdateAspiration, onDeleteNews }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'aspirations' | 'news'>('overview');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'adminpko') {
      setIsLoggedIn(true);
    } else {
      alert('Password salah! Petunjuk: adminpko');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-200">
          <div className="w-20 h-20 bg-red-50 text-red-800 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-100">
            <LayoutDashboard size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-black">Panel Admin</h2>
          <p className="text-slate-500 mb-8">Hanya untuk pengurus DPM HIMA PKO.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Masukkan Password Admin" 
              className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-800 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg">
              Masuk Dashboard
            </button>
            <p className="text-xs text-slate-400">Demo Pass: <code className="bg-slate-50 px-1 font-bold">adminpko</code></p>
          </form>
        </div>
      </div>
    );
  }

  const stats = {
    totalAspiration: aspirations.length,
    pendingAspiration: aspirations.filter(a => a.status === AspirationStatus.BARU).length,
    processedAspiration: aspirations.filter(a => a.status === AspirationStatus.PROSES).length,
    totalNews: news.length
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-black text-slate-300 flex flex-col shrink-0">
        <div className="p-8 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-white text-xs">PKO</div>
            DPM Admin
          </h2>
        </div>
        <nav className="p-4 space-y-2 flex-grow">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-red-800 text-white font-bold' : 'hover:bg-zinc-900'}`}
          >
            <LayoutDashboard size={18} /> Ringkasan
          </button>
          <button 
            onClick={() => setActiveTab('aspirations')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'aspirations' ? 'bg-red-800 text-white font-bold' : 'hover:bg-zinc-900'}`}
          >
            <MessageSquare size={18} /> Aspirasi Masuk
          </button>
          <button 
            onClick={() => setActiveTab('news')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'news' ? 'bg-red-800 text-white font-bold' : 'hover:bg-zinc-900'}`}
          >
            <FileText size={18} /> Kelola Berita
          </button>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-950 hover:text-red-500 transition-all text-sm font-bold"
          >
            <LogOut size={18} /> Keluar Panel
          </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-black">Selamat Datang, Admin</h2>
              <p className="text-slate-500">Berikut adalah statistik terkini website DPM HIMA PKO.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase mb-4 tracking-widest">Aspirasi Baru</p>
                <p className="text-4xl font-bold text-black">{stats.pendingAspiration}</p>
                <p className="text-slate-400 text-sm mt-2 font-medium">Dari {stats.totalAspiration} total</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase mb-4 tracking-widest">Sedang Diproses</p>
                <p className="text-4xl font-bold text-red-800">{stats.processedAspiration}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase mb-4 tracking-widest">Total Berita</p>
                <p className="text-4xl font-bold text-black">{stats.totalNews}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase mb-4 tracking-widest">Uptime Sistem</p>
                <p className="text-xl font-bold text-green-600">Normal</p>
                <p className="text-[10px] text-slate-400 mt-2 font-bold">STABLE V1.0</p>
              </div>
            </div>

            <div className="bg-black rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                 <div>
                   <h3 className="text-xl font-bold mb-2">Penyaluran Aspirasi</h3>
                   <p className="text-slate-400 text-sm">Setiap suara mahasiswa sangat berharga. Kelola setiap masukannya dengan bijak di tab Aspirasi.</p>
                 </div>
                 <button className="px-6 py-3 bg-red-800 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-red-900 transition-colors">
                   <Download size={18} /> Ekspor Laporan
                 </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-full bg-red-800/20 skew-x-12"></div>
            </div>
          </div>
        )}

        {activeTab === 'aspirations' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-black">Daftar Aspirasi</h2>
                <p className="text-slate-500">Tinjau dan kelola suara mahasiswa yang masuk.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Tiket</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Kategori</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Pesan</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Pengirim</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400">Status</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase text-slate-400 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {aspirations.length > 0 ? aspirations.map((asp) => (
                      <tr key={asp.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-bold">{asp.ticketNumber}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-xs font-extrabold text-black">{asp.category}</span>
                        </td>
                        <td className="px-6 py-5 max-w-xs">
                          <p className="text-sm text-slate-600 line-clamp-1">{asp.message}</p>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm">
                            <p className="font-bold text-black">{asp.isAnonymous ? 'Anonim' : asp.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold">{asp.isAnonymous ? '-' : asp.nim}</p>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-2 py-1 rounded-lg text-[10px] font-extrabold uppercase ${
                            asp.status === AspirationStatus.BARU ? 'bg-red-50 text-red-800' :
                            asp.status === AspirationStatus.PROSES ? 'bg-zinc-100 text-black' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {asp.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => onUpdateAspiration(asp.id, AspirationStatus.PROSES)}
                              title="Proses"
                              className="w-8 h-8 flex items-center justify-center bg-zinc-100 text-black rounded-lg hover:bg-black hover:text-white transition-all"
                            >
                              <Clock size={16} />
                            </button>
                            <button 
                              onClick={() => onUpdateAspiration(asp.id, AspirationStatus.SELESAI)}
                              title="Selesai"
                              className="w-8 h-8 flex items-center justify-center bg-green-50 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                            >
                              <Check size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-20 text-center text-slate-400 font-bold">Belum ada aspirasi masuk.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-black">Kelola Berita</h2>
                <p className="text-slate-500">Edit atau hapus warta kegiatan organisasi.</p>
              </div>
              <button 
                onClick={() => alert('Fitur tambah berita akan aktif di mode produksi dengan Database.')}
                className="bg-red-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-900 transition-all flex items-center gap-2"
              >
                + Berita Baru
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {news.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-32 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                    <img src={item.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-[10px] text-red-800 font-extrabold uppercase tracking-widest">{item.date} • {item.category}</p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-grow sm:flex-initial px-4 py-2 border border-slate-100 rounded-lg hover:bg-slate-50 text-sm font-bold flex items-center justify-center gap-2">
                      <Eye size={16} /> View
                    </button>
                    <button 
                      onClick={() => onDeleteNews(item.id)}
                      className="flex-grow sm:flex-initial px-4 py-2 bg-red-50 text-red-800 rounded-lg hover:bg-red-800 hover:text-white text-sm font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <Trash2 size={16} /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
