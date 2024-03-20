public class Token
{
    public int ID { get; set; }
    public string TokenString { get; set; }
    public DateTime DataExpiracao { get; set; }
    public int TitularID { get; set; }
    public bool Utilizado { get; set; }

   
    public Token(int id, string token, DateTime dataExpiracao, int titularID, bool utilizado)
    {
        ID = id;
        TokenString = token;
        DataExpiracao = dataExpiracao;
        TitularID = titularID;
        Utilizado = utilizado;
    }
}
