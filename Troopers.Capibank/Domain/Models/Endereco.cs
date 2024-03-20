namespace Troopers.Capibank.Domain.Models;
public class Endereco 
{
    public int Id { get; set; }
    public string? CEP { get; set; }
    public string? Logradouro { get; set; }
    public string? Numero { get; set; }
    public string Complemento { get; set; } = string.Empty;
    public string? Bairro { get; set;}
    public string? Cidade { get; set; }
    public string? UF { get; set; }
}