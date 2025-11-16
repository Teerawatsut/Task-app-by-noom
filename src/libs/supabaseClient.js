import { createClient } from '@supabase/supabase-js'
 
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY
 
//export เพื่อเอาไปใช้กับ Page ต่างๆที่จะต้องทำงานกับ Supabase ทั้ง DB และ Storage
export const supabase = createClient(supabaseUrl, supabaseKey)