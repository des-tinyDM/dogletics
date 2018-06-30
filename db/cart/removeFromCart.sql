DELETE FROM cart_item
WHERE cart_id = $1 and cartitem_id = $2;
select * from cart_item ci
join inventory i on i.item_id = ci.item_id
where cart_id = $1;