-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-06-2021 a las 00:01:42
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

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategories`, `name`) VALUES
(1, 'Accesorios'),
(2, 'Arte'),
(3, 'Hogar'),
(4, 'Juegos'),
(5, 'Cosmetica'),
(6, 'Ropa y calzado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriesusers`
--

CREATE TABLE `categoriesusers` (
  `idCategoriesUsers` int(11) NOT NULL,
  `idUsers` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriesusers`
--

INSERT INTO `categoriesusers` (`idCategoriesUsers`, `idUsers`, `idCategories`) VALUES
(1, 1, 3),
(2, 2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `idCountries` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`idCountries`, `name`) VALUES
(1, 'Argentina'),
(2, 'Bolivia'),
(3, 'Brasil'),
(4, 'Colombia'),
(5, 'Chile'),
(6, 'Ecuador'),
(7, 'Paraguay'),
(8, 'Peru'),
(9, 'Uruguay');

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

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idProducts`, `name`, `seller`, `price`, `stock`, `payment`, `image`, `description`, `shipping`, `discount`, `idCategory`, `idSection`, `idTienda`) VALUES
(1, 'Pintura de acrílico artesanal', 'Carla López', '200.00', 7, 3, 'img1-A-pinturaArtesanalAcrílico.png', 'pintura acrílica artesanal', '200.00', '15', 2, 1, 1),
(2, 'Mascarilla', 'José López', '200.00', 7, 3, 'img-1-C-mascarilla.png', 'mascarilla personalizada con logo', '200.00', NULL, 6, 1, 1),
(3, 'Palo santo!!! nuevo', 'José López', '200.00', 7, 3, 'img1-h-paloSanto.png', 'aromas naturales', '200.00', '15', 3, 1, 1),
(4, 'Apila los gatos!', 'José López', '100.00', 2, 3, 'img1-j-apilaLosGatos.png', 'Apila los gatos!', '340.00', '50', 4, 2, 1),
(5, 'Zapatos', 'José López', '100.00', 2, 3, 'img1-zapatosHechosAmano.png', 'Zapatos', '340.00', '50', 6, 2, 1),
(6, 'Linoleografía', 'José López', '100.00', 2, 3, 'img2-A-linoleografía.png', 'Linoleografía', '340.00', '15', 2, 2, 1),
(7, 'Accesorio de cabello', 'José López', '100.00', 2, 3, 'img2-C-accesorioCabello.png', 'Accesorio de cabello', '340.00', '50', 1, 2, 1),
(8, 'Hierbas veganas', 'José López', '100.00', 2, 3, 'img2-h-hierbasVeganas.png', 'Hierbas veganas', '340.00', '50', 1, 2, 1),
(9, 'Bloques de letras', 'José López', '100.00', 2, 3, 'img2-j-bloquesDeLetras.png', 'Bloques de letras', '340.00', '50', 4, 1, 1),
(10, 'Remera de lino', 'José López', '100.00', 2, 3, 'img2-RC-remerasdeLino.png', 'Remera de lino', '340.00', '50', 6, 2, 1),
(11, 'Grabado', 'José López', '100.00', 2, 3, 'img3-A-grabado.png', 'Grabado', '340.00', '50', 2, 2, 1),
(12, 'Grabado de madera', 'José López', '100.00', 2, 3, 'img3-A-grabadoMadera.png', 'Grabado de madera', '340.00', '50', 2, 1, 1),
(13, 'Hebilla Cuero cabello', 'José López', '367.00', 200, 6, 'img3-C-cueroCabello.png', 'hebilla cuero natural', '456.00', NULL, 1, 1, 1),
(14, 'Soporte para cepillo de dientes', 'José López', '100.00', 2, 3, 'img3-h-soporteParaCepilloDeDientes.png', 'Soporte para cepillo de dientes', '340.00', '50', 3, 2, 1),
(15, 'Matryoshka de gallinas', 'José López', '100.00', 2, 3, 'img3-j-matryoshkaGallina.png', 'Matryoshka de gallinas', '340.00', '50', 2, 1, 1),
(16, 'Buzo', 'José López', '1500.00', 10, 3, 'img3-RC-buzo.png', 'buzo talle único con logo impreso a elección', '340.00', NULL, 6, 2, 1),
(17, 'Figuras en madera', 'José López', '100.00', 2, 3, 'img4-A_figurasEnMadera.png', 'Figuras en madera', '340.00', '50', 4, 1, 1),
(18, 'Cinturón', 'José López', '100.00', 2, 3, 'img4-C-cinturon.png', 'Cinturón', '340.00', '50', 6, 1, 1),
(19, 'Señal de madera', 'José López', '100.00', 2, 3, 'img4-h-close&openDeMadera.png', 'Señal de madera', '340.00', '50', 3, 1, 1),
(20, 'Ardilla de la Era del Hielo', 'José López', '100.00', 2, 3, 'img4-j-ardillaEraDelHielo.png', 'Ardilla de la Era del Hielo', '340.00', '50', 2, 1, 1),
(21, 'Jeans', 'José López', '100.00', 2, 3, 'img4-RC-jeans.png', 'Jeans', '340.00', '50', 6, 1, 1),
(22, 'Cepillo de dientes', 'José López', '100.00', 2, 3, 'img5-P-cepillodedientes.png', 'Cepillo de dientes', '340.00', '50', 5, 2, 1),
(23, 'Jabón antibacteriano', 'José López', '100.00', 2, 3, 'img5-P-jabonantibaPteriano.png', 'Jabón antibacteriano', '340.00', '50', 5, 1, 1),
(24, 'Jabón natural', 'José López', '100.00', 2, 3, 'img5-P-jabonNatural.png', 'Jabón natural', '340.00', '50', 5, 1, 1),
(25, 'Peines de Bambú', 'José López', '100.00', 2, 3, 'img5-P-peinesdeBambu.png', 'Peines de Bambú', '340.00', '50', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sections`
--

CREATE TABLE `sections` (
  `idSections` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sections`
--

INSERT INTO `sections` (`idSections`, `name`) VALUES
(1, 'Destacados'),
(2, 'Vendidos');

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

--
-- Volcado de datos para la tabla `tiendas`
--

INSERT INTO `tiendas` (`idTienda`, `name`, `ranking`, `location`) VALUES
(1, 'Jose Lopez', 'platinium', 'Argentina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeuser`
--

CREATE TABLE `typeuser` (
  `idTypeUser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `typeuser`
--

INSERT INTO `typeuser` (`idTypeUser`, `name`) VALUES
(1, 'sell'),
(2, 'buy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeusers`
--

CREATE TABLE `typeusers` (
  `idTypeUser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `typeusers`
--

INSERT INTO `typeusers` (`idTypeUser`, `name`) VALUES
(1, 'Comprador'),
(2, 'Vendedor');

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
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUsers`, `name`, `email`, `birth_date`, `address`, `avatar`, `user`, `idTypeUser`, `idCountry`, `pass`, `Tienda_idTienda`) VALUES
(1, 'CARLA', 'CARLA@CARLA.CARLA', '1111-01-01', 'Av. Italia', '1616865039215_img.png', 'CARLA', 1, 4, '$2a$10$Fz9qehS.N2eDFJk2iiESeO2hqmZ04y4.rmOqz7n/gImXhuBSufsvW', 1),
(2, 'Emanuel Mercado', 'ema_dvr_2013@live.com', '1998-07-15 00:00:00', 'Escobio', '1622941516512_img.jpg', 'Emam16', 2, 1, '$2a$10$fLdsBM/p0Btuihsevsm99OnqqI0pQ./KPj67MMMlm8ueNAixSzacC', 1);

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
  MODIFY `idCategories` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categoriesusers`
--
ALTER TABLE `categoriesusers`
  MODIFY `idCategoriesUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `idCountries` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `idProducts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `sections`
--
ALTER TABLE `sections`
  MODIFY `idSections` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tiendas`
--
ALTER TABLE `tiendas`
  MODIFY `idTienda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `typeuser`
--
ALTER TABLE `typeuser`
  MODIFY `idTypeUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `typeusers`
--
ALTER TABLE `typeusers`
  MODIFY `idTypeUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
