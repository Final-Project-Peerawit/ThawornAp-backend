CREATE TABLE IF NOT EXISTS EXPENSES (
    expenses_id int NOT NULL,
    branch_id int NOT NULL,
    place_id int NOT NULL,
    type_id int NOT NULL,
    item_price DECIMAL(10,3) NOT NULL,
    wage DECIMAL(10,3) NOT NULL,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (expenses_id),
    FOREIGN KEY (branch_id) REFERENCES SELECT_BRANCH(branch_id),
    FOREIGN KEY (place_id) REFERENCES SELECT_PLACE(place_id),
    FOREIGN KEY (type_id) REFERENCES SELECT_PLACE_TYPE(type_id)) DEFAULT CHARSET= utf8;