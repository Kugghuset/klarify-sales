/*
Finds all factFinancials for 12 months from @period
*/

CREATE TABLE FactProject
(
    [Employee] nvarchar(200),
    [Customer] nvarchar(250),
    [Value] decimal(18,2),
    [Probability] decimal(3,2) NOT NULL CHECK (Probability >= 0 AND Probability <= 1),
    [Start Date] date,
    [End Date] date
);