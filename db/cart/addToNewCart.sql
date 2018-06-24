with create_cart as (
insert into cart (user_id) values ($1) returning cart_id)
insert into cart_item ( item_id, cart_id) values ($2, 
(select cart_id from create_cart)
);