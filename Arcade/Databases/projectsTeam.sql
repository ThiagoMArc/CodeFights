/*
... Given the table projectLog, build a new results table with a single name column that contains the names of the project's contributors sorted in ascending order.
*/
CREATE PROCEDURE projectsTeam()
BEGIN
	SELECT DISTINCT name FROM projectLog ORDER BY name;
END
