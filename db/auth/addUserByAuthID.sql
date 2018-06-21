INSERT INTO users
    (first_name, last_name, authid)
VALUES
    ($1, $2, $3)
RETURNING *;