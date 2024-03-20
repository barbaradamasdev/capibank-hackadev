public class Titular
{
    private string cpf;
    private string nome;
    private DateTime dataNascimento;
    private string numeroConta;
    private string email;
    private string senha;

    
    public string CPF
    {
        get => cpf;
        set
        {
            if (!ValidarCPF(value))
                throw new ArgumentException("CPF inválido");
            cpf = value;
        }
    }

    public string Nome
    {
        get => nome;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Nome não pode estar vazio");
            nome = value;
        }
    }

    public DateTime DataNascimento
    {
        get => dataNascimento;
        set
        {
            if (value > DateTime.Now)
                throw new ArgumentException("Data de nascimento inválida");
            dataNascimento = value;
        }
    }

    public string NumeroConta
    {
        get => numeroConta;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("Número de conta não pode estar vazio");
            numeroConta = value;
        }
    }

    public string Email
    {
        get => email;
        set
        {
            if (!ValidarEmail(value))
                throw new ArgumentException("Email inválido");
            email = value;
        }
    }

    public string Senha
    {
        get => senha;
        set
        {
            if (string.IsNullOrWhiteSpace(value) || value.Length < 6)
                throw new ArgumentException("Senha deve ter pelo menos 6 caracteres");
            senha = value;
        }
    }

    private bool ValidarCPF(string cpf)
    {
        cpf = Regex.Replace(cpf, "[^0-9]", "");

        if (cpf.Length != 11)
            return false;

        bool digitosIguais = true;
        for (int i = 1; i < cpf.Length; i++)
        {
            if (cpf[i] != cpf[0])
            {
                digitosIguais = false;
                break;
            }
        }
        if (digitosIguais)
            return false;

        int soma = 0;
        for (int i = 0; i < 9; i++)
        {
            soma += int.Parse(cpf[i].ToString()) * (10 - i);
        }
        int resto = soma % 11;
        int digito1 = resto < 2 ? 0 : 11 - resto;

        soma = 0;
        for (int i = 0; i < 10; i++)
        {
            soma += int.Parse(cpf[i].ToString()) * (11 - i);
        }
        resto = soma % 11;
        int digito2 = resto < 2 ? 0 : 11 - resto;
        return digito1 == int.Parse(cpf[9].ToString()) && digito2 == int.Parse(cpf[10].ToString());
    }

    private bool ValidarEmail(string email)
    {
        string padrao = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
        return Regex.IsMatch(email, padrao);
    }
}