-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 10, 2020 at 03:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apparaisal`
--

-- --------------------------------------------------------

--
-- Table structure for table `appraisal`
--

CREATE TABLE `appraisal` (
  `appraisal_id` int(11) NOT NULL,
  `objective` varchar(40) NOT NULL,
  `year` year(4) NOT NULL,
  `department_ID` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appraisal`
--

INSERT INTO `appraisal` (`appraisal_id`, `objective`, `year`, `department_ID`, `employee_id`, `rating`) VALUES
(1, 'Honesty and timeliness', 2019, 1, 4, 4),
(2, 'Honesty and timeliness', 2019, 4, 1, 5),
(3, 'Honesty and timeliness', 2019, 2, 3, 5),
(4, 'Honesty and timeliness', 2019, 3, 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_ID` int(11) NOT NULL,
  `department_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_ID`, `department_name`) VALUES
(1, 'Finance'),
(2, 'IT'),
(3, 'Marketing'),
(4, 'Human Resources');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_ID` int(11) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `email` text NOT NULL,
  `contact` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `manager_ID` int(11) NOT NULL,
  `job_ID` int(11) NOT NULL,
  `department_ID` int(11) NOT NULL,
  `hire_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_ID`, `first_name`, `last_name`, `email`, `contact`, `address`, `manager_ID`, `job_ID`, `department_ID`, `hire_Date`) VALUES
(1, 'John', 'King', 'johnking@gmail.com', '6-8626259', '2 Senang Cres ', 0, 101, 4, '2019-09-03'),
(2, 'Steven ', 'John', 'steventJohn@gmail.com', '6-9087654', '15 Woodlands Loop #03-47', 1, 102, 3, '2020-02-11'),
(3, 'Andre', 'Asher', 'andre@gmail.com', '6-908765', '16 Jalan Besut, Singapore', 2, 101, 2, '2020-02-11'),
(4, 'Asher', 'Andre', 'asher@gmail.com', '6-9087658', '139 Tampines Street 11 #01-34', 3, 101, 1, '2019-07-17');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `job_ID` int(11) NOT NULL,
  `jobTitle` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`job_ID`, `jobTitle`) VALUES
(100, 'Admin'),
(101, 'Accountant'),
(102, 'Marketing Manager'),
(103, 'Stock Clerk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appraisal`
--
ALTER TABLE `appraisal`
  ADD PRIMARY KEY (`appraisal_id`),
  ADD KEY `department_ID` (`department_ID`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_ID`),
  ADD KEY `department_ID` (`department_ID`),
  ADD KEY `job_ID` (`job_ID`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`job_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appraisal`
--
ALTER TABLE `appraisal`
  ADD CONSTRAINT `appraisal_ibfk_1` FOREIGN KEY (`department_ID`) REFERENCES `department` (`department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `appraisal_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_ID`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`department_ID`) REFERENCES `department` (`department_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`job_ID`) REFERENCES `job` (`job_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
