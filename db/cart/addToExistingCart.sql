insert into cart_item (item_id, cart_id) values ($1, $2)
returning *;