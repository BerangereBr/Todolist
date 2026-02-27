const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
module.exports = supabase;