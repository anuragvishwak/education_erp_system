import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xfnuhimxlyoargjhbmsi.supabase.co'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmbnVoaW14bHlvYXJnamhibXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNjAwMTAsImV4cCI6MjA4MDkzNjAxMH0.oydrGw5UnOtn-i94dMu_4dHmSGzDPOxhDuNrMxUc1QQ"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
