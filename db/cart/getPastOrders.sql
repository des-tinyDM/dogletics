select * from cart 
WHERE user_id = $1 and paid = 'true'
order by time_paid desc;