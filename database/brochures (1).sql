-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2022 at 09:30 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brochures`
--

-- --------------------------------------------------------

--
-- Table structure for table `brochure_pdfs`
--

CREATE TABLE `brochure_pdfs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brochure_pdfs`
--

INSERT INTO `brochure_pdfs` (`id`, `title`, `url`, `created_at`, `updated_at`) VALUES
(3, 'company.png', 'public/brochures/2/company.png', '2022-07-20 11:03:14', '2022-07-20 11:43:53'),
(4, 'assign.png', 'public/brochures/2/assign.png_1658333165.png', '2022-07-20 11:06:05', '2022-07-20 11:06:05'),
(6, 'download.jfif', 'public/brochures/2/download.jfif', '2022-07-20 11:36:03', '2022-07-20 11:36:03'),
(7, 'claim.png', 'public/brochures/2/claim.png', '2022-07-20 11:37:55', '2022-07-20 11:37:55'),
(8, '.', 'public/brochures/3/.', '2022-07-25 00:09:36', '2022-07-25 00:09:36');

-- --------------------------------------------------------

--
-- Table structure for table `brochurs`
--

CREATE TABLE `brochurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brochure_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `sub_category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_received` datetime NOT NULL,
  `in_showroom` tinyint(1) NOT NULL DEFAULT 0,
  `publisher` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brochure_pdf_id` bigint(20) UNSIGNED NOT NULL,
  `QR_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brochurs`
--

INSERT INTO `brochurs` (`id`, `brochure_number`, `category_id`, `sub_category_id`, `name`, `date_received`, `in_showroom`, `publisher`, `brochure_pdf_id`, `QR_code`, `created_id`, `created_at`, `updated_at`) VALUES
(2, '12', 3, 2, 'test brochure edit', '2022-07-20 18:00:28', 0, 'test publisher edit', 3, 'qrcode/2.svg', 2, '2022-07-20 11:03:14', '2022-07-21 11:03:25'),
(5, '444', 3, 2, 'test brochure', '2022-07-20 18:00:28', 0, 'test publisher', 6, NULL, 2, '2022-07-20 11:36:03', '2022-07-20 11:36:03'),
(6, '22', 3, 2, 'test brochure', '2022-07-20 18:00:28', 0, 'test publisher', 7, NULL, 2, '2022-07-20 11:37:55', '2022-07-20 11:37:55'),
(7, 'test23', 3, 2, 'test brochure 2', '2022-07-20 18:00:28', 0, 'test publisher1', 8, NULL, 3, '2022-07-25 00:09:36', '2022-07-25 00:09:36');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `description`, `created_at`, `updated_at`) VALUES
(1, 'test category 1', NULL, NULL),
(3, 'test category 1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2022_07_19_123130_create_categories_table', 1),
(11, '2022_07_19_123621_create_sub_categories_table', 1),
(12, '2022_07_19_125000_create_brochure_pdfs_table', 1),
(13, '2022_07_19_125050_create_brochurs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('11545c10ecc1702b5f653be0004885b6ccb9def0757418e2d9d5bfda3b7a19f9ccf9b705fdeeffb3', 1, 1, 'Token', '[]', 0, '2022-07-20 06:48:40', '2022-07-20 06:48:40', '2023-07-20 11:48:40'),
('20b624123f88cb3741a33c94f55b72d4500484f806f318a11478589ac1cdd009bc9961d7476b31ac', 2, 1, 'Token', '[]', 0, '2022-07-20 07:24:22', '2022-07-20 07:24:22', '2023-07-20 12:24:22'),
('24f9c8951c0017d25a4d3a23717c6ffc95abcb4238d2fcae56890399e6a46447dd85c0affde26446', 1, 1, 'Token', '[]', 0, '2022-07-20 07:02:24', '2022-07-20 07:02:24', '2023-07-20 12:02:24'),
('45a36768cd045855096341f509c39cd8d8dd976e46c2499d92c4c641682c2e3f8cd42e343d657b87', 2, 1, 'Token', '[]', 1, '2022-07-20 11:19:40', '2022-07-20 11:19:40', '2023-07-20 16:19:40'),
('4daaa2d1e725d3fa08c6f05df4b6563275b4b2ab4bf1ed904e11f2524aac2852de7429e500fee5b9', 2, 1, 'Token', '[]', 1, '2022-07-20 08:18:07', '2022-07-20 08:18:07', '2023-07-20 13:18:07'),
('8f760625b2628a50f7ab9006805a20439319071e8c438c493511e2d5756c239a088fbbdd3dadadc8', 1, 1, 'Token', '[]', 0, '2022-07-20 07:00:59', '2022-07-20 07:00:59', '2023-07-20 12:00:59'),
('977db48d180c756c9ec921098b8a4d8eebeae0b797c783c2e512fcf9016944a891a44b58f2ba354f', 2, 1, 'Token', '[]', 0, '2022-07-20 07:21:10', '2022-07-20 07:21:10', '2023-07-20 12:21:10'),
('a5fbe25185ed46db2f89a29d6795d15e0d40df37faf640e7dc126532b791eb3311cb1a5c6844b1e9', 2, 1, 'Token', '[]', 0, '2022-07-20 07:20:39', '2022-07-20 07:20:39', '2023-07-20 12:20:39'),
('aa8c326b54ca1d9c374c68e39bececf7b75d58716524b67cb933bb726a8ae770bba37f2dc65c2110', 1, 1, 'Token', '[]', 0, '2022-07-20 07:02:39', '2022-07-20 07:02:39', '2023-07-20 12:02:39'),
('c1042f798b96b90e65d661abf43890cbd0687c482e8ad172c1bc022b488e3735bb41976a0247fc22', 3, 1, 'Token', '[]', 0, '2022-07-25 00:01:23', '2022-07-25 00:01:23', '2023-07-25 05:01:23'),
('c3ebf013c77d1dfaced5d1f67dad9fe38562b222f8790d079b81a0e7cec5d4e445981026143d253b', 2, 1, 'Token', '[]', 0, '2022-07-20 07:21:22', '2022-07-20 07:21:22', '2023-07-20 12:21:22'),
('d0fef72f3cc368d1cd09d46293b6fa72ab4bb8052bc2ab880ba33c65dc64daaff36c233214820ba0', 2, 1, 'Token', '[]', 0, '2022-07-20 10:47:13', '2022-07-20 10:47:13', '2023-07-20 15:47:13'),
('dac59ba2e68a63e87a072c0169a598953ecceee36ff50c3bd5256535b1ccffa7559dbf8093121458', 3, 1, 'Token', '[]', 0, '2022-07-24 23:59:35', '2022-07-24 23:59:35', '2023-07-25 04:59:35'),
('ff4bc58cb06cf590f9bd19cd391022213f0f62039bf3aaa2985f8660aeb2d8b34703b70b2f0a7b52', 4, 1, 'Token', '[]', 0, '2022-07-25 00:16:54', '2022-07-25 00:16:54', '2023-07-25 05:16:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'EPv4T3hGqnRZ4aCArKoj8MSezOkUrFPRr1mxh47f', NULL, 'http://localhost', 1, 0, 0, '2022-07-19 09:07:54', '2022-07-19 09:07:54'),
(2, NULL, 'Laravel Password Grant Client', 'JXdHrFqhH6g8x65qEvK6kwryrMgMB4unLow15hrz', 'users', 'http://localhost', 0, 1, 0, '2022-07-19 09:07:54', '2022-07-19 09:07:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-07-19 09:07:54', '2022-07-19 09:07:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `category_id`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'sub-category1', NULL, NULL),
(2, 3, 'sub category 2', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Muneeb', 'rehman', 'muneeburr451@gmail.com', NULL, '$2y$10$t1EKC2UGVfFN.G1z4LhQjOZ15pqJXpEvhcdcuNw3Sa2DGHi1fpM0W', NULL, '2022-07-20 06:48:40', '2022-07-20 06:48:40'),
(2, 'muneeb', 'rehman', 'muneeb@gmail.com', NULL, '$2y$10$ZGqt4FXMe32fU1EhGHY6R.C49blMdn/gjj4TO7j24CU8F4qYVb3lm', NULL, '2022-07-20 07:20:39', '2022-07-21 04:16:54'),
(3, 'Tribex', 'test', 'test@tribex.com', NULL, '$2y$10$ee4UMf3oqQJt5H0C3kIcC.d6jsFYmtBPjvhb1PXgS1Oj61qRaSdMW', NULL, '2022-07-24 23:59:35', '2022-07-24 23:59:35'),
(4, 'Tribex', 'test', 'test2@tribex.com', NULL, '$2y$10$QQ6CQzRatTiuT8WyisP5lecJLHlwO.fiAYB7HMcqTpA8ILOn2w/I2', NULL, '2022-07-25 00:16:54', '2022-07-25 00:16:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brochure_pdfs`
--
ALTER TABLE `brochure_pdfs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brochurs`
--
ALTER TABLE `brochurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brochurs_category_id_foreign` (`category_id`),
  ADD KEY `brochurs_sub_category_id_foreign` (`sub_category_id`),
  ADD KEY `brochurs_brochure_pdf_id_foreign` (`brochure_pdf_id`),
  ADD KEY `brochurs_created_id_foreign` (`created_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brochure_pdfs`
--
ALTER TABLE `brochure_pdfs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `brochurs`
--
ALTER TABLE `brochurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brochurs`
--
ALTER TABLE `brochurs`
  ADD CONSTRAINT `brochurs_brochure_pdf_id_foreign` FOREIGN KEY (`brochure_pdf_id`) REFERENCES `brochure_pdfs` (`id`),
  ADD CONSTRAINT `brochurs_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `brochurs_created_id_foreign` FOREIGN KEY (`created_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `brochurs_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`);

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
