// Este arquivo e carregado pelas paginas HTML antes dos scripts de cada pagina.
// A URL do cliente deve ser a URL base do projeto, sem "/rest/v1/".
const SUPABASE_URL = "https://snatjdxscznrfzvqkxlr.supabase.co";
const SUPABASE_KEY = "sb_publishable_HWTUIDoeuY4RCa33P6aaWQ_MzL2AN5O";

if (!window.supabase?.createClient) {
    throw new Error("O SDK do Supabase precisa ser carregado antes de supabase.js.");
}

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
);
