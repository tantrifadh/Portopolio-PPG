export type SectionId = 
  | 'beranda'
  | 'profil'
  | 'artefak'
  | 'penilaian'
  | 'dokumentasi'
  | 'seminar';

export interface SeminarTask {
  id: string;
  code: string;
  title: string;
  course: string;
  lecturer: string;
  semester: string;
  date: string;
  pagesCount: number;
  grade: string;
  category: 'PTK' | 'Kajian Literatur' | 'Refleksi' | 'Inovasi Digital' | 'Artikel Ilmiah';
  abstractIndo: string;
  abstractEng: string;
  keywords: string[];
  customPdfUrl?: string;
  pages: {
    pageNumber: number;
    title: string;
    sections: {
      heading: string;
      content?: string | string[];
      table?: {
        headers: string[];
        rows: string[][];
        caption?: string;
      };
      callout?: string;
    }[];
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverImage?: string;
  content: string[];
  tags: string[];
  likes: number;
}

export interface ArtifactItem {
  id: string;
  title: string;
  type: 'Modul Ajar' | 'LKPD' | 'Media Digital' | 'Asesmen' | 'Video Pembelajaran';
  curriculum: string;
  gradeLevel: string;
  subject: string;
  description: string;
  competencies: string[];
  fileSize: string;
  pages: number;
  previewSnippet: string;
}

export interface AssessmentRubric {
  id: string;
  title: string;
  type: 'Formatif' | 'Sumatif' | 'Diagnostik' | 'Karakter P5';
  subject: string;
  description: string;
  criteria: {
    name: string;
    weight: number;
    levels: {
      score: number;
      label: string;
      descriptor: string;
    }[];
  }[];
}

export interface DocumentationPhoto {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'Praktik Mengajar' | 'Bimbingan Siswa' | 'Seminar & Workshop' | 'Kolaborasi';
  imageUrl: string;
  caption: string;
  attendeesCount?: string;
}
