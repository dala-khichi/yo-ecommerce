-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2025 at 05:48 PM
-- Server version: 11.8.0-MariaDB
-- PHP Version: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dalo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `img` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  `role_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `phone`, `email`, `img`, `password`, `status`, `role_id`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 'Yo', '1234567891', 'kumaradarsh00572@gmail.com', '1746289220870.jpg', '$2b$10$Ecfhq12ONWqDalsAfsxV2OVUZUrIa6KXxiTyeUDnOheH4M2yI1sr.', 'ACTIVE', 1, NULL, NULL, '2025-05-03 12:06:36', '2025-05-03 16:20:21', NULL),
(6, 'Admin2 ', '08307113165', 'kumaradarsh00666@gmail.com', '1746783941831.jpg', '$2b$10$syBkAu8HuLcVbMa/x1euz..lCVQKmwyaKYFc2QSf4nqAg24heZfMa', 'ACTIVE', 1, NULL, NULL, '2025-05-09 09:45:42', '2025-05-09 09:45:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_variant_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `expires_at` timestamp NOT NULL DEFAULT (current_timestamp() + interval 7 day),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `item_variant_id`, `quantity`, `expires_at`, `created_at`, `updated_at`) VALUES
(6, 24, 13, 5, '2025-07-04 04:14:25', '2025-06-27 04:14:25', '2025-06-27 04:14:25'),
(7, 24, 13, 5, '2025-07-04 04:15:15', '2025-06-27 04:15:15', '2025-06-27 04:15:15'),
(8, 24, 13, 5, '2025-07-04 06:29:57', '2025-06-27 06:29:57', '2025-06-27 06:29:57'),
(9, 24, 13, 5, '2025-07-04 06:29:58', '2025-06-27 06:29:58', '2025-06-27 06:29:58'),
(10, 24, 13, 5, '2025-07-04 06:29:58', '2025-06-27 06:29:58', '2025-06-27 06:29:58'),
(11, 24, 13, 5, '2025-07-04 06:29:59', '2025-06-27 06:29:59', '2025-06-27 06:29:59'),
(12, 24, 13, 5, '2025-07-04 06:29:59', '2025-06-27 06:29:59', '2025-06-27 06:29:59'),
(13, 24, 13, 5, '2025-07-04 06:30:32', '2025-06-27 06:30:32', '2025-06-27 06:30:32'),
(14, 24, 13, 5, '2025-07-04 06:31:00', '2025-06-27 06:31:00', '2025-06-27 06:31:00'),
(15, 24, 11, 5, '2025-07-04 06:57:29', '2025-06-27 06:57:29', '2025-06-27 06:57:29'),
(16, 24, 12, 5, '2025-07-04 06:59:31', '2025-06-27 06:59:31', '2025-06-27 06:59:31');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `img` text DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `img`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(23, 'Man', 'Man', '1746801398453.png', 'ACTIVE', 5, 5, '2025-05-09 14:36:38', '2025-05-09 16:07:26'),
(24, 'Hhsh', 'Hdhd', '1747199292538.jpg', 'INACTIVE', 5, NULL, '2025-05-14 05:08:12', '2025-05-14 05:08:12');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `color`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(3, 'Blue', 'ACTIVE', 5, NULL, '2025-05-10 10:08:30', '2025-05-10 10:08:30'),
(4, 'Pink', 'INACTIVE', 5, NULL, '2025-05-10 10:08:46', '2025-05-10 16:23:00'),
(5, 'Green ', 'ACTIVE', 5, NULL, '2025-05-10 10:09:04', '2025-05-10 10:09:04'),
(6, 'White ', 'ACTIVE', 5, NULL, '2025-05-13 06:42:47', '2025-05-13 06:42:47');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `discount_percentage` decimal(5,2) DEFAULT NULL CHECK (`discount_percentage` between 0 and 100),
  `max_discount_amount` decimal(10,2) DEFAULT NULL,
  `min_order_amount` decimal(10,2) DEFAULT NULL,
  `valid_from` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `valid_to` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` enum('ACTIVE','EXPIRED','DISABLED') DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupon_usage`
--

CREATE TABLE `coupon_usage` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `used_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE','OUT OF STOCK') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `description`, `category_id`, `subcategory_id`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at`) VALUES
(21, 'T -shart ', 'Mst t shirt ', 23, 17, 'ACTIVE', 5, NULL, '2025-05-10 15:10:39', '2025-05-10 15:10:39', NULL),
(22, 'Shhe', 'Gd hd', 23, 16, 'INACTIVE', 5, NULL, '2025-05-14 04:54:34', '2025-05-14 04:54:34', NULL),
(23, 'S ha', 'Zz', 23, 16, 'INACTIVE', 5, NULL, '2025-05-14 05:07:18', '2025-05-14 05:07:18', NULL),
(24, 'Yttt', 'Uuhhd', 23, 16, 'INACTIVE', 5, NULL, '2025-05-14 07:39:27', '2025-05-14 07:39:27', NULL),
(25, 'Ttt', 'Ttt', 23, 17, 'ACTIVE', 5, NULL, '2025-05-14 10:16:47', '2025-05-14 10:16:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item_images`
--

CREATE TABLE `item_images` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `item_images`
--

INSERT INTO `item_images` (`id`, `item_id`, `img`) VALUES
(36, 22, '1747198474281.jpg'),
(37, 22, '1747198474284.jpg'),
(38, 23, '1747199238825.jpg'),
(39, 23, '1747199238849.jpg'),
(40, 24, '1747208367427.png'),
(41, 24, '1747208367443.png'),
(42, 25, '1747217807642.jpg'),
(43, 25, '1747217807659.jpg'),
(44, 25, '1747217807661.png');

-- --------------------------------------------------------

--
-- Table structure for table `item_variants`
--

CREATE TABLE `item_variants` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `size_id` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT 0,
  `low_stock_threshold` int(11) DEFAULT 5,
  `price` decimal(10,2) NOT NULL,
  `is_out_of_stock` tinyint(1) GENERATED ALWAYS AS (`stock` <= 0) STORED,
  `status` enum('ACTIVE','INACTIVE','OUT OF STOCK') DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `item_variants`
--

INSERT INTO `item_variants` (`id`, `item_id`, `size_id`, `color_id`, `stock`, `low_stock_threshold`, `price`, `status`, `created_at`, `updated_at`) VALUES
(11, 21, 12, 3, 1280, 1, 500.00, 'ACTIVE', '2025-05-10 15:10:39', '2025-05-10 15:10:39'),
(12, 21, 13, 3, 1, 2, 218.00, 'ACTIVE', '2025-05-10 15:10:39', '2025-05-10 15:10:39'),
(13, 21, 13, 5, 18, 888, 15588.00, 'ACTIVE', '2025-05-10 15:10:39', '2025-05-10 15:10:39'),
(14, 23, 17, 4, 544, 645, 4664.00, 'ACTIVE', '2025-05-14 05:07:18', '2025-05-14 05:07:18'),
(15, 24, 12, 4, 8, 8, 544.00, 'ACTIVE', '2025-05-14 07:39:27', '2025-05-14 07:39:27'),
(16, 25, 16, 5, 488, 8484, 69.00, 'ACTIVE', '2025-05-14 10:16:47', '2025-05-14 10:16:47');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_id` varchar(20) DEFAULT NULL,
  `status` enum('PENDING','PROCESSING','SHIPPED','DELIVERED','CANCELLED') DEFAULT 'PENDING',
  `payment_mode` enum('COD','ONLINE') DEFAULT 'COD',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `item_variant_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_amount` decimal(10,2) NOT NULL,
  `order_currency` varchar(10) NOT NULL,
  `payment_status` enum('PENDING','SUCCESS','FAILED','REFUNDED') DEFAULT 'PENDING',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `display_name` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'manage_user', 'Manage Users', 'Full control over users', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(2, 'create_user', 'Create User', 'Allows creating new users', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(3, 'read_user', 'Read User', 'Allows viewing users', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(4, 'update_user', 'Update User', 'Allows editing users', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(5, 'delete_user', 'Delete User', 'Allows deleting users', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(6, 'manage_role', 'Manage Roles', 'Full control over roles and permissions', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(7, 'create_role', 'Create Role', 'Allows creating new roles', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(8, 'read_role', 'Read Role', 'Allows viewing roles', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(9, 'update_role', 'Update Role', 'Allows editing roles', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(10, 'delete_role', 'Delete Role', 'Allows deleting roles', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(11, 'manage_permission', 'Manage Permissions', 'Full control over permissions', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(12, 'read_permission', 'Read Permission', 'Allows viewing available permissions', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(13, 'manage_category', 'Manage Categories', 'Full control over categories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(14, 'create_category', 'Create Category', 'Allows creating categories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(15, 'read_category', 'Read Category', 'Allows viewing categories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(16, 'update_category', 'Update Category', 'Allows editing categories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(17, 'delete_category', 'Delete Category', 'Allows deleting categories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(18, 'manage_subcategory', 'Manage Subcategories', 'Full control over subcategories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(19, 'create_subcategory', 'Create Subcategory', 'Allows creating subcategories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(20, 'read_subcategory', 'Read Subcategory', 'Allows viewing subcategories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(21, 'update_subcategory', 'Update Subcategory', 'Allows editing subcategories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(22, 'delete_subcategory', 'Delete Subcategory', 'Allows deleting subcategories', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(23, 'manage_item', 'Manage Items', 'Full control over items', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(24, 'create_item', 'Create Item', 'Allows creating items', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(25, 'read_item', 'Read Item', 'Allows viewing items', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(26, 'update_item', 'Update Item', 'Allows editing items', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(27, 'delete_item', 'Delete Item', 'Allows deleting items', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(28, 'manage_color', 'Manage Colors', 'Full control over colors', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(29, 'create_color', 'Create Color', 'Allows creating colors', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(30, 'read_color', 'Read Color', 'Allows viewing colors', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(31, 'update_color', 'Update Color', 'Allows editing colors', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(32, 'delete_color', 'Delete Color', 'Allows deleting colors', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(33, 'manage_size', 'Manage Sizes', 'Full control over sizes', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(34, 'create_size', 'Create Size', 'Allows creating sizes', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(35, 'read_size', 'Read Size', 'Allows viewing sizes', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(36, 'update_size', 'Update Size', 'Allows editing sizes', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(37, 'delete_size', 'Delete Size', 'Allows deleting sizes', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(38, 'manage_order', 'Manage Orders', 'Full control over orders', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(39, 'read_order', 'Read Order', 'Allows viewing orders', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(40, 'update_order_status', 'Update Order Status', 'Allows changing order status', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(41, 'cancel_order', 'Cancel Order', 'Allows cancelling orders', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(42, 'manage_cart', 'Manage Carts', 'Full control over carts', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(43, 'read_cart', 'Read Cart', 'Allows viewing carts', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(44, 'update_cart', 'Update Cart', 'Allows updating carts', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(45, 'manage_payment', 'Manage Payments', 'Full control over payments', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(46, 'read_payment', 'Read Payment', 'Allows viewing payment details', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(47, 'update_payment_status', 'Update Payment Status', 'Allows marking payments as complete or failed', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(48, 'manage_shipping', 'Manage Shipping', 'Full control over shipping details', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(49, 'read_shipping', 'Read Shipping', 'Allows viewing shipping info', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(50, 'update_shipping_status', 'Update Shipping Status', 'Allows marking orders as shipped or delivered', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(51, 'manage_settings', 'Manage Settings', 'Full access to system configurations', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(52, 'read_reports', 'Read Reports', 'Allows viewing system reports', '2025-05-01 03:16:07', '2025-05-01 03:16:07'),
(53, 'access_dashboard', 'Access Dashboard', 'Allows access to admin dashboard', '2025-05-01 03:16:07', '2025-05-01 03:16:07');

-- --------------------------------------------------------

--
-- Table structure for table `posters`
--

CREATE TABLE `posters` (
  `id` int(11) NOT NULL,
  `index_no` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `posters`
--

INSERT INTO `posters` (`id`, `index_no`, `img`, `title`, `heading`, `url`, `created_by`, `status`, `created_at`, `updated_at`, `updated_by`) VALUES
(9, 1, '1747837025747.jpeg', 'Nipper ', 'Dalo', 'Dalo.com', 5, 'ACTIVE', '2025-05-21 14:17:05', '2025-05-21 14:17:05', NULL),
(10, 2, '1747837129598.png', 'Nepech', 'Dalo', 'Dalo.com', 5, 'ACTIVE', '2025-05-21 14:18:49', '2025-05-21 14:18:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `refunds`
--

CREATE TABLE `refunds` (
  `id` int(11) NOT NULL,
  `return_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `refund_amount` decimal(10,2) DEFAULT NULL,
  `status` enum('PENDING','SUCCESS','FAILED') DEFAULT 'PENDING',
  `processed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `status` enum('PENDING','APPROVED','REJECTED','COMPLETED') DEFAULT 'PENDING',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'ACTIVE', NULL, NULL, '2025-03-14 04:10:17', '2025-04-06 14:42:58'),
(62, 'Shs', 'ACTIVE', 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27');

-- --------------------------------------------------------

--
-- Table structure for table `role_permissions`
--

CREATE TABLE `role_permissions` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `role_permissions`
--

INSERT INTO `role_permissions` (`id`, `role_id`, `permission_id`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(25, 1, 15, 5, NULL, '2025-05-09 08:34:59', '2025-05-09 08:34:59'),
(33, 1, 15, 5, NULL, '2025-05-09 10:00:12', '2025-05-09 10:00:12'),
(45, 62, 51, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(46, 62, 47, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(47, 62, 48, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(48, 62, 18, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(49, 62, 46, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(50, 62, 14, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(51, 62, 50, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(52, 62, 16, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(53, 62, 15, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27'),
(54, 62, 49, 5, NULL, '2025-05-09 10:16:27', '2025-05-09 10:16:27');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_details`
--

CREATE TABLE `shipping_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `tracking_no` varchar(50) DEFAULT NULL,
  `estimated_delivery_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `size` varchar(50) NOT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `size`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(12, 'X', 'ACTIVE', 5, NULL, '2025-05-10 10:06:47', '2025-05-10 10:06:47'),
(13, 'Y', 'ACTIVE', 5, NULL, '2025-05-10 10:07:28', '2025-05-10 10:07:28'),
(14, 'Z', 'ACTIVE', 5, NULL, '2025-05-10 10:07:56', '2025-05-10 10:07:56'),
(15, 'C', 'ACTIVE', 5, NULL, '2025-05-10 15:54:16', '2025-05-10 15:54:16'),
(16, 'P', 'ACTIVE', 5, NULL, '2025-05-11 20:52:43', '2025-05-11 20:52:43'),
(17, 'N', 'INACTIVE', 5, NULL, '2025-05-11 20:53:06', '2025-05-11 20:53:06');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `img` text DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `category_id`, `name`, `slug`, `img`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(16, 23, 'T -shart ', 'T', '1746801596833.png', 'ACTIVE', 5, NULL, '2025-05-09 14:39:56', '2025-05-09 14:39:56'),
(17, 23, 'Shirt ', 'Sh', '1746806206758.jpg', 'ACTIVE', 5, NULL, '2025-05-09 15:56:46', '2025-05-09 15:56:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Adarsh ', '7988725813', 'Email ', '1234', 'INACTIVE', '2025-03-14 04:11:37', '2025-06-26 08:09:33', '2025-06-26 08:09:33'),
(2, 'Tt', '665085', 'Ghgghh', '5555565', 'INACTIVE', '2025-04-29 18:05:01', '2025-06-26 08:09:42', '2025-06-26 08:09:42'),
(3, 'Adarsh Adarsh', '1234567891', 'kumaradarsh00572@gmail.com', '$2b$10$hfoewOTJa0IGNR1UvATgQOQ732tTmrSs2yFjeW7FH8lyjbqS8W7Ye', 'ACTIVE', '2025-04-30 12:26:19', '2025-06-26 08:09:44', '2025-06-26 08:09:44'),
(9, 'Hello ', '7988725814', 'kumaradarsh00573@gmail.com', '$2b$10$YpFIPnIGqRyZEPOIQ07Yc.Nc00lppBEi65vq3jms3ZipUAYQQFwX2', 'ACTIVE', '2025-05-08 09:39:21', '2025-06-26 08:09:45', '2025-06-26 08:09:45'),
(15, 'Shhddhhd', '1234526379', 'kumaradarsh00663@gmail.com', '$2b$10$Cao84KyTHU.euuPslYExlelD2oqT1KEn5QPTt2uiWHHHaK.s0cjDe', 'ACTIVE', '2025-05-08 09:51:50', '2025-06-26 08:09:46', '2025-06-26 08:09:46'),
(21, 'Jk', '08307113168', 'kumaradarsh006d6@gmail.com', '$2b$10$5zBf9yoQXhjo.rL10Vd.r.37xVBclOvs5a3cd8r81bpQmxr9n/Ah2', 'ACTIVE', '2025-05-14 02:04:40', '2025-06-26 08:10:02', '2025-06-26 08:10:02'),
(22, 'Yo', '83071131', 'Yo@gmail.com', '$2b$10$zoWvKQqMoMkpnXNR49jEA.28yUjenWEHmzBlk41t2Kw3kFLmIgtne', 'ACTIVE', '2025-06-25 08:12:16', '2025-06-26 08:12:34', '2025-06-26 08:12:34'),
(24, 'Yo', '1234567890', 'Yo1@gmail.com', '$2b$10$G.z0B.ciBrY4RDqdg.ukm.EE8q2UH7cGjYV2JFE3z30SFW/jmEitO', 'ACTIVE', '2025-06-26 08:17:12', '2025-06-26 08:17:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `add_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `user_id`, `item_id`, `add_on`) VALUES
(1, 1, 21, '2025-06-25 16:55:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`,`email`),
  ADD KEY `Co_1` (`role_id`),
  ADD KEY `Admin_senn` (`created_by`),
  ADD KEY `Admin_shsh` (`updated_by`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `item_variant_id` (`item_variant_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `idx_category_name` (`name`),
  ADD KEY `idx_categories_slug` (`slug`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `color` (`color`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `Coupons_ibfk_` (`created_by`);

--
-- Indexes for table `coupon_usage`
--
ALTER TABLE `coupon_usage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `coupon_id` (`coupon_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `subcategory_id` (`subcategory_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `idx_item_status` (`status`),
  ADD KEY `idx_items_deleted_at` (`deleted_at`);

--
-- Indexes for table `item_images`
--
ALTER TABLE `item_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `item_variants`
--
ALTER TABLE `item_variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `color_id` (`color_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `idx_order_status` (`status`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `item_variant_id` (`item_variant_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `posters`
--
ALTER TABLE `posters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Poster_shd` (`created_by`),
  ADD KEY `Poster_dhjd` (`updated_by`);

--
-- Indexes for table `refunds`
--
ALTER TABLE `refunds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `return_id` (`return_id`),
  ADD KEY `payment_id` (`payment_id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`),
  ADD KEY `Role_fts` (`created_by`),
  ADD KEY `Role_dhhd` (`updated_by`);

--
-- Indexes for table `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `permission_id` (`permission_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `shipping_details`
--
ALTER TABLE `shipping_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tracking_no` (`tracking_no`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `size` (`size`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `updated_by` (`updated_by`),
  ADD KEY `idx_sub_categories_slug` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_user_email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `item_id` (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupon_usage`
--
ALTER TABLE `coupon_usage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `item_images`
--
ALTER TABLE `item_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `item_variants`
--
ALTER TABLE `item_variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `posters`
--
ALTER TABLE `posters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `refunds`
--
ALTER TABLE `refunds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `returns`
--
ALTER TABLE `returns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `role_permissions`
--
ALTER TABLE `role_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `shipping_details`
--
ALTER TABLE `shipping_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `Admin_senn` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `Admin_shsh` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `Co_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`item_variant_id`) REFERENCES `item_variants` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `categories_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `colors`
--
ALTER TABLE `colors`
  ADD CONSTRAINT `colors_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `colors_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`);

--
-- Constraints for table `coupons`
--
ALTER TABLE `coupons`
  ADD CONSTRAINT `Coupons_ibfk_` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`);

--
-- Constraints for table `coupon_usage`
--
ALTER TABLE `coupon_usage`
  ADD CONSTRAINT `coupon_usage_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `coupon_usage_ibfk_2` FOREIGN KEY (`coupon_id`) REFERENCES `coupons` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `coupon_usage_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `sub_categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `items_ibfk_4` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `item_images`
--
ALTER TABLE `item_images`
  ADD CONSTRAINT `item_images_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `item_variants`
--
ALTER TABLE `item_variants`
  ADD CONSTRAINT `item_variants_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `item_variants_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `item_variants_ibfk_3` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posters`
--
ALTER TABLE `posters`
  ADD CONSTRAINT `Poster_dhjd` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `Poster_shd` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`);

--
-- Constraints for table `refunds`
--
ALTER TABLE `refunds`
  ADD CONSTRAINT `refunds_ibfk_1` FOREIGN KEY (`return_id`) REFERENCES `returns` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `refunds_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `returns`
--
ALTER TABLE `returns`
  ADD CONSTRAINT `returns_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `returns_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `Role_dhhd` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`),
  ADD CONSTRAINT `Role_fts` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`);

--
-- Constraints for table `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_permissions_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `role_permissions_ibfk_4` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `shipping_details`
--
ALTER TABLE `shipping_details`
  ADD CONSTRAINT `shipping_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `sizes_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sub_categories_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `sub_categories_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `admins` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;