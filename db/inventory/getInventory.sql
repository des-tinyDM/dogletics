SELECT *
    FROM inventory
     ORDER BY item_id 
     LIMIT  $1    OFFSET $2