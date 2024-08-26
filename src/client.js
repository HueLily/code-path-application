import { createClient } from '@supabase/supabase-js';

const URL = 'https://ynbgggkmlnfbcbevvfzz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmdnZ2ttbG5mYmNiZXZ2Znp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NTI5NTYsImV4cCI6MjA0MDIyODk1Nn0.QU6rG1BK6UNH9nExQEryAqpNu23o2q4YA9E_cYSx_PI';


export const supabase = createClient(URL, API_KEY);