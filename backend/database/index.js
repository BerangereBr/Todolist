// const { createClient } = require('@supabase/supabase-js');

// const supabase = createClient(
//     process.env.SUPABASE_URL,
//     process.env.SUPABASE_SERVICE_ROLE_KEY
// );

// module.exports = async (req, res) => {
//     console.log("SUPABASE_URL:", process.env.SUPABASE_URL);

//     // Exemple d'appel à la base (facultatif mais utile pour logs)
//     const { data, error } = await supabase.from('todolist').select('*').limit(1);

//     if (error) console.error('SUPABASE ERROR:', error);

//     res.status(200).json({
//         message: 'API WORKS',
//         test: data || null
//     });
// };