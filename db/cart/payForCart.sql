update cart
SET 
final_amt = $3,
paid = 'true',
time_paid = CURRENT_TIMESTAMP
where cart_id = $2;

select * from cart 
WHERE user_id = $1 and paid = 'true';