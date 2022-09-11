-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2022 at 05:17 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `landscape`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `thumbnail` varchar(200) NOT NULL,
  `gallery` text NOT NULL,
  `post_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`post_images`)),
  `address` varchar(50) DEFAULT NULL,
  `apartment_size` varchar(50) DEFAULT NULL,
  `road_size` varchar(50) DEFAULT NULL,
  `parking` varchar(50) DEFAULT NULL,
  `land_size` varchar(50) DEFAULT NULL,
  `units` varchar(50) DEFAULT NULL,
  `floors` varchar(50) DEFAULT NULL,
  `handover_time` varchar(50) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `thumbnail`, `gallery`, `post_images`, `address`, `apartment_size`, `road_size`, `parking`, `land_size`, `units`, `floors`, `handover_time`, `createdAt`, `updatedAt`) VALUES
(52, 'URBAN MOON', '<h5 style=\"margin-top: 0.5rem; margin-bottom: 1rem; font-family: Lato, sans-serif; line-height: 1.2; color: rgb(0, 0, 0); font-size: 1.25rem;\">Plot- 22, Block CWS(A) , Road 24, Gulshan R/A, Dhaka-1212</h5><h5 style=\"margin-top: 0.5rem; margin-bottom: 1rem; font-family: Lato, sans-serif; line-height: 1.2; color: rgb(0, 0, 0); font-size: 1.25rem;\">Being conveniently located close to the Gulshan Avenue, you can access the commercial areas of Gulshan very easily from this location</h5><h5 style=\"margin-top: 0.5rem; margin-bottom: 1rem; font-family: Lato, sans-serif; line-height: 1.2; color: rgb(0, 0, 0); font-size: 1.25rem;\">Gulshan Youth Club Ground, the Gulshan Azad Mosque and a host of other important locations are situated at a walking distance</h5><p style=\"margin-top: 0.5rem; margin-bottom: 1rem; font-family: Lato, sans-serif; line-height: 1.2; color: rgb(0, 0, 0); font-size: 1.25rem;\"><br></p>   ', 'thumbnail-1661526803437.jpg', '[\"project-images-1661526683088.png\",\"project-images-1661526683107.jpg\",\"project-images-1661526683107.jpg\"]', '[]', 'Plot- 22, Block CWS(A) , Road 24, Gulshan R/A, Dha', '2613 sft', '25 Feet', '2 Parkings per Unit', '12.81 Katha', '22 Units', '11 Residential Floors', 'August 2025', '2022-08-26 15:11:23.728723', '2022-08-26 15:11:23.728723');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
