CREATE TABLE IF NOT EXISTS contact (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(15) NOT NULL,
  message VARCHAR(600) NOT NULL,
  createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);


CREATE TABLE IF NOT EXISTS projects (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(250) NOT NULL,
  desc VARCHAR(1500) NOT NULL,
  thumbnail VARCHAR(200) NOT NULL,
  address VARCHAR(50),
  apartment_size VARCHAR(50),
  road_size VARCHAR(50),
  parking VARCHAR(50),
  land_size VARCHAR(50),
  units VARCHAR(50),
  floors VARCHAR(50),
  handover_time VARCHAR(50),
  createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);


CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name varchar (30),
  email varchar(50),
  phone varchar (15),
  project_name varchar (50),
  area varchar (300),
  respond enum('1','0'),
  createdAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updatedAt TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
);

