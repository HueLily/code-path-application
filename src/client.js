import { createClient } from '@supabase/supabase-js';

const URL = 'https://ynbgggkmlnfbcbevvfzz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmdnZ2ttbG5mYmNiZXZ2Znp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NTI5NTYsImV4cCI6MjA0MDIyODk1Nn0.QU6rG1BK6UNH9nExQEryAqpNu23o2q4YA9E_cYSx_PI';

async function seedCreators() {
    const creators = [
      {
        name: 'Alice Johnson',
        description: 'Alice is a tech enthusiast and a prominent YouTuber focusing on coding tutorials.',
        social_media: 'https://www.youtube.com/alicejohnson',
      },
      {
        name: 'Bob Smith',
        description: 'Bob is a digital artist known for his stunning visual effects and animations.',
        social_media: 'https://www.instagram.com/bobsmith',
      },
      {
        name: 'Charlie Davis',
        description: 'Charlie creates content on personal finance and entrepreneurship, helping people achieve financial independence.',
        social_media: 'https://www.twitter.com/charliedavis',
      },
      {
        name: 'Diana Evans',
        description: 'Diana is a fitness coach who shares workout routines and health tips on her social media channels.',
        social_media: 'https://www.youtube.com/dianaevans',
      },
      {
        name: 'Ethan White',
        description: 'Ethan is a photographer and travel blogger capturing breathtaking landscapes from around the world.',
        social_media: 'https://www.instagram.com/ethanwhite',
      },
    ];
  
    for (const creator of creators) {
      const { data, error } = await supabase
        .from('creators')
        .insert([creator]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Inserted:', data);
      }
    }
  }
  
  seedCreators();

export const supabase = createClient(URL, API_KEY);