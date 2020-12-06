-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 06 Des 2020 pada 06.24
-- Versi server: 5.7.24
-- Versi PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_absentapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_absent`
--

CREATE TABLE `tbl_absent` (
  `id_absent` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `jam_masuk` time NOT NULL,
  `jam_keluar` time NOT NULL,
  `tanggal` int(11) NOT NULL,
  `bulan` int(11) NOT NULL,
  `tahun` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_absent`
--

INSERT INTO `tbl_absent` (`id_absent`, `user_id`, `jam_masuk`, `jam_keluar`, `tanggal`, `bulan`, `tahun`, `created_at`, `updated_at`) VALUES
('dfddd713-e05a-417a-aada-5a41c1a302c5', 'c705d8a3-ed44-48b1-b987-42d79d7ba348', '05:55:01', '00:00:00', 28, 11, 2020, '2020-11-27 22:55:01', '2020-11-27 22:55:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_menu`
--

CREATE TABLE `tbl_menu` (
  `id_menu` varchar(64) NOT NULL,
  `menu` varchar(64) NOT NULL,
  `url` varchar(64) DEFAULT NULL,
  `icon` varchar(32) DEFAULT NULL,
  `no_serial` int(2) NOT NULL,
  `is_active` enum('0','1') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_menu`
--

INSERT INTO `tbl_menu` (`id_menu`, `menu`, `url`, `icon`, `no_serial`, `is_active`, `created_at`, `updated_at`) VALUES
('377ef399-ca34-11ea-a80b-54ab3af6eea6', 'Beranda', 'dashboard', '', 1, '1', '2020-11-28 07:48:58', '2020-08-04 14:37:03'),
('b6c6f4c1-3067-11eb-b900-54ab3af6eea6', 'User', NULL, NULL, 5, '1', '2020-11-28 07:48:50', '2020-11-27 04:18:57'),
('bc7f94e3-21bc-11eb-b573-54a123', 'Tim', NULL, NULL, 4, '1', '2020-11-28 07:48:44', '2020-11-08 12:19:14'),
('bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Admin', NULL, NULL, 3, '1', '2020-11-08 12:19:14', '2020-11-08 12:19:14');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_role`
--

CREATE TABLE `tbl_role` (
  `id_role` varchar(64) NOT NULL,
  `name` varchar(32) NOT NULL,
  `is_active` enum('0','1') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_role`
--

INSERT INTO `tbl_role` (`id_role`, `name`, `is_active`, `created_at`, `updated_at`) VALUES
('131f024e-2627-11eb-8fd9-54ab3af6eea6', 'Leader', '1', '2020-11-14 03:10:55', '2020-11-14 03:10:55'),
('26208e31-2627-11eb-8fd9-54ab3af6eea6', 'Staff', '1', '2020-11-14 03:11:27', '2020-11-14 03:11:27'),
('5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', 'Administrator', '1', '2020-07-20 02:44:23', '2020-08-02 23:11:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_role_access`
--

CREATE TABLE `tbl_role_access` (
  `id_role_access` varchar(64) NOT NULL,
  `role_id` varchar(64) NOT NULL,
  `menu_id` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_role_access`
--

INSERT INTO `tbl_role_access` (`id_role_access`, `role_id`, `menu_id`, `created_at`, `updated_at`) VALUES
('16b06edc-21bd-11eb-b573-54ab3af6eea6', '5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', '2020-11-08 12:21:54', '2020-11-08 12:21:54'),
('65906ef7-3067-11eb-b900-54ab3af6eea6', '131f024e-2627-11eb-8fd9-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', '2020-11-27 04:16:24', '2020-11-27 04:16:24'),
('b4f75192-ec61-4ea7-b0b6-9fcdb21deeb0', '5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', '377ef399-ca34-11ea-a80b-54ab3af6eea6', '2020-07-28 13:20:03', '2020-07-28 13:20:03'),
('cde99882-3067-11eb-b900-54ab3af6eea6', '26208e31-2627-11eb-8fd9-54ab3af6eea6', 'b6c6f4c1-3067-11eb-b900-54ab3af6eea6', '2020-11-27 04:19:27', '2020-11-27 04:19:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_sub_menu`
--

CREATE TABLE `tbl_sub_menu` (
  `id_sub_menu` varchar(64) NOT NULL,
  `menu_id` varchar(64) NOT NULL,
  `title` varchar(32) NOT NULL,
  `url` varchar(32) NOT NULL,
  `no_serial` int(2) NOT NULL,
  `icon` varchar(64) NOT NULL,
  `is_active` enum('0','1') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_sub_menu`
--

INSERT INTO `tbl_sub_menu` (`id_sub_menu`, `menu_id`, `title`, `url`, `no_serial`, `icon`, `is_active`, `created_at`, `updated_at`) VALUES
('2cd89d52-21d3-11eb-b573-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Kelola Absen', 'absent/manageabsent', 3, 'users', '1', '2020-11-28 07:49:13', '2020-11-08 14:58:13'),
('43949d20-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Kelola Absen', 'absent/manageabsent', 3, 'users', '1', '2020-11-28 07:49:27', '2020-11-08 14:58:13'),
('4394aa2f-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Tambah User', 'user/adduser', 5, 'user-plus', '0', '2020-11-28 07:49:33', '2020-11-08 15:07:52'),
('4394b69a-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Edit Tim', 'team/editteam', 5, 'user-plus', '0', '2020-11-28 07:49:38', '2020-11-08 15:07:52'),
('4394c0e5-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Hapus User', 'user/deleteuser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('4394c602-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Edit Absen', 'absent/editabsent', 5, 'user-plus', '0', '2020-11-28 07:49:48', '2020-11-08 15:07:52'),
('4394cb0d-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Kelola Tim', 'team', 6, 'users', '1', '2020-11-28 07:49:55', '2020-11-12 17:21:59'),
('4394d05c-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Laporan Absen Saya', 'absent/listabsent', 2, 'box', '1', '2020-11-28 07:50:03', '2020-11-08 12:33:43'),
('4394d57d-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Absen', 'absent/check', 1, 'user-check', '1', '2020-11-28 07:50:08', '2020-11-08 12:20:16'),
('4394da8a-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Edit User', 'user/edituser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('4394df9e-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Detail User', 'user/detailuser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('4394e4b0-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Turn', 'absent/turn', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('4394e99d-3067-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54a123', 'Kelola User', 'user', 4, 'users', '1', '2020-11-28 07:50:19', '2020-11-08 15:05:42'),
('57164359-21d4-11eb-b573-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Tambah User', 'user/adduser', 5, 'user-plus', '0', '2020-11-28 07:50:26', '2020-11-08 15:07:52'),
('58923a15-30213123124vaksdhioh2131', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'HapusTim', 'team/deleteteam', 5, 'user-plus', '0', '2020-11-28 07:50:31', '2020-11-08 15:07:52'),
('58923a15-3055-11eb-b900-54ab3af63123', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Edit Tim', 'team/editteam', 5, 'user-plus', '0', '2020-11-28 07:50:35', '2020-11-08 15:07:52'),
('58923a15-3055-11eb-b900-54ab3af631358', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Tambah Tim', 'team/createteam', 5, 'user-plus', '0', '2020-11-28 07:50:45', '2020-11-08 15:07:52'),
('58923a15-3055-11eb-b900-54ab3af6eea123', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Hapus User', 'user/deleteuser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('58923a15-3055-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Edit Absen', 'absent/editabsent', 5, 'user-plus', '0', '2020-11-28 07:50:54', '2020-11-08 15:07:52'),
('8c96f3d9-3068-11eb-b900-54ab3af6eea6', 'b6c6f4c1-3067-11eb-b900-54ab3af6eea6', 'Absen', 'absent/check', 1, 'user-check', '1', '2020-11-28 07:50:57', '2020-11-08 12:20:16'),
('8c96fe8f-3068-11eb-b900-54ab3af6eea6', 'b6c6f4c1-3067-11eb-b900-54ab3af6eea6', 'Laporan Absen Saya', 'absent/listabsent', 2, 'box', '1', '2020-11-28 07:51:07', '2020-11-08 12:33:43'),
('a4dea6bb-250b-11eb-8d4a-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Kelola Tim', 'team', 6, 'users', '1', '2020-11-28 07:51:17', '2020-11-12 17:21:59'),
('ca01e73b-21be-11eb-b573-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Laporan Absen Saya', 'absent/listabsent', 2, 'box', '1', '2020-11-28 07:51:29', '2020-11-08 12:33:43'),
('ec7cdf6b-21bc-11eb-b573-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Absen', 'absent/check', 1, 'user-check', '1', '2020-11-28 07:51:32', '2020-11-08 12:20:16'),
('f4922d70-3050-11eb-b900-54ab3af6eea10', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Edit User', 'user/edituser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('f4922d70-3050-11eb-b900-54ab3af6eea40', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Detail User', 'user/detailuser', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('f4922d70-3050-11eb-b900-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Turn', 'absent/turn', 5, 'user-plus', '0', '2020-11-08 15:07:52', '2020-11-08 15:07:52'),
('f66745f3-21d3-11eb-b573-54ab3af6eea6', 'bc7f94e3-21bc-11eb-b573-54ab3af6eea6', 'Manage Personal', 'user', 4, 'users', '1', '2020-11-08 15:05:42', '2020-11-08 15:05:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_team`
--

CREATE TABLE `tbl_team` (
  `id_team` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `leader_id` varchar(64) NOT NULL,
  `active` enum('0','1') NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbl_team`
--

INSERT INTO `tbl_team` (`id_team`, `name`, `leader_id`, `active`, `created_at`, `updated_at`) VALUES
('02ed753c-6838-4191-a672-f128335a6d17', 'asdsadsadasd', '', '1', '2020-12-06 06:22:26', '2020-12-06 06:22:26'),
('32423sfdsf23423fsdf23423', 'Makanan', 'bd38afe9-60ec-4ff8-ac89-ee29f2c327d0', '1', '2020-12-06 06:06:29', '2020-12-06 06:06:29'),
('96cb4a49-e700-44a8-9298-142e1f93a89a', 'Knalpot', '0781455b-d2a0-4aa1-947d-933c4b1c9c19', '1', '2020-11-28 07:46:32', '2020-11-28 07:46:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `display_name` varchar(64) NOT NULL,
  `phone` int(11) NOT NULL,
  `team_id` varchar(64) NOT NULL,
  `role_id` varchar(64) NOT NULL,
  `jam_masuk` time NOT NULL,
  `jam_keluar` time NOT NULL,
  `tolerir_masuk` time NOT NULL,
  `tolerir_keluar` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `username`, `password`, `display_name`, `phone`, `team_id`, `role_id`, `jam_masuk`, `jam_keluar`, `tolerir_masuk`, `tolerir_keluar`, `created_at`, `updated_at`) VALUES
('0781455b-d2a0-4aa1-947d-933c4b1c9c19', 'user2', '$2y$10$KNw7rCLIsN.CJcBp.TncEOpCksI5zWAZNmwxDbydg5jnto7I3sYQu', 'user2', 2147483647, '96cb4a49-e700-44a8-9298-142e1f93a89a', '131f024e-2627-11eb-8fd9-54ab3af6eea6', '06:00:00', '12:00:00', '01:00:00', '01:00:00', '2020-12-06 06:22:16', '2020-12-06 06:22:16'),
('2362019e-d14c-44df-a9da-f7367b4fcc1c', 'mibnu123', '$2y$10$dcLuJKRQYQHvdiSMNl7v2OeRAXQa/78UujjgjQkYdICOv9DZb5dh.', 'Mohammad Ibnu', 2132, '', '5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', '07:00:00', '16:00:00', '01:00:00', '01:00:00', '2020-11-15 01:36:49', '2020-11-28 01:35:31'),
('361dd820-52e0-4f10-bb3c-7463f984dc5e', 'user1', '$2y$10$4sJhOUltu5uCpp3pZ6Sewe5J80UNcac/z9hpA8pbCO2o5V0DaiwMi', 'user1', 1111, '96cb4a49-e700-44a8-9298-142e1f93a89a', '26208e31-2627-11eb-8fd9-54ab3af6eea6', '06:00:00', '12:00:00', '01:00:00', '01:00:00', '2020-11-27 23:02:23', '2020-11-27 23:02:23'),
('bd38afe9-60ec-4ff8-ac89-ee29f2c327d0', '21313', '$2y$10$Xi9BN/rOqVxLfqcq2mX40OAkp4jo9.7tOcUlZlnGHNiHhTpUC0r.C', 'asdsadsad', 23123, '32423sfdsf23423fsdf23423', '131f024e-2627-11eb-8fd9-54ab3af6eea6', '12:32:12', '03:21:32', '21:32:13', '21:32:13', '2020-12-06 06:06:30', '2020-12-06 06:06:30'),
('c705d8a3-ed44-48b1-b987-42d79d7ba348', 'yopi123', '$2y$10$B8Pb26GY3FnIuQHJipI7COhFhjW2qPOsdRDl.nHgAKH0SBn9GDhdi', 'Alfian Prisma Yopiangga', 2147483647, ' ', '5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', '06:00:00', '16:00:00', '01:00:00', '01:00:00', '2020-11-28 01:58:28', '2020-11-28 01:58:28'),
('d36ba254-00e9-4fc7-ab2a-f2e2d07a9895', 'hassan123', '$2y$10$14.WacZQ.BxnpwRfwDl3/OuMl3Jp.r.Idemm691BX0Q8cRXbACXiG', 'Rizky Hassan R.', 521574851, ' ', '5f8731b9-9e73-4d0d-b37e-4dc4a981bd50', '06:00:00', '16:00:00', '01:00:00', '01:00:00', '2020-11-28 01:59:02', '2020-11-28 01:59:02');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_absent`
--
ALTER TABLE `tbl_absent`
  ADD PRIMARY KEY (`id_absent`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `tbl_menu`
--
ALTER TABLE `tbl_menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `tbl_role`
--
ALTER TABLE `tbl_role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indeks untuk tabel `tbl_role_access`
--
ALTER TABLE `tbl_role_access`
  ADD PRIMARY KEY (`id_role_access`),
  ADD KEY `id_role` (`role_id`,`menu_id`),
  ADD KEY `tbl_role_access_ibfk_1` (`menu_id`);

--
-- Indeks untuk tabel `tbl_sub_menu`
--
ALTER TABLE `tbl_sub_menu`
  ADD PRIMARY KEY (`id_sub_menu`),
  ADD KEY `id_menu` (`menu_id`);

--
-- Indeks untuk tabel `tbl_team`
--
ALTER TABLE `tbl_team`
  ADD PRIMARY KEY (`id_team`);

--
-- Indeks untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `role_id` (`role_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_absent`
--
ALTER TABLE `tbl_absent`
  ADD CONSTRAINT `tbl_absent_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tbl_role_access`
--
ALTER TABLE `tbl_role_access`
  ADD CONSTRAINT `tbl_role_access_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `tbl_menu` (`id_menu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_role_access_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `tbl_role` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tbl_sub_menu`
--
ALTER TABLE `tbl_sub_menu`
  ADD CONSTRAINT `tbl_sub_menu_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `tbl_menu` (`id_menu`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD CONSTRAINT `tbl_user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `tbl_role` (`id_role`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
