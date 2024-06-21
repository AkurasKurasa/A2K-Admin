import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qapffjpywxedqtwyeaeo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcGZmanB5d3hlZHF0d3llYWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODk0MDgsImV4cCI6MjAzNDI2NTQwOH0.PG7QDV_WeDa9f4rhvrsX5Kx7B1aseqrdP9ns8z2xxB0'
export const supabase = createClient(supabaseUrl, supabaseKey)