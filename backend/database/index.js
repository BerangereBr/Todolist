const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);
module.exports = async (req, res) => {
    console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
    // Petit test pour voir si on peut lire la date actuelle
    const { data, error } = await supabase.rpc('now'); // ou toute fonction simple
    if (error) console.error('SUPABASE ERROR:', error);

    res.status(200).json({
        message: 'API WORKS',
        dbTest: data || null
    });
};
// module.exports = supabase;