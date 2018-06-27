update cart_item
SET quantity = $3
where cart_id = $1 and item_id = $2;
select * from cart_item ci
join inventory i on i.item_id = ci.item_id
where cart_id = $1;