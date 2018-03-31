/*
...
Given the table scholarships, build the resulting table as follows:
The table should have the same columns as the initial table, but the scholarship column should contain the amount of the student's monthly scholarship payout. 
The rows should be ordered by the students' ids.
*/
CREATE PROCEDURE monthlyScholarships()
BEGIN
	SELECT id, (scholarship/12) as scholarship from scholarships 
    ORDER BY id;
END