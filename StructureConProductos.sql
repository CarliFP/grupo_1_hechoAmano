-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: HechoAmanoDB
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categories` (
  `idCategories` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idCategories`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'accesorios'),(2,'arte'),(3,'hogar'),(4,'juegos'),(5,'cosmetica'),(6,'ropa-y-calzado');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CategoriesUsers`
--

DROP TABLE IF EXISTS `CategoriesUsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CategoriesUsers` (
  `idCategoriesUsers` int NOT NULL AUTO_INCREMENT,
  `idUsers` int NOT NULL,
  `idCategories` int NOT NULL,
  PRIMARY KEY (`idCategoriesUsers`),
  KEY `FK_CategoriesUsers_Categories_idCategory_idx` (`idCategories`),
  KEY `FK_CategoriesUsers_Users_idUsers_idx` (`idUsers`),
  CONSTRAINT `FK_CategoriesUsers_Categories_idCategory` FOREIGN KEY (`idCategories`) REFERENCES `Categories` (`idCategories`),
  CONSTRAINT `FK_CategoriesUsers_Users_idUsers` FOREIGN KEY (`idUsers`) REFERENCES `Users` (`idUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CategoriesUsers`
--

LOCK TABLES `CategoriesUsers` WRITE;
/*!40000 ALTER TABLE `CategoriesUsers` DISABLE KEYS */;
INSERT INTO `CategoriesUsers` VALUES (1,1,3),(2,2,5);
/*!40000 ALTER TABLE `CategoriesUsers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Countries` (
  `idCountries` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idCountries`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Countries`
--

LOCK TABLES `Countries` WRITE;
/*!40000 ALTER TABLE `Countries` DISABLE KEYS */;
INSERT INTO `Countries` VALUES (1,'Argentina'),(2,'Bolivia'),(3,'Brasil'),(4,'Colombia'),(5,'Chile'),(6,'Ecuador'),(7,'Paraguay'),(8,'Peru'),(9,'Uruguay');
/*!40000 ALTER TABLE `Countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderProducts`
--

DROP TABLE IF EXISTS `OrderProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `OrderProducts` (
  `idOrderProducts` int NOT NULL AUTO_INCREMENT,
  `idProducts` int NOT NULL,
  `idOrders` int NOT NULL,
  `units` int NOT NULL,
  PRIMARY KEY (`idOrderProducts`),
  KEY `FK_OrderProducts_Products_idProducts_idx` (`idProducts`),
  KEY `FK_OrderProducts_Orders_idOrders_idx` (`idOrders`),
  CONSTRAINT `FK_OrderProducts_Orders_idOrders` FOREIGN KEY (`idOrders`) REFERENCES `Orders` (`idOrders`),
  CONSTRAINT `FK_OrderProducts_Products_idProducts` FOREIGN KEY (`idProducts`) REFERENCES `Products` (`idProducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderProducts`
--

LOCK TABLES `OrderProducts` WRITE;
/*!40000 ALTER TABLE `OrderProducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderProducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orders` (
  `idOrders` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `Users_idUsers` int NOT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idOrders`),
  KEY `fk_Orders_Users1_idx` (`Users_idUsers`),
  CONSTRAINT `fk_Orders_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `Users` (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `idProducts` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `seller` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `payment` int NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `shipping` decimal(10,2) NOT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `idCategory` int NOT NULL,
  `idSection` int NOT NULL,
  `idTienda` int DEFAULT NULL,
  PRIMARY KEY (`idProducts`),
  KEY `FK_Products_Categories_idCategory_idx` (`idCategory`),
  KEY `FK_Products_Sections_idSection_idx` (`idSection`),
  KEY `FK_Products_Tienda_idTienda_idx` (`idTienda`),
  CONSTRAINT `FK_Products_Categories_idCategory` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`idCategories`),
  CONSTRAINT `FK_Products_Sections_idSection` FOREIGN KEY (`idSection`) REFERENCES `Sections` (`idSections`),
  CONSTRAINT `FK_Products_Tienda_idTienda` FOREIGN KEY (`idTienda`) REFERENCES `Tienda` (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Pintura de acrílico artesanal','Carla López',200.00,7,3,'img1-A-pinturaArtesanalAcrílico.png','pintura acrílica artesanal',200.00,'15',2,1,1),(2,'Mascarilla','José López',200.00,7,3,'img-1-C-mascarilla.png','mascarilla personalizada con logo',200.00,NULL,6,1,1),(3,'Palo santo!!! nuevo','José López',200.00,7,3,'img1-h-paloSanto.png','aromas naturales',200.00,'15',3,1,1),(4,'Apila los gatos!','José López',100.00,2,3,'img1-j-apilaLosGatos.png','Apila los gatos!',340.00,'50',4,2,1),(5,'Zapatos','José López',100.00,2,3,'img1-zapatosHechosAmano.png','Zapatos',340.00,'50',6,2,1),(6,'Linoleografía','José López',100.00,2,3,'img2-A-linoleografía.png','Linoleografía',340.00,'15',2,2,1),(7,'Accesorio de cabello','José López',100.00,2,3,'img2-C-accesorioCabello.png','Accesorio de cabello',340.00,'50',1,2,1),(8,'Hierbas veganas','José López',100.00,2,3,'img2-h-hierbasVeganas.png','Hierbas veganas',340.00,'50',1,2,1),(9,'Bloques de letras','José López',100.00,2,3,'img2-j-bloquesDeLetras.png','Bloques de letras',340.00,'50',4,1,1),(10,'Remera de lino','José López',100.00,2,3,'img2-RC-remerasdeLino.png','Remera de lino',340.00,'50',6,2,1),(11,'Grabado','José López',100.00,2,3,'img3-A-grabado.png','Grabado',340.00,'50',2,2,1),(12,'Grabado de madera','José López',100.00,2,3,'img3-A-grabadoMadera.png','Grabado de madera',340.00,'50',2,1,1),(13,'Hebilla Cuero cabello','José López',367.00,200,6,'img3-C-cueroCabello.png','hebilla cuero natural',456.00,NULL,1,1,1),(14,'Soporte para cepillo de dientes','José López',100.00,2,3,'img3-h-soporteParaCepilloDeDientes.png','Soporte para cepillo de dientes',340.00,'50',3,2,1),(15,'Matryoshka de gallinas','José López',100.00,2,3,'img3-j-matryoshkaGallina.png','Matryoshka de gallinas',340.00,'50',2,1,1),(16,'Buzo','José López',1500.00,10,3,'img3-RC-buzo.png','buzo talle único con logo impreso a elección',340.00,NULL,6,2,1),(17,'Figuras en madera','José López',100.00,2,3,'img4-A_figurasEnMadera.png','Figuras en madera',340.00,'50',4,1,1),(18,'Cinturón','José López',100.00,2,3,'img4-C-cinturon.png','Cinturón',340.00,'50',6,1,1),(19,'Señal de madera','José López',100.00,2,3,'img4-h-close&openDeMadera.png','Señal de madera',340.00,'50',3,1,1),(20,'Ardilla de la Era del Hielo','José López',100.00,2,3,'img4-j-ardillaEraDelHielo.png','Ardilla de la Era del Hielo',340.00,'50',2,1,1),(21,'Jeans','José López',100.00,2,3,'img4-RC-jeans.png','Jeans',340.00,'50',6,1,1),(22,'Cepillo de dientes','José López',100.00,2,3,'img5-P-cepillodedientes.png','Cepillo de dientes',340.00,'50',5,2,1),(23,'Jabón antibacteriano','José López',100.00,2,3,'img5-P-jabonantibaPteriano.png','Jabón antibacteriano',340.00,'50',5,1,1),(24,'Jabón natural','José López',100.00,2,3,'img5-P-jabonNatural.png','Jabón natural',340.00,'50',5,1,1),(25,'Peines de Bambú','José López',100.00,2,3,'img5-P-peinesdeBambu.png','Peines de Bambú',340.00,'50',1,1,1);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sections`
--

DROP TABLE IF EXISTS `Sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sections` (
  `idSections` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idSections`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sections`
--

LOCK TABLES `Sections` WRITE;
/*!40000 ALTER TABLE `Sections` DISABLE KEYS */;
INSERT INTO `Sections` VALUES (1,'destacados'),(2,'vendidos');
/*!40000 ALTER TABLE `Sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tienda`
--

DROP TABLE IF EXISTS `Tienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tienda` (
  `idTienda` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `ranking` varchar(45) NOT NULL,
  `location` varchar(100) NOT NULL,
  PRIMARY KEY (`idTienda`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tienda`
--

LOCK TABLES `Tienda` WRITE;
/*!40000 ALTER TABLE `Tienda` DISABLE KEYS */;
INSERT INTO `Tienda` VALUES (1,'Jose Lopez','platinium','Argentina');
/*!40000 ALTER TABLE `Tienda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TypeUser`
--

DROP TABLE IF EXISTS `TypeUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TypeUser` (
  `idTypeUser` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idTypeUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TypeUser`
--

LOCK TABLES `TypeUser` WRITE;
/*!40000 ALTER TABLE `TypeUser` DISABLE KEYS */;
INSERT INTO `TypeUser` VALUES (1,'sell'),(2,'buy');
/*!40000 ALTER TABLE `TypeUser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birth_date` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `user` varchar(100) NOT NULL,
  `idTypeUser` int NOT NULL,
  `idCountry` int NOT NULL,
  `pass` varchar(200) NOT NULL,
  `Tienda_idTienda` int NOT NULL,
  PRIMARY KEY (`idUsers`),
  KEY `FK_Users_TypeUser_idTypeUser_idx` (`idTypeUser`),
  KEY `FK_Users_Countries_idCountry_idx` (`idCountry`),
  KEY `fk_Users_Tienda1_idx` (`Tienda_idTienda`),
  CONSTRAINT `FK_Users_Countries_idCountry` FOREIGN KEY (`idCountry`) REFERENCES `Countries` (`idCountries`),
  CONSTRAINT `fk_Users_Tienda1` FOREIGN KEY (`Tienda_idTienda`) REFERENCES `Tienda` (`idTienda`),
  CONSTRAINT `FK_Users_TypeUser_idTypeUser` FOREIGN KEY (`idTypeUser`) REFERENCES `TypeUser` (`idTypeUser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'CARLA','CARLA@CARLA.CARLA','1111-01-01','Av. Italia','1616865039215_img.png','CARLA',1,4,'$2a$10$Fz9qehS.N2eDFJk2iiESeO2hqmZ04y4.rmOqz7n/gImXhuBSufsvW',1),(2,'Josue Emanuel Mercado','ema_dvr_2013@live.com','1998-07-15','Escobio','1618330339996_img.jpg','Emam16',1,1,'$2a$10$2Ypx6Id4Ii8Zs9F/oplGJuo9PNK0hBTaM1AIRl2je/SRApcIkhsw2',1);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-05 15:35:29
