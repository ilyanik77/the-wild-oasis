import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cwxaxvhtbzcntrqxqzrn.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eGF4dmh0YnpjbnRycXhxenJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzMDgyNDYsImV4cCI6MjA0Mzg4NDI0Nn0.ou9CgslGux3dECGh3djM2x2hcZIc2958-1AOhHrvces'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
