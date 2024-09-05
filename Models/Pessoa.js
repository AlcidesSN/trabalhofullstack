const { DataTypes, Model } = require('sequelize');
const conexao = require('../config/database');

module.exports = (sequelize) => { // Aceitando a instância do Sequelize como argumento
  class Pessoa extends Model {}

  Pessoa.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id',
      },
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Nome',

      },
      CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'CPF',

      },
      Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Telefone',

      },
    },
    {
      sequelize,  // Usando a instância do Sequelize passada para o método
      modelName: 'Pessoa',
      tableName: 'pessoas',
      timestamps: false,
    }
  );

  return Pessoa;
};
