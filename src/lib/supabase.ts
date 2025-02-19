import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false
    }
  }
);

// Type definitions based on your database schema
export interface Testimonial {
  id: number;
  client_name: string;
  testimonial: string;
  rating: number;
  created_at: string;
}

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  created_at: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  slug: string;
  image_url: string;
  published_at: string;
  created_at: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  icon_url: string;
  created_at: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
} 