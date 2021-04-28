
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hecho_a_mano
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hecho_a_mano
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hecho_a_mano` DEFAULT CHARACTER SET utf8 ;
USE `hecho_a_mano` ;

-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Categories` (
  `idCategory` INT NOT NULL,
  `nameCategory` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Sections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Sections` (
  `idSection` INT NOT NULL AUTO_INCREMENT,
  `nameSection` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idSection`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Products` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `seller` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock` INT NULL,
  `payment` INT NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `shipping` INT NOT NULL,
  `discount` DECIMAL(10,2) NULL,
  `idCategory` INT NOT NULL,
  `idSection` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  INDEX `idCategory_idx` (`idCategory` ASC),
  INDEX `idSection_idx` (`idSection` ASC),
  CONSTRAINT `FK_products_categories_idCategory`
    FOREIGN KEY (`idCategory`)
    REFERENCES `hecho_a_mano`.`Categories` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_products_sections_idSection`
    FOREIGN KEY (`idSection`)
    REFERENCES `hecho_a_mano`.`Sections` (`idSection`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`CategoriesUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`CategoriesUsers` (
  `idCategoriesUsers` INT NOT NULL AUTO_INCREMENT,
  `idCategory` INT NULL,
  `idUser` INT NULL,
  PRIMARY KEY (`idCategoriesUsers`),
  INDEX `idUser_idx` (`idUser` ASC),
  INDEX `idCategory_idx` (`idCategory` ASC),
  CONSTRAINT `FK_CategoriesUsers_Categories_idCategory`
    FOREIGN KEY (`idCategory`)
    REFERENCES `hecho_a_mano`.`Categories` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CategoriesUsers_Users_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `hecho_a_mano`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Products_has_ProductUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Products_has_ProductUsers` (
  `Products_idProducts` INT NOT NULL,
  `ProductUsers_idProductUsers` INT NOT NULL,
  PRIMARY KEY (`Products_idProducts`, `ProductUsers_idProductUsers`),
  INDEX `fk_Products_has_ProductUsers_Products1_idx` (`Products_idProducts` ASC),
  CONSTRAINT `fk_Products_has_ProductUsers_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `hecho_a_mano`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Users_has_ProductUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Users_has_ProductUsers` (
  `idUsers` INT NOT NULL,
  `idProducts` INT NOT NULL,
  PRIMARY KEY (`idUsers`, `idProducts`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`TypeUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`TypeUsers` (
  `idTypeUser` INT NOT NULL AUTO_INCREMENT,
  `nameType` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idTypeUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Countries` (
  `idCountry` INT NOT NULL AUTO_INCREMENT,
  `nameCountry` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCountry`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `birth_date` DATE NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `idTypeUser` INT NOT NULL,
  `idCountry` INT NOT NULL,
  `pass` VARCHAR(200) NOT NULL,
  `user` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idUsers`),
  INDEX `idTypeUser_idx` (`idTypeUser` ASC),
  INDEX `idCountry_idx` (`idCountry` ASC),
  CONSTRAINT `FK_Users_TypeUsers_idTypeUser`
    FOREIGN KEY (`idTypeUser`)
    REFERENCES `hecho_a_mano`.`TypeUsers` (`idTypeUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Users_Countries_idCountry`
    FOREIGN KEY (`idCountry`)
    REFERENCES `hecho_a_mano`.`Countries` (`idCountry`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`ShoppingCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`ShoppingCart` (
  `idShoppingCart` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `idProduct` INT NOT NULL,
  `totalPrice` DECIMAL(10,2) NOT NULL,
  `priceItem` DECIMAL(10,2) NOT NULL,
  `idOrderList` INT NOT NULL,
  PRIMARY KEY (`idShoppingCart`),
  INDEX `idUser_idx` (`idUser` ASC),
  CONSTRAINT `FK_ShoppingCart_Users_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `hecho_a_mano`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`CategoriesUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`CategoriesUsers` (
  `idCategoriesUsers` INT NOT NULL AUTO_INCREMENT,
  `idCategory` INT NULL,
  `idUser` INT NULL,
  PRIMARY KEY (`idCategoriesUsers`),
  INDEX `idUser_idx` (`idUser` ASC),
  INDEX `idCategory_idx` (`idCategory` ASC),
  CONSTRAINT `FK_CategoriesUsers_Categories_idCategory`
    FOREIGN KEY (`idCategory`)
    REFERENCES `hecho_a_mano`.`Categories` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CategoriesUsers_Users_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `hecho_a_mano`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`ProductsUsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`ProductsUsers` (
  `idProductsUsers` INT NOT NULL AUTO_INCREMENT,
  `idProduct` INT NOT NULL,
  `idUser` INT NOT NULL,
  `status` VARCHAR(100) NULL,
  PRIMARY KEY (`idProductsUsers`),
  INDEX `idProduct_idx` (`idProduct` ASC),
  INDEX `idUser_idx` (`idUser` ASC),
  CONSTRAINT `FK_ProductsUsers_Products_idProduct`
    FOREIGN KEY (`idProduct`)
    REFERENCES `hecho_a_mano`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Fk_ProductsUsers_Users_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `hecho_a_mano`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hecho_a_mano`.`ProductsShoppingCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hecho_a_mano`.`ProductsShoppingCart` (
  `idProductsShoppingCart` INT NOT NULL,
  `idProduct` INT NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `idShoppingCart` INT NOT NULL,
  PRIMARY KEY (`idProductsShoppingCart`),
  INDEX `idProduct_idx` (`idProduct` ASC),
  INDEX `idShoppingCart_idx` (`idShoppingCart` ASC),
  CONSTRAINT `FK_idProduct_Products`
    FOREIGN KEY (`idProduct`)
    REFERENCES `hecho_a_mano`.`Products` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_idShoppingCart_ShoppingCart`
    FOREIGN KEY (`idShoppingCart`)
    REFERENCES `hecho_a_mano`.`ShoppingCart` (`idShoppingCart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
