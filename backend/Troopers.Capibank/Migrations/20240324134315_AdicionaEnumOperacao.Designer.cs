﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Troppers.Capibank.Data.Context;

#nullable disable

namespace Troopers.Capibank.Migrations
{
    [DbContext(typeof(CapibankContext))]
    [Migration("20240324134315_AdicionaEnumOperacao")]
    partial class AdicionaEnumOperacao
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.3");

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Atendimento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataChamado")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataResposta")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmAberto")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Resposta")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("TitularId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("TitularId");

                    b.ToTable("Atendimentos");
                });

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Endereco", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Bairro")
                        .HasColumnType("TEXT");

                    b.Property<string>("CEP")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cidade")
                        .HasColumnType("TEXT");

                    b.Property<string>("Complemento")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Logradouro")
                        .HasColumnType("TEXT");

                    b.Property<string>("Numero")
                        .HasColumnType("TEXT");

                    b.Property<string>("UF")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Enderecos");
                });

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Titular", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("AlteradoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("EnderecoId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("EnderecoId");

                    b.ToTable("Titulares");
                });

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Transacao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ContaDestinoOrigemId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ContaId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataTransacao")
                        .HasColumnType("TEXT");

                    b.Property<int>("Situacao")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TipoTransacao")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Valor")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Transacoes");
                });

            modelBuilder.Entity("Troopers.Capibank.Models.ContaCorrente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("AlteradaEm")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("BloqueadaEm")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadaEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EstaAtiva")
                        .HasColumnType("INTEGER");

                    b.Property<int>("NumeroConta")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Saldo")
                        .HasColumnType("TEXT");

                    b.Property<int?>("TitularId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("TitularId");

                    b.ToTable("ContasCorrente");
                });

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Atendimento", b =>
                {
                    b.HasOne("Troopers.Capibank.Domain.Models.Titular", "Titular")
                        .WithMany()
                        .HasForeignKey("TitularId");

                    b.Navigation("Titular");
                });

            modelBuilder.Entity("Troopers.Capibank.Domain.Models.Titular", b =>
                {
                    b.HasOne("Troopers.Capibank.Domain.Models.Endereco", "Endereco")
                        .WithMany()
                        .HasForeignKey("EnderecoId");

                    b.Navigation("Endereco");
                });

            modelBuilder.Entity("Troopers.Capibank.Models.ContaCorrente", b =>
                {
                    b.HasOne("Troopers.Capibank.Domain.Models.Titular", "Titular")
                        .WithMany()
                        .HasForeignKey("TitularId");

                    b.Navigation("Titular");
                });
#pragma warning restore 612, 618
        }
    }
}
