using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Troopers.Capibank.Migrations
{
    /// <inheritdoc />
    public partial class Adicionartabelaatendimentos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Atendimentos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TitularId = table.Column<int>(type: "INTEGER", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: true),
                    DataChamado = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Resposta = table.Column<string>(type: "TEXT", nullable: false),
                    DataResposta = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Atendimentos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Atendimentos_Titulares_TitularId",
                        column: x => x.TitularId,
                        principalTable: "Titulares",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Atendimentos_TitularId",
                table: "Atendimentos",
                column: "TitularId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Atendimentos");
        }
    }
}
