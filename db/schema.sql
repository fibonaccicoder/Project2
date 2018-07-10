-- Drops the "lifecoach" database if it exists currently --
DROP DATABASE IF EXISTS lifecoach_db;
-- Creates the "lifecoach" database --
CREATE DATABASE lifecoach_db;

-- --*** MySQL Event Schedulers *** --
-- Reset tasks with "daily" attribute at 0:00 every day --
DROP EVENT IF EXISTS `resetByDay`;
CREATE EVENT `resetByDay`
ON SCHEDULE
EVERY 1 DAY
STARTS '2000-01-01 00:00:00'
DO
UPDATE lifecoach_db.tasks SET completed = FALSE WHERE frequency = "daily";

-- Reset tasks with "weekly" attribute at 0:00 every 7 days --
DROP EVENT IF EXISTS `resetByWeek`;
CREATE EVENT `resetByWeek`
ON SCHEDULE
EVERY 7 DAY
STARTS '2000-01-01 00:00:00'
DO
UPDATE lifecoach_db.tasks SET completed = FALSE WHERE frequency = "weekly";

-- Reset tasks with "minute" attribute every minute --
DROP EVENT IF EXISTS `resetByMinute`;
CREATE EVENT `resetByMinute`
ON SCHEDULE
EVERY 1 MINUTE
STARTS '2000-01-01 00:00:00'
DO
UPDATE lifecoach_db.tasks SET completed = FALSE WHERE frequency = "minute";

-- !IMPORTANT!
SET GLOBAL event_scheduler = ON;