const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala_Participante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.SalaJuegos, {
        foreignKey: 'id_sala',
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'id_participante',
      });
    }
  }
  Sala_Participante.init({
  }, {
    sequelize,
    modelName: 'Sala_Participante',
  });
  return Sala_Participante;
};
