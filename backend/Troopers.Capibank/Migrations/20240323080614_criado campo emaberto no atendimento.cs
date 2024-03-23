using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Troopers.Capibank.Migrations
{
    /// <inheritdoc />
    public partial class criadocampoemabertonoatendimento : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EmAberto",
                table: "Atendimentos",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmAberto",
                table: "Atendimentos");
        }
    }
}
