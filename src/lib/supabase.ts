
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vjdfsueamhqmjiqzrxgu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZGZzdWVhbWhxbWppcXpyeGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MTEyOTcsImV4cCI6MjA1Njk4NzI5N30.rfTJLxwkJ7TrzPmzBD89Nhv0TSSkV5ObBvb19eq_kPQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
