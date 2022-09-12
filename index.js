const {createClient} = require('@supabase/supabase-js')

const supabase = createClient('https://rqotjimiqgpllnwxxwek.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxb3RqaW1pcWdwbGxud3h4d2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5ODM1MzQsImV4cCI6MTk3ODU1OTUzNH0.hzPTx166pYy-9KvgQIwxFOnhJ5zndOWcpsc5PbFvzl0')

console.log(supabase);
