using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Troopers.Capibank.Migrations
{
    /// <inheritdoc />
    public partial class adicionandocamposenha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Senha",
                table: "Titulares",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Senha",
                table: "Titulares");
        }
    }
}
