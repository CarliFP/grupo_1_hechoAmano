SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema HechoAmanoDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HechoAmanoDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HechoAmanoDB` DEFAULT CHARACTER SET utf8 ;
USE `HechoAmanoDB` ;

-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Categories` (
  `idCategories` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Sections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Sections` (
  `idSections` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idSections`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Tienda` (
  `idTienda` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `ranking` VARCHAR(45) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idTienda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `seller` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock` INT NOT NULL,
  `payment` INT NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `shipping` DECIMAL(10,2) NOT NULL,
  `discount` VARCHAR(45) NULL,
  `idCategory` INT NOT NULL,
  `idSection` INT NOT NULL,
  `idTienda` INT NULL,
  PRIMARY KEY (`idProducts`),
  INDEX `FK_Products_Categories_idCategory_idx` (`idCategory` ASC),
  INDEX `FK_Products_Sections_idSection_idx` (`idSection` ASC),
  INDEX `FK_Products_Tienda_idTienda_idx` (`idTienda` ASC),
  CONSTRAINT `FK_Products_Categories_idCategory`
    FOREIGN KEY (`idCategory`)
    REFERENCES `HechoAmanoDB`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Products_Sections_idSection`
    FOREIGN KEY (`idSection`)
    REFERENCES `HechoAmanoDB`.`Sections` (`idSections`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Products_Tienda_idTienda`
    FOREIGN KEY (`idTienda`)
    REFERENCES `HechoAmanoDB`.`Tienda` (`idTienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`TypeUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`TypeUser` (
  `idTypeUser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idTypeUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Countries` (
  `idCountries` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCountries`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `birth_date` VARCHAR(100) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `user` VARCHAR(100) NOT NULL,
  `idTypeUser` INT NOT NULL,
  `idCountry` INT NOT NULL,
  `pass` VARCHAR(200) NOT NULL,
  `Tienda_idTienda` INT NOT NULL,
  PRIMARY KEY (`idUsers`),
  INDEX `FK_Users_TypeUser_idTypeUser_idx` (`idTypeUser` ASC),
  INDEX `FK_Users_Countries_idCountry_idx` (`idCountry` ASC),
  INDEX `fk_Users_Tienda1_idx` (`Tienda_idTienda` ASC),
  CONSTRAINT `FK_Users_TypeUser_idTypeUser`
    FOREIGN KEY (`idTypeUser`)
    REFERENCES `HechoAmanoDB`.`TypeUser` (`idTypeUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Users_Countries_idCountry`
    FOREIGN KEY (`idCountry`)
    REFERENCES `HechoAmanoDB`.`Countries` (`idCountries`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_Tienda1`
    FOREIGN KEY (`Tienda_idTienda`)
    REFERENCES `HechoAmanoDB`.`Tienda` (`idTienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`CategoriesUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`CategoriesUsers` (
  `idCategoriesUsers` INT NOT NULL AUTO_INCREMENT,
  `idUsers` INT NOT NULL,
  `idCategories` INT NOT NULL,
  PRIMARY KEY (`idCategoriesUsers`),
  INDEX `FK_CategoriesUsers_Categories_idCategory_idx` (`idCategories` ASC),
  INDEX `FK_CategoriesUsers_Users_idUsers_idx` (`idUsers` ASC),
  CONSTRAINT `FK_CategoriesUsers_Categories_idCategory`
    FOREIGN KEY (`idCategories`)
    REFERENCES `HechoAmanoDB`.`Categories` (`idCategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CategoriesUsers_Users_idUsers`
    FOREIGN KEY (`idUsers`)
    REFERENCES `HechoAmanoDB`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`Orders` (
  `idOrders` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `Users_idUsers` INT NOT NULL,
  `totalPrice` DECIMAL(10,2) NULL,
  PRIMARY KEY (`idOrders`),
  INDEX `fk_Orders_Users1_idx` (`Users_idUsers` ASC),
  CONSTRAINT `fk_Orders_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `HechoAmanoDB`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HechoAmanoDB`.`OrderProducts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HechoAmanoDB`.`OrderProducts` (
  `idOrderProducts` INT NOT NULL AUTO_INCREMENT,
  `idProducts` INT NOT NULL,
  `idOrders` INT NOT NULL,
  `units` INT NOT NULL,
  PRIMARY KEY (`idOrderProducts`),
  INDEX `FK_OrderProducts_Products_idProducts_idx` (`idProducts` ASC),
  INDEX `FK_OrderProducts_Orders_idOrders_idx` (`idOrders` ASC),
  CONSTRAINT `FK_OrderProducts_Products_idProducts`
    FOREIGN KEY (`idProducts`)
    REFERENCES `HechoAmanoDB`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_OrderProducts_Orders_idOrders`
    FOREIGN KEY (`idOrders`)
    REFERENCES `HechoAmanoDB`.`Orders` (`idOrders`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

