-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-05-2021 a las 01:11:17
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hechoamanodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategories` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriesusers`
--

CREATE TABLE `categoriesusers` (
  `idCategoriesUsers` int(11) NOT NULL,
  `idUsers` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `idCountries` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderproducts`
--

CREATE TABLE `orderproducts` (
  `idOrderProducts` int(11) NOT NULL,
  `idProducts` int(11) NOT NULL,
  `idOrders` int(11) NOT NULL,
  `units` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `idOrders` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `Users_idUsers` int(11) NOT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idProducts` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `seller` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `payment` int(11) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `shipping` decimal(10,2) NOT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  `idSection` int(11) NOT NULL,
  `idTienda` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sections`
--

CREATE TABLE `sections` (
  `idSections` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiendas`
--

CREATE TABLE `tiendas` (
  `idTienda` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `ranking` varchar(45) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeuser`
--

CREATE TABLE `typeuser` (
  `idTypeUser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeusers`
--

CREATE TABLE `typeusers` (
  `idTypeUser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birth_date` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `user` varchar(100) NOT NULL,
  `idTypeUser` int(11) NOT NULL,
  `idCountry` int(11) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `Tienda_idTienda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategories`);

--
-- Indices de la tabla `categoriesusers`
--
ALTER TABLE `categoriesusers`
  ADD PRIMARY KEY (`idCategoriesUsers`),
  ADD KEY `FK_CategoriesUsers_Categories_idCategory_idx` (`idCategories`),
  ADD KEY `FK_CategoriesUsers_Users_idUsers_idx` (`idUsers`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`idCountries`);

--
-- Indices de la tabla `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD PRIMARY KEY (`idOrderProducts`),
  ADD KEY `FK_OrderProducts_Products_idProducts_idx` (`idProducts`),
  ADD KEY `FK_OrderProducts_Orders_idOrders_idx` (`idOrders`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrders`),
  ADD KEY `fk_Orders_Users1_idx` (`Users_idUsers`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProducts`),
  ADD KEY `FK_Products_Categories_idCategory_idx` (`idCategory`),
  ADD KEY `FK_Products_Sections_idSection_idx` (`idSection`),
  ADD KEY `FK_Products_Tienda_idTienda_idx` (`idTienda`);

--
-- Indices de la tabla `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`idSections`);

--
-- Indices de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  ADD PRIMARY KEY (`idTienda`);

--
-- Indices de la tabla `typeuser`
--
ALTER TABLE `typeuser`
  ADD PRIMARY KEY (`idTypeUser`);

--
-- Indices de la tabla `typeusers`
--
ALTER TABLE `typeusers`
  ADD PRIMARY KEY (`idTypeUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`),
  ADD KEY `FK_Users_TypeUser_idTypeUser_idx` (`idTypeUser`),
  ADD KEY `FK_Users_Countries_idCountry_idx` (`idCountry`),
  ADD KEY `fk_Users_Tienda1_idx` (`Tienda_idTienda`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategories` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoriesusers`
--
ALTER TABLE `categoriesusers`
  MODIFY `idCategoriesUsers` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `idCountries` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orderproducts`
--
ALTER TABLE `orderproducts`
  MODIFY `idOrderProducts` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `idOrders` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProducts` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sections`
--
ALTER TABLE `sections`
  MODIFY `idSections` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `idTienda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `typeuser`
--
ALTER TABLE `typeuser`
  MODIFY `idTypeUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `typeusers`
--
ALTER TABLE `typeusers`
  MODIFY `idTypeUser` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoriesusers`
--
ALTER TABLE `categoriesusers`
  ADD CONSTRAINT `FK_CategoriesUsers_Categories_idCategory` FOREIGN KEY (`idCategories`) REFERENCES `categories` (`idCategories`),
  ADD CONSTRAINT `FK_CategoriesUsers_Users_idUsers` FOREIGN KEY (`idUsers`) REFERENCES `users` (`idUsers`);

--
-- Filtros para la tabla `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD CONSTRAINT `FK_OrderProducts_Orders_idOrders` FOREIGN KEY (`idOrders`) REFERENCES `orders` (`idOrders`),
  ADD CONSTRAINT `FK_OrderProducts_Products_idProducts` FOREIGN KEY (`idProducts`) REFERENCES `products` (`idProducts`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_Orders_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`idUsers`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_Products_Categories_idCategory` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategories`),
  ADD CONSTRAINT `FK_Products_Sections_idSection` FOREIGN KEY (`idSection`) REFERENCES `sections` (`idSections`),
  ADD CONSTRAINT `FK_Products_Tienda_idTienda` FOREIGN KEY (`idTienda`) REFERENCES `tiendas` (`idTienda`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_Users_Countries_idCountry` FOREIGN KEY (`idCountry`) REFERENCES `countries` (`idCountries`),
  ADD CONSTRAINT `FK_Users_TypeUser_idTypeUser` FOREIGN KEY (`idTypeUser`) REFERENCES `typeuser` (`idTypeUser`),
  ADD CONSTRAINT `fk_Users_Tienda1` FOREIGN KEY (`Tienda_idTienda`) REFERENCES `tiendas` (`idTienda`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
