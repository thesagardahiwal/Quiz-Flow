export interface Option {
  id: number;
  description: string;
  question_id: number;
  is_correct: boolean;
  created_at: string;
  updated_at: string;
  unanswered: boolean;
  photo_url: string | null;
}

export interface ReadingMaterial {
  id: number;
  keywords: string[];
  content: string | null;
  created_at: string;
  updated_at: string;
  content_sections: string[];
  practice_material: {
    content: string[];
    keywords: string[];
  };
}

export interface Question {
  id: number;
  description: string;
  difficulty_level: string | null;
  topic: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  detailed_solution: string;
  type: string | null;
  is_mandatory: boolean;
  show_in_feed: boolean;
  pyq_label: string | null;
  topic_id: number;
  reading_material_id: number | null;
  fixed_at: string | null;
  fix_summary: string | null;
  created_by: string | null;
  updated_by: string | null;
  quiz_level: string | null;
  question_from: string;
  language: string | null;
  photo_url: string | null;
  photo_solution_url: string | null;
  is_saved: boolean;
  tag: string;
  options: Option[];
  reading_material?: ReadingMaterial;
}

export interface Quiz {
  id: number;
  name: string | null;
  title: string;
  description: string;
  difficulty_level: string | null;
  topic: string;
  time: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  duration: number;
  end_time: string;
  negative_marks: number;
  correct_answer_marks: number;
  shuffle: boolean;
  show_answers: boolean;
  lock_solutions: boolean;
  is_form: boolean;
  show_mastery_option: boolean;
  reading_material: string | null;
  quiz_type: string | null;
  is_custom: boolean;
  banner_id: number | null;
  exam_id: number | null;
  show_unanswered: boolean;
  ends_at: string;
  lives: number | null;
  live_count: string;
  coin_count: number;
  questions_count: number;
  daily_date: string;
  max_mistake_count: number;
  reading_materials: ReadingMaterial[];
  questions: Question[];
}