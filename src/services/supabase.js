
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://chdiajcxyyjvitmjrhcl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoZGlhamN4eXlqdml0bWpyaGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDg0MDAsImV4cCI6MjAxODkyNDQwMH0.xzMlcK4X5BPKlRTi4kgdPxc0Ec4McLm1u2QKnufXAbo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;