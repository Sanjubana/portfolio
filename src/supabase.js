import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
// Default fallback values provide seamless localhost demo preview without crashing if .env is missing
const DEMO_SUPABASE_URL = "https://ffuabeldbhpxrkgkwlza.supabase.co";
const DEMO_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CMVX_bNSc67cCpjX3zr9sw_T16SwsQo";


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEMO_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || DEMO_SUPABASE_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) {
  console.warn("Notice: Using demo Supabase credentials. To connect your own Supabase project, define VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);