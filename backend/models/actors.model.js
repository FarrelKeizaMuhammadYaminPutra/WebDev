import { DataTypes } from "sequelize";
import sequelize from "../db/connectDB.js";

const Actor = sequelize.define(
  "actors",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    character_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    profile_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    timestamps: false, // Tidak ada kolom createdAt atau updatedAt dalam tabel
  }
);

export default Actor;
