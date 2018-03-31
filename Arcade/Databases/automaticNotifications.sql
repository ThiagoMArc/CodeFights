/*
...Given the users table, your task is to return the emails of all the users who should get notifications, i.e. those whose role is not equal to "admin" or "premium"
*/
CREATE PROCEDURE automaticNotifications()
    SELECT email
    FROM users
    WHERE role NOT IN ("admin", "premium")

    ORDER BY email;
