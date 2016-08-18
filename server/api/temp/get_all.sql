SELECT
    [ProjectId]
  , [Employee]
  , [Project Name]
  , [Customer]
  , [Value]
  , [Probability]
  , [Start Date]
  , [End Date] 
  , [isDeleted]
FROM [dbo].[FactProject]
WHERE isDeleted = 0