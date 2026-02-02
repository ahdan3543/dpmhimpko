
import React, { useState } from 'react';
import { Send, CheckCircle, Info, Upload, ShieldCheck, User, AtSign, FileText } from 'lucide-react';
import { Aspiration, AspirationCategory, AspirationStatus } from '../types';

interface AspirationPageProps {
  onSubmit: (aspiration: Aspiration) => void;
}

const AspirationPage: React.FC<AspirationPageProps> = ({ onSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticket, setTicket] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    contact: '',
    category: AspirationCategory.LAINNYA,
    message: '',
    isAnonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const ticketNumber = 'PKO-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const newAspiration: Aspiration = {
        id: Date.now().toString(),
        ticketNumber,
        ...formData,
        status: AspirationStatus.BARU,
        createdAt: new Date().toISOString().split('T')[0]
      };

      onSubmit(newAspiration);
      setTicket(ticketNumber);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center animate-in zoom-in duration-500 border border-red-50">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 text-red-800">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-black">Aspirasi Terkirim!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Terima kasih telah menyuarakan pendapatmu. Tim Komisi Aspirasi akan segera meninjau pesanmu.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-100">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Nomor Tiket Kamu</p>
            <p className="text-2xl font-mono font-bold text-black tracking-wider">{ticket}</p>
          </div>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                nim: '',
                contact: '',
                category: AspirationCategory.LAINNYA,
                message: '',
                isAnonymous: false
              });
            }} 
            className="w-full bg-red-800 text-white py-4 rounded-xl font-bold hover:bg-red-900 transition-all shadow-lg shadow-red-100"
          >
            Kirim Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-800 text-sm font-bold mb-6">RUANG SUARA</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight">
              Sampaikan <br/>Aspirasi & Keluhan
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              DPM HIMA PKO berkomitmen untuk menjembatani suara mahasiswa agar kebijakan jurusan lebih berpihak kepada kepentingan kita bersama.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-red-800 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Privasi Terjamin</h4>
                  <p className="text-slate-500 text-sm">Kamu dapat memilih mode anonim jika merasa keberatan untuk mencantumkan identitas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-black shrink-0">
                  <AtSign size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-black">Respon Cepat</h4>
                  <p className="text-slate-500 text-sm">Setiap aspirasi akan dibahas dalam rapat mingguan komisi dan diberikan tindak lanjut nyata.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-zinc-50 rounded-3xl border border-slate-200 flex gap-4">
              <Info className="text-red-800 shrink-0" size={24} />
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Harap gunakan bahasa yang sopan dan berikan detail yang cukup agar aspirasi Anda dapat diproses dengan lebih efektif.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black flex items-center gap-2">
                    <User size={16} /> Nama Lengkap <span className="text-slate-400 font-normal">(Opsional)</span>
                  </label>
                  <input 
                    type="text" 
                    disabled={formData.isAnonymous}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-800 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black flex items-center gap-2">
                    <FileText size={16} /> NIM <span className="text-slate-400 font-normal">(Opsional)</span>
                  </label>
                  <input 
                    type="text" 
                    disabled={formData.isAnonymous}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-800 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                    placeholder="Contoh: 2100018001"
                    value={formData.nim}
                    onChange={(e) => setFormData({...formData, nim: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Kategori Aspirasi</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.values(AspirationCategory).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat})}
                      className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                        formData.category === cat 
                        ? 'bg-red-800 border-red-800 text-white' 
                        : 'bg-white border-slate-200 text-slate-500 hover:border-red-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black">Pesan Aspirasi <span className="text-red-500">*</span></label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-800 outline-none transition-all resize-none"
                  placeholder="Sampaikan apa yang ingin kamu keluhkan atau sarankan..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <input 
                  id="anon"
                  type="checkbox" 
                  className="w-5 h-5 rounded border-slate-300 text-red-800 focus:ring-red-800"
                  checked={formData.isAnonymous}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setFormData({
                      ...formData, 
                      isAnonymous: checked,
                      name: checked ? '' : formData.name,
                      nim: checked ? '' : formData.nim
                    });
                  }}
                />
                <label htmlFor="anon" className="text-sm font-bold text-black select-none cursor-pointer">
                  Kirim sebagai Anonim (Sembunyikan Nama & NIM)
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-red-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Kirim Sekarang <Send size={20} /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspirationPage;
