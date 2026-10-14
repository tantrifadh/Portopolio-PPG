import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Share2, 
  Search, 
  ArrowLeft, 
  Send,
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
        text: 'Konsep paspor belajar di awal semester sangat relevan. Saya akan mencoba menerapkannya pada materi sistem organ.'
      },
      {
        author: 'Bambang Prasetyo',
        role: 'Mahasiswa PPG Prajabatan',
        date: '31 Mei 2024',
        text: 'Penjelasan diferensiasi produk sangat membantu memperjelas bahwa guru tidak perlu menyusun 36 RPP berbeda.'
      }
    ],
    'blog-02': [
      {
        author: 'Dra. Hj. Wahyuni, M.Pd.',
        role: 'Dosen Pembimbing Lapangan',
        date: '14 April 2024',
        text: 'Refleksi yang sangat jujur. Fleksibilitas saat rencana awal menemui kendala justru membuktikan kematangan pedagogis guru.'
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
        <article className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-150">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Artikel</span>
          </button>

          <header className="space-y-4 border-b border-stone-200 pb-8">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-medium text-stone-800">{selectedPost.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.date}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-stone-600">
                Oleh: <strong className="text-stone-900 font-semibold">Tantri Fadhillah, S.Pd.</strong>
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLike(selectedPost.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border text-xs font-medium transition-colors cursor-pointer ${
                    hasLikedMap[selectedPost.id]
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLikedMap[selectedPost.id] ? 'fill-current text-white' : ''}`} />
                  <span>{likesMap[selectedPost.id] || selectedPost.likes} Apresiasi</span>
                </button>

                <button
                  onClick={() => handleShare(selectedPost)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer text-xs font-medium"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-stone-900" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedShare ? 'Tersalin' : 'Bagikan'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Article Prose Content */}
          <div className="space-y-6 text-stone-800 leading-relaxed text-base font-sans">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-justify text-stone-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-stone-500">Topik:</span>
            {selectedPost.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Comments & Discussion Section */}
          <section className="pt-10 border-t border-stone-200 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-stone-700" />
                <span>Ruang Diskusi ({(commentsMap[selectedPost.id] || []).length})</span>
              </h3>
            </div>

            {/* Comment Form */}
            <form 
              onSubmit={(e) => handleAddComment(selectedPost.id, e)}
              className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3"
            >
              <p className="text-xs font-medium text-stone-700">Tinggalkan tanggapan atau pengalaman Anda:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  required
                  className="px-3 py-2 bg-white border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:border-stone-400"
                />
                <input
                  type="text"
                  placeholder="Peran / Instansi (opsional)"
                  value={newCommentRole}
                  onChange={(e) => setNewCommentRole(e.target.value)}
                  className="px-3 py-2 bg-white border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:border-stone-400"
                />
              </div>

              <textarea
                placeholder="Tuliskan gagasan atau pertanyaan Anda di sini..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 bg-white border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:border-stone-400 resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded text-xs font-medium transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Tanggapan</span>
                </button>
              </div>
            </form>

            {/* Existing Comments List */}
            <div className="space-y-3">
              {(commentsMap[selectedPost.id] || []).map((comment, cIdx) => (
                <div key={cIdx} className="bg-white border border-stone-200 rounded-xl p-4 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-stone-900">{comment.author}</strong>
                      <span className="text-stone-500 text-[11px] ml-1.5 font-mono">({comment.role})</span>
                    </div>
                    <span className="text-stone-400 text-[11px] font-mono">{comment.date}</span>
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
        /* Blog Index View */
        <div className="space-y-10">
          
          {/* Header */}
          <div className="border-b border-stone-200 pb-6">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
              Catatan & Esai Pembelajaran
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
              Blog Pendidikan
            </h1>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
              Kumpulan esai reflektif mengenai dinamika pembelajaran berdiferensiasi, catatan lapangan PPL, serta telaah etis peran guru di tengah perkembangan teknologi.
            </p>
          </div>

          {/* Search & Topic Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari artikel atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400"
              />
            </div>

            {/* Tag Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-stone-900 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-stone-400 transition-colors cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-medium text-stone-800">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-stone-700 transition-colors leading-snug">
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
                      <Heart className="w-3.5 h-3.5" />
                      {likesMap[post.id] || post.likes}
                    </span>
                    <span className="text-stone-900 font-medium group-hover:underline">
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
