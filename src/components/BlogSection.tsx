import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Share2, 
  Search, 
  ArrowLeft, 
  Send,
  Sparkles,
  Check
} from 'lucide-react';
import { BlogPost } from '../types/portfolio';
import { BLOG_POSTS } from '../data/portfolioData';

interface BlogSectionProps {
  initialPostId?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ initialPostId }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (initialPostId) {
      const found = BLOG_POSTS.find(p => p.id === initialPostId);
      if (found) return found;
    }
    return null;
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('Semua');
  const [likesMap, setLikesMap] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    BLOG_POSTS.forEach(p => { init[p.id] = p.likes; });
    return init;
  });
  const [hasLikedMap, setHasLikedMap] = useState<Record<string, boolean>>({});

  // Comments state
  const [commentsMap, setCommentsMap] = useState<Record<string, { author: string; role: string; date: string; text: string }[]>>({
    'blog-01': [
      {
        author: 'Rina S., S.Pd.',
        role: 'Guru Biologi SMA',
        date: '29 Mei 2024',
        text: 'Sangat menginspirasi Bu Tantri! Konsep paspor belajar di awal semester akan saya adaptasikan di kelas saya semester depan.'
      },
      {
        author: 'Bambang Prasetyo',
        role: 'Mahasiswa PPG Prajabatan',
        date: '31 Mei 2024',
        text: 'Penjelasan diferensiasi produk sangat jelas, seringkali guru pemula seperti kami bingung antara diferensiasi dan membuat banyak RPP.'
      }
    ],
    'blog-02': [
      {
        author: 'Dra. Hj. Wahyuni, M.Pd.',
        role: 'Dosen Pembimbing Lapangan',
        date: '14 April 2024',
        text: 'Refleksi yang sangat jujur dan menyentuh. Kemampuan adaptasi saat rencana ajar menemui kendala adalah tanda kematangan seorang pendidik sejati.'
      }
    ]
  });

  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentRole, setNewCommentRole] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [copiedShare, setCopiedShare] = useState(false);

  // Extract all unique tags
  const allTags = ['Semua', ...Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags)))];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = selectedTag === 'Semua' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleLike = (postId: string) => {
    if (hasLikedMap[postId]) {
      setLikesMap(prev => ({ ...prev, [postId]: prev[postId] - 1 }));
      setHasLikedMap(prev => ({ ...prev, [postId]: false }));
    } else {
      setLikesMap(prev => ({ ...prev, [postId]: prev[postId] + 1 }));
      setHasLikedMap(prev => ({ ...prev, [postId]: true }));
    }
  };

  const handleShare = (post: BlogPost) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleAddComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment = {
      author: newCommentName.trim(),
      role: newCommentRole.trim() || 'Pendidik / Pembaca',
      date: 'Hari ini',
      text: newCommentText.trim()
    };

    setCommentsMap(prev => ({
      ...prev,
      [postId]: [newComment, ...(prev[postId] || [])]
    }));

    setNewCommentName('');
    setNewCommentRole('');
    setNewCommentText('');
  };

  return (
    <div className="space-y-12">
      
      {/* If viewing a single post */}
      {selectedPost ? (
        <article className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-amber-800" />
            <span>Kembali ke Daftar Tulisan Blog</span>
          </button>

          <header className="space-y-4 border-b-2 border-amber-200 pb-8">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1 text-stone-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-orange-600" />
                {selectedPost.date}
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="flex items-center gap-1 text-stone-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                {selectedPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-stone-600">
                Ditulis oleh: <strong className="text-stone-900">Tantri Fadhillah, S.Pd.</strong>
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLike(selectedPost.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                    hasLikedMap[selectedPost.id]
                      ? 'bg-rose-100 border-rose-300 text-rose-800 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:text-rose-600 hover:border-rose-300'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLikedMap[selectedPost.id] ? 'fill-current text-rose-600' : 'text-stone-400'}`} />
                  <span>{likesMap[selectedPost.id] || selectedPost.likes} Apresiasi</span>
                </button>

                <button
                  onClick={() => handleShare(selectedPost)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border-2 border-stone-200 bg-white text-stone-700 hover:text-stone-900 hover:border-amber-300 transition-all cursor-pointer"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{copiedShare ? 'Tautan Disalin!' : 'Bagikan'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Article Prose Content */}
          <div className="space-y-6 text-stone-800 leading-relaxed text-sm sm:text-base font-sans">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-justify text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-amber-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-700">Topik Terkait:</span>
            {selectedPost.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-amber-50 border border-amber-200 text-amber-950 font-semibold px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Comments & Discussion Section with Cheerful Atmosphere */}
          <section className="pt-10 border-t-2 border-amber-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-600" />
                <span>Ruang Diskusi & Umpan Balik Guru ({(commentsMap[selectedPost.id] || []).length})</span>
              </h3>
            </div>

            {/* Comment Form */}
            <form 
              onSubmit={(e) => handleAddComment(selectedPost.id, e)}
              className="bg-amber-50/50 border-2 border-amber-200 rounded-3xl p-6 space-y-3 shadow-xs"
            >
              <p className="text-xs font-bold text-amber-950">Tinggalkan Tanggapan atau Refleksi Rekan Guru:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  required
                  className="px-3.5 py-2.5 bg-white border-2 border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Peran / Asal Instansi (opsional)"
                  value={newCommentRole}
                  onChange={(e) => setNewCommentRole(e.target.value)}
                  className="px-3.5 py-2.5 bg-white border-2 border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-amber-500"
                />
              </div>

              <textarea
                placeholder="Tuliskan gagasan, pertanyaan, atau refleksi pembelajaran Anda di sini..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
                rows={3}
                className="w-full px-3.5 py-2.5 bg-white border-2 border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-amber-500 resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Tanggapan</span>
                </button>
              </div>
            </form>

            {/* Existing Comments List */}
            <div className="space-y-3">
              {(commentsMap[selectedPost.id] || []).map((comment, cIdx) => (
                <div key={cIdx} className="bg-white border-2 border-stone-200/90 rounded-2xl p-5 space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-stone-900">{comment.author}</strong>
                      <span className="text-stone-500 text-[11px] ml-1.5 font-medium">({comment.role})</span>
                    </div>
                    <span className="text-stone-400 text-[11px]">{comment.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </article>
      ) : (
        /* Blog Index View with Cheerful Cards */
        <div className="space-y-10">
          
          {/* Header */}
          <div className="border-b border-amber-200 pb-6">
            <span className="text-xs font-bold text-rose-800 bg-rose-100/90 border border-rose-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              Catatan Pedagogis & Refleksi Hati
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
              Blog Pendidikan
            </h1>
            <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
              Kumpulan esai reflektif mengenai dinamika pembelajaran berdiferensiasi, kisah nyata dari ruang kelas PPL, serta perenungan filosofis menjaga sentuhan kemanusiaan guru di era teknologi modern.
            </p>
          </div>

          {/* Search & Topic Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari judul artikel atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-stone-200 rounded-2xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 shadow-2xs"
              />
            </div>

            {/* Tag Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                      : 'bg-white text-stone-700 border-2 border-stone-200 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid with Cheerful Framing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white border-2 border-stone-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500 font-medium">{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-stone-400">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-100" />
                      {likesMap[post.id] || post.likes}
                    </span>
                    <span className="text-amber-800 font-bold group-hover:text-orange-700 group-hover:underline">
                      Baca →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
