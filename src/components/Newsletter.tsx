// ✅ NOVO: Conexão com Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ✅ NOVO: Função async para salvar no banco
const { data, error } = await supabase
  .from("newsletter")
  .insert([{ email: email, created_at: new Date() }])
  .select();

// ✅ NOVO: Tratamento de erros real
if (error.code === "23505") { // Email duplicado
  setErrorMessage("Este e-mail já está inscrito.");
}
