
INSERT INTO [dbo].[FactProject] 
    (
      [Project Name]
    , [Employee]
    , [Customer]
    , [Value]
    , [Probability]
    , [Start Date]
    , [End Date]
    )
VALUES 
    (
      @name
    , @employee
    , @customer
    , @value
    , @probability
    , @start
    , @end
    )