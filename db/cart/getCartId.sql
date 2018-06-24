select cart_id from cart where user_id = 1 and transaction_complete = false 
order by date_created desc limit 1