import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qsuylohkvpdzynfvtyrd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdXlsb2hrdnBkenluZnZ0eXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTc2NjksImV4cCI6MjA2Mzc5MzY2OX0.RuBECxHCRRuwcGMEkKrwUfEAQQimdI1KV1ZGurg4a4E'

export const supabase = createClient(supabaseUrl, supabaseKey)