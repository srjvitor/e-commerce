module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Purchases', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      seller_id: {
        type: Sequelize.STRING,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },     
      purchaser_id: {
        type: Sequelize.STRING,
        references: { model: 'Purchases', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },   
      product_id: {
        type: Sequelize.STRING,
        references: { model: 'Products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },   
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Purchases');
  }
};
