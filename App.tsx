
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin, ChevronRight, Send, User, Search, Settings, Home as HomeIcon, Newspaper, Users, MessageSquare, Target, ShieldCheck, UserCircle, Calendar, ArrowLeft, ArrowRight, BookOpen, Flag, MessageCircle, CheckCircle, Info, AtSign, FileText, LayoutDashboard, LogOut, Clock, Check, Trash2, Eye, Download } from 'lucide-react';

// --- DATA TYPES & CONSTANTS (Merged for stability) ---
export enum Category { PROKER = 'Kegiatan/Proker', REWARD = 'Penghargaan' }
export enum AspirationCategory { AKADEMIK = 'Akademik', FASILITAS = 'Fasilitas', ORGANISASI = 'Organisasi', LAINNYA = 'Lainnya' }
export enum AspirationStatus { BARU = 'Baru', PROSES = 'Diproses', SELESAI = 'Selesai' }

export const INITIAL_NEWS = [
  { id: '1', title: 'Musyawarah Mahasiswa PKO 2024: Menuju Sinergi Baru', excerpt: 'DPM HIMA PKO sukses menyelenggarakan Musyawarah Mahasiswa...', content: 'Isi lengkap musyawarah...', category: Category.PROKER, author: 'Komisi B', date: '2024-03-15', image: 'https://picsum.photos/seed/musma/800/400' },
  { id: '2', title: 'PKO Upgrade: Pelatihan Kepemimpinan Dasar', excerpt: 'Meningkatkan kualitas softskill pengurus HIMA PKO...', content: 'Isi lengkap pelatihan...', category: Category.PROKER, author: 'BPH', date: '2024-03-10', image: 'https://picsum.photos/seed/upgrade/800/400' },
  { id: '3', title: 'Reward Staff Terbaik Bulan Februari 2024', excerpt: 'Apresiasi kepada rekan-rekan berdedikasi tinggi.', content: 'Selamat kepada Andi Saputra...', category: Category.REWARD, author: 'Ketua Umum', date: '2024-02-28', image: 'https://picsum.photos/seed/reward1/800/400' }
];

export const INITIAL_AKD = [
  { id: 'akd-1', name: 'BPH (Badan Pengurus Harian)', description: 'Mengoordinasikan seluruh agenda internal dan eksternal.', members: [{ name: 'Rizky Pratama', role: 'Ketua Umum' }, { name: 'Salsabila Putri', role: 'Sekretaris Jenderal' }] },
  { id: 'akd-2', name: 'Komisi A (Aspirasi & Advokasi)', description: 'Menampung aspirasi mahasiswa PKO.', members: [{ name: 'Bagas Wahyu', role: 'Ketua Komisi' }, { name: 'Dina Lestari', role: 'Anggota' }] }
];

// --- COMPONENTS ---

// Navbar & Footer remain similar but with improved path safety
const App: React.FC = () => {
  const [news, setNews] = useState(() => {
    try {
      const saved = localStorage.getItem('dpm_news');
      return saved ? JSON.parse(saved) : INITIAL_NEWS;
    } catch { return INITIAL_NEWS; }
  });

  const [aspirations, setAspirations] = useState(() => {
    try {
      const saved = localStorage.getItem('dpm_aspirations');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('dpm_news', JSON.stringify(news)); }, [news]);
  useEffect(() => { localStorage.setItem('dpm_aspirations', JSON.stringify(aspirations)); }, [aspirations]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="fixed w-full z-50 glass border-b border-slate-200 h-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-white font-bold">P</div>
                    <span className="font-bold text-lg">DPM HIMA PKO</span>
                </Link>
                <div className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-red-800 font-medium">Beranda</Link>
                    <Link to="/profil" className="hover:text-red-800 font-medium">Profil</Link>
                    <Link to="/berita" className="hover:text-red-800 font-medium">Berita</Link>
                    <Link to="/aspirasi" className="hover:text-red-800 font-medium">Aspirasi</Link>
                </div>
                <Link to="/admin" className="p-2 bg-slate-100 rounded-full"><Settings size={18}/></Link>
            </div>
        </nav>
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home news={news} />} />
            <Route path="/profil" element={<Profile akds={INITIAL_AKD} />} />
            <Route path="/berita" element={<NewsList news={news} />} />
            <Route path="/berita/:id" element={<NewsDetail news={news} />} />
            <Route path="/aspirasi" element={<AspirationForm onSubmit={(a) => setAspirations([a, ...aspirations])} />} />
            <Route path="/admin" element={<Admin news={news} aspirations={aspirations} onUpdate={(id, s) => setAspirations(aspirations.map(a => a.id === id ? {...a, status: s} : a))} onDelete={(id) => setNews(news.filter(n => n.id !== id))} />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="font-bold mb-2">DPM HIMA PKO © 2024</p>
                <p className="text-slate-400 text-sm italic">"Suara Mahasiswa, Kekuatan Organisasi"</p>
            </div>
        </footer>
      </div>
    </Router>
  );
};

// --- PAGES (Internalized for reliability) ---

const Home = ({ news }) => (
    <div className="animate-in fade-in duration-700">
        <section className="bg-red-900 text-white py-20 px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">DPM HIMA PKO</h1>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">Lembaga Legislatif Mahasiswa Pendidikan Kepelatihan Olahraga. Mengawal aspirasi, mewujudkan keadilan.</p>
            <div className="flex justify-center gap-4">
                <Link to="/profil" className="bg-white text-red-900 px-6 py-3 rounded-lg font-bold">Lihat Profil</Link>
                <Link to="/aspirasi" className="bg-red-800 border border-red-700 px-6 py-3 rounded-lg font-bold">Kirim Aspirasi</Link>
            </div>
        </section>
        <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-3 gap-8">
            {news.slice(0,3).map(n => (
                <div key={n.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <img src={n.image} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <span className="text-red-800 text-xs font-bold">{n.category}</span>
                        <h3 className="font-bold text-lg mt-2 mb-4">{n.title}</h3>
                        <Link to={`/berita/${n.id}`} className="text-red-800 font-bold text-sm">Baca Selengkapnya →</Link>
                    </div>
                </div>
            ))}
        </section>
    </div>
);

const Profile = ({ akds }) => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-in slide-in-from-bottom duration-500">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-red-800 inline-block">Profil DPM</h2>
        <div className="prose mb-12">
            <p>DPM HIMA PKO adalah wadah legislasi tingkat departemen yang bertugas mengawasi jalannya roda organisasi Himpunan Mahasiswa PKO.</p>
        </div>
        <div className="space-y-6">
            {akds.map(akd => (
                <div key={akd.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-xl text-red-900 mb-2">{akd.name}</h3>
                    <p className="text-slate-500 mb-4">{akd.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {akd.members.map((m, i) => (
                            <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold">{m.name} ({m.role})</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const NewsList = ({ news }) => (
    <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-10">Warta PKO</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {news.map(n => (
                <Link key={n.id} to={`/berita/${n.id}`} className="group">
                    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src={n.image} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="font-bold group-hover:text-red-800 transition-colors">{n.title}</h3>
                            <p className="text-slate-400 text-xs mt-4">{n.date}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

const NewsDetail = ({ news }) => {
    const { id } = useParams();
    const item = news.find(n => n.id === id);
    if (!item) return <div className="p-20 text-center">Berita tidak ditemukan</div>;
    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <Link to="/berita" className="text-slate-400 flex items-center gap-2 mb-8 hover:text-red-800">
                <ArrowLeft size={16}/> Kembali ke Berita
            </Link>
            <img src={item.image} className="w-full rounded-3xl mb-8" />
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
            <div className="flex gap-4 mb-8 text-sm text-slate-400">
                <span>Oleh: {item.author}</span>
                <span>•</span>
                <span>{item.date}</span>
            </div>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
                <p className="font-bold text-lg text-red-900 mb-6">{item.excerpt}</p>
                <p>{item.content}</p>
            </div>
        </div>
    );
};

const AspirationForm = ({ onSubmit }) => {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', nim: '', category: AspirationCategory.LAINNYA, message: '', isAnonymous: false });

    const handle = (e) => {
        e.preventDefault();
        const ticket = 'PKO-' + Math.random().toString(36).slice(2,8).toUpperCase();
        onSubmit({ id: Date.now(), ticketNumber: ticket, ...form, status: AspirationStatus.BARU, createdAt: new Date().toLocaleDateString() });
        setSent(true);
    };

    if (sent) return (
        <div className="min-h-[60vh] flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl text-center shadow-xl max-w-md border border-red-50">
                <CheckCircle className="mx-auto text-red-800 mb-4" size={64}/>
                <h2 className="text-2xl font-bold mb-2">Aspirasi Terkirim!</h2>
                <p className="text-slate-500 mb-6">Suara Anda telah kami terima dan akan segera diproses oleh Komisi Aspirasi.</p>
                <button onClick={() => setSent(false)} className="bg-red-800 text-white px-8 py-2 rounded-lg font-bold">Kirim Lainnya</button>
            </div>
        </div>
    );

    return (
        <div className="max-w-xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-4">Sampaikan Aspirasi</h2>
            <p className="text-slate-500 mb-8">Setiap masukan Anda membantu kami membangun PKO yang lebih baik.</p>
            <form onSubmit={handle} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input disabled={form.isAnonymous} placeholder="Nama (Opsional)" className="p-3 border rounded-lg w-full disabled:bg-slate-50" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                    <input disabled={form.isAnonymous} placeholder="NIM (Opsional)" className="p-3 border rounded-lg w-full disabled:bg-slate-50" value={form.nim} onChange={e => setForm({...form, nim: e.target.value})}/>
                </div>
                <select className="p-3 border rounded-lg w-full" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    {Object.values(AspirationCategory).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <textarea required placeholder="Tulis aspirasi Anda di sini..." className="p-3 border rounded-lg w-full h-32" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.isAnonymous} onChange={e => setForm({...form, isAnonymous: e.target.checked})} />
                    <span className="text-sm font-semibold">Kirim sebagai Anonim</span>
                </label>
                <button className="w-full bg-red-800 text-white py-4 rounded-xl font-bold hover:bg-red-900 transition-colors">Kirim Suara Mahasiswa</button>
            </form>
        </div>
    );
};

const Admin = ({ news, aspirations, onUpdate, onDelete }) => {
    const [pass, setPass] = useState('');
    const [auth, setAuth] = useState(false);
    if (!auth) return (
        <div className="min-h-[70vh] flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm text-center">
                <Settings size={48} className="mx-auto text-slate-300 mb-6"/>
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <input type="password" placeholder="Password: adminpko" className="p-3 border rounded-lg w-full mb-4" onChange={e => setPass(e.target.value)} />
                <button onClick={() => pass === 'adminpko' ? setAuth(true) : alert('Salah!')} className="w-full bg-black text-white py-3 rounded-lg font-bold">Masuk</button>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-10">Dashboard Pengurus</h2>
            <div className="grid lg:grid-cols-2 gap-12">
                <section>
                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><MessageSquare size={20}/> Aspirasi Terbaru</h3>
                    <div className="space-y-4">
                        {aspirations.map(a => (
                            <div key={a.id} className="bg-white p-5 rounded-xl border flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded uppercase">{a.status}</span>
                                        <span className="text-xs font-mono text-slate-400">#{a.ticketNumber}</span>
                                    </div>
                                    <p className="text-sm font-medium">{a.message}</p>
                                </div>
                                <div className="flex gap-1">
                                    <button onClick={() => onUpdate(a.id, AspirationStatus.PROSES)} className="p-2 hover:bg-slate-100 rounded text-blue-600"><Clock size={16}/></button>
                                    <button onClick={() => onUpdate(a.id, AspirationStatus.SELESAI)} className="p-2 hover:bg-slate-100 rounded text-green-600"><Check size={16}/></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Newspaper size={20}/> Kelola Berita</h3>
                    <div className="space-y-4">
                        {news.map(n => (
                            <div key={n.id} className="bg-white p-4 rounded-xl border flex items-center gap-4">
                                <img src={n.image} className="w-12 h-12 rounded object-cover" />
                                <div className="flex-grow">
                                    <h4 className="font-bold text-sm line-clamp-1">{n.title}</h4>
                                    <p className="text-[10px] text-slate-400">{n.date}</p>
                                </div>
                                <button onClick={() => onDelete(n.id)} className="text-red-600 p-2"><Trash2 size={16}/></button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
