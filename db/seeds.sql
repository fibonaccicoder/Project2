INSERT INTO lifecoach_db.users
(firstname, lastname, email, password, createdAt, updatedAt)
VALUES
("Donald", "Duck", "mallard@disney.com", "123", "2018-05-12 23:59:59", "2018-05-13 01:01:01"),
("Mickey", "Mouse", "mouse@disney.com", "123", "2018-05-12 23:59:59", "2018-05-13 01:01:01"),
("Daisy", "Duck", "duck@disney.com", "123", "2018-05-12 23:59:59", "2018-05-13 01:01:01");

INSERT INTO lifecoach_db.tasks
(task_name, category, completed, value, frequency, createdAt, updatedAt, userId)
VALUES
("Sit-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Push-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Squats", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Stretching", "Exercise", 0, 2, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Yoga", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Walking", "Exercise", 0, 4, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Weights", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Burpees", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 1),
("Sit-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Push-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Squats", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Stretching", "Exercise", 0, 2, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Yoga", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Walking", "Exercise", 0, 4, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Weights", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Burpees", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 2),
("Sit-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Push-ups", "Exercise", 0, 5, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Squats", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Stretching", "Exercise", 0, 2, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Yoga", "Exercise", 0, 3, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Walking", "Exercise", 0, 4, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Weights", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3),
("Burpees", "Exercise", 0, 7, "daily", "2018-05-12 23:59:59", "2018-05-13 01:01:01", 3);

VALUES
("Leg Day! WOOH!"),
("Back and Abs! GET THAT ROCK HARD CORE"),
("Chest and Arms! THESE ARE YOUR CHARMS"),
("Walk! SWING THOSE HIPS"),
("Run! FEEL THE BURN"),
("Hike! WATCH OUT FOR SNAKES"),
("Bike! WATCH FOR CARS"),
("Yoga! BREATHE")