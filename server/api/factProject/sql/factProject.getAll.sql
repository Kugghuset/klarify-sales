SELECT
    [Employee]
  , [Project Name]
  , [Customer]
  , [Value]
  , [Probability]
  , [Start Date]
  , [End Date]
  , [ProjectId]
  , [isDeleted]
FROM [dbo].[FactProject]
WHERE isDeleted = 0