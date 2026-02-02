
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, Calendar } from 'lucide-react';
import { News, Category } from '../types';

interface NewsPageProps {
  news: News[];
}

const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'Semua'>('Semua');

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Semua' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-white border-b border-slate-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Warta PKO</h1>
          <p className="text-slate-500 mb-10">Pusat dokumentasi dan berita seputar aktivitas DPM HIMA PKO.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari berita..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {(['Semua', ...Object.values(Category)] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-4 rounded-xl font-bold transition-all whitespace-nowrap border ${
                    category === cat 
                    ? 'bg-red-800 border-red-800 text-white shadow-lg shadow-red-100' 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-red-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Link 
                key={item.id} 
                to={`/berita/${item.id}`}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur shadow-sm rounded-lg text-xs font-bold text-red-800 uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>Oleh {item.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-red-800 transition-colors text-black">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-red-800 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca Selengkapnya <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 text-center border border-slate-100">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Tidak Menemukan Apapun</h3>
            <p className="text-slate-500">Coba ubah kata kunci pencarian atau filter kategori Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
