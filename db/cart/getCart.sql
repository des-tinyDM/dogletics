select * from cart_item ci 
join inventory i on i.item_id = ci.item_id
where cart_id = 
	(
		(select cart_id from cart where user_id = $1 and paid = FALSE
		order by date_created DESC limit 1)
	)