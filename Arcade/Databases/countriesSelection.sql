/*
Your task is to return a new table that has the same columns, but that only contains the countries from Africa. 
The countries should be sorted alphabetically by their names.

*/
CREATE PROCEDURE countriesSelection()
BEGIN
   SELECT name, continent, population FROM countries WHERE continent='Africa';     
END