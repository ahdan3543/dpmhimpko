
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter } from 'lucide-react';
import { News } from '../types';

interface NewsDetailPageProps {
  news: News[];
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ news }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = news.find(n => n.id === id);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Berita Tidak Ditemukan</h2>
        <button onClick={() => navigate('/berita')} className="bg-red-800 text-white px-6 py-2 rounded-lg">Kembali</button>
      </div>
    );
  }

  return (
    <article className="pb-24">
      {/* Breadcrumbs / Back */}
      <div className="max-w-4xl mx-auto px-4 pt-8 mb-8">
        <Link to="/berita" className="inline-flex items-center gap-2 text-slate-500 hover:text-red-800 font-bold transition-colors">
          <ArrowLeft size={18} /> Kembali ke Berita
        </Link>
      </div>

      <header className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-red-50 text-red-800 rounded-lg text-xs font-extrabold uppercase">{item.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight">
          {item.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Penulis</p>
              <p className="font-bold text-black">{item.author}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-800 border border-red-100">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Tanggal Terbit</p>
              <p className="font-bold text-black">{item.date}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
          <img src={item.image} alt={item.title} className="w-full h-auto object-cover max-h-[600px]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="prose prose-lg prose-slate max-w-none mb-16 leading-relaxed">
          <p className="text-xl text-red-900/80 font-bold mb-10 italic">
            {item.excerpt}
          </p>
          <div className="text-slate-700 space-y-6">
            <p>{item.content}</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors font-bold">
              <Share2 size={18} /> Bagikan
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-black text-white hover:opacity-80 transition-colors">
              <Facebook size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-800 text-white hover:opacity-80 transition-colors">
              <Twitter size={20} />
            </button>
          </div>
          <Link to="/berita" className="text-red-800 font-extrabold hover:underline">Berita Lainnya &rarr;</Link>
        </div>
      </div>
    </article>
  );
};

export default NewsDetailPage;
