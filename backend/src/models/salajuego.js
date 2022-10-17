const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SalaJuego extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Usuario, {
        foreignKey: 'lider',
      });
    }
  }
  SalaJuego.init({
    codigo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SalaJuego',
  });
  return SalaJuego;
};
