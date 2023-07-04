import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://noqnuxwaznsthcpeipnh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vcW51eHdhem5zdGhjcGVpcG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0Njk2NTksImV4cCI6MjAwNDA0NTY1OX0.T-pOnmNxfEqZiUuqUwpkSy7y7l5Zw4fJfQ-J_jdqlPs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
