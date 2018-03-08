using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Billy.Infrastructure.Migrations
{
    public partial class UpdateBillModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Categories_CategoryId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Suppliers_SupplierId",
                table: "Bills");

            migrationBuilder.AlterColumn<long>(
                name: "SupplierId",
                table: "Bills",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<long>(
                name: "CategoryId",
                table: "Bills",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Bills",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bills_UserId",
                table: "Bills",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Categories_CategoryId",
                table: "Bills",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Suppliers_SupplierId",
                table: "Bills",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_AspNetUsers_UserId",
                table: "Bills",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Categories_CategoryId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Suppliers_SupplierId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Bills_AspNetUsers_UserId",
                table: "Bills");

            migrationBuilder.DropIndex(
                name: "IX_Bills_UserId",
                table: "Bills");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Bills");

            migrationBuilder.AlterColumn<long>(
                name: "SupplierId",
                table: "Bills",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "CategoryId",
                table: "Bills",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Categories_CategoryId",
                table: "Bills",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Suppliers_SupplierId",
                table: "Bills",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
