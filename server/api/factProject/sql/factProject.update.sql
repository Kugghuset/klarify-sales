UPDATE [dbo].[FactProject]
    SET 
        Probability = @probability, 
        Employee = @employee, 
        [Project Name] = @name, 
        Customer = @customer, 
        Value = @value, 
        [Start Date] = @start, 
        [End Date] = @end,
        [isDeleted] = @isdeleted
WHERE ProjectId = @id;