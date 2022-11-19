-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 23, 2022 at 09:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

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
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `respond` enum('yes','no') DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `message`, `respond`, `createdAt`) VALUES
(1, 'Soikat Hossain', 'soikat@gmail.com', '01722726897', 'hello', 'yes', '2022-10-23 12:04:22.640508'),
(2, 'aysha', 'ayeshaarobi@gamil.com', '0197378343', 'sfdgsdfg', 'no', '2022-10-23 14:32:50.494825'),
(3, 'aysha', 'ayeshaarobi@gamil.com', '0197378343', 'sfdgsdfg', 'yes', '2022-10-23 14:34:03.364847');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `project_name` varchar(50) DEFAULT NULL,
  `area` varchar(300) DEFAULT NULL,
  `respond` enum('1','0') DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `phone`, `project_name`, `area`, `respond`, `createdAt`, `updatedAt`) VALUES
(6, 'Ayesha', 'soik@gmail.com', '01722726895', 'Three', NULL, '0', '2022-10-23 13:18:45.966438', '2022-10-23 13:18:45.966438'),
(7, 'New Orders', 'new@gmail.com', '01722726897', 'Gulshan', NULL, '0', '2022-10-23 18:39:37.127139', '2022-10-23 18:39:37.127139');

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
  `status` varchar(100) NOT NULL,
  `google_map` varchar(1000) NOT NULL,
  `youtube_video` varchar(1000) NOT NULL,
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

INSERT INTO `projects` (`id`, `title`, `description`, `thumbnail`, `gallery`, `post_images`, `status`, `google_map`, `youtube_video`, `address`, `apartment_size`, `road_size`, `parking`, `land_size`, `units`, `floors`, `handover_time`, `createdAt`, `updatedAt`) VALUES
(4, 'Skylife', 'Test project                    ', 'thumbnail-1663595901288.jpg', '[\"project-images-1663597745871.jpg\",\"project-images-1663597745878.jpg\",\"project-images-1663597745880.jpg\",\"project-images-1663597745882.jpg\",\"project-images-1663597745882.jpg\"]', '[]', 'Completed', '', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WG6w2THNcRc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Bogura', '1000 square feet', '5 feet', '2', '4000', '45', '456', '120 days', '2022-09-16 13:52:56.345165', '2022-09-16 13:52:56.345165'),
(5, 'Darus Salam', 'hello this is     ', 'thumbnail-1663595955789.jpg', '[\"project-images-1663597745871.jpg\",\"project-images-1663597745878.jpg\",\"project-images-1663597745880.jpg\",\"project-images-1663597745882.jpg\",\"project-images-1663597745882.jpg\"]', '[]', 'Completed', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15c3cfca391%3A0x18c46f2e75c2f64c!2sSony%20Square%20Star%20Cineplex%20%7C%20Mirpur!5e0!3m2!1sen!2sbd!4v1663443197516!5m2!1sen!2sbd\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WG6w2THNcRc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Gulshan', '', '', '', '', '', '', '', '2022-09-16 17:08:49.447139', '2022-09-16 17:08:49.447139'),
(6, 'Skylarck', 'heee      ', 'thumbnail-1663595999005.jpg', '[\"project-images-1663597745871.jpg\",\"project-images-1663597745878.jpg\",\"project-images-1663597745880.jpg\",\"project-images-1663597745882.jpg\",\"project-images-1663597745882.jpg\"]', '[]', 'Ongoing', '', '', 'Badda', '', '', '', '', '', '', '', '2022-09-17 17:27:05.922227', '2022-09-17 17:27:05.922227'),
(7, 'Darus Salam 2', '<p><b>this is new project</b></p><p style=\"text-align: center;\"><b><font color=\"#000000\" style=\"background-color: rgb(255, 255, 0);\">New Project</font></b></p>    ', 'thumbnail-1663597636907.jpg', '[\"project-images-1663597745871.jpg\",\"project-images-1663597745878.jpg\",\"project-images-1663597745880.jpg\",\"project-images-1663597745882.jpg\",\"project-images-1663597745882.jpg\"]', '[]', 'Completed', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29213.675923668212!2d90.3710360752408!3d23.757736885341174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf51e7aee4ff%3A0x21c88cabfebf5243!2sIBN%20Sina%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1663597693990!5m2!1sen!2sbd\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yGkw7Lyaky8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', 'Banani', '1000 square feet', '', 'yes', '', '', '', '', '2022-09-19 14:27:16.925081', '2022-09-19 14:27:16.925081');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userType` enum('admin','user','moderator') DEFAULT 'moderator',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isVerified` int(1) DEFAULT 0,
  `verfication_id` int(8) DEFAULT -1,
  `profilePics` varchar(200) DEFAULT '/uploads/avater.jpg',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userType`, `email`, `password`, `isVerified`, `verfication_id`, `profilePics`, `createdAt`) VALUES
(1, 'moderator', 'admin@gmail.com', '$2b$11$ExZBIS9QJ5/AV67iyVsNoes1euY/9Mdg3gYlqfLStKmhudpLTPzC6', 1, -1, '/uploads/avater.jpg', '2022-10-06 02:54:33.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
