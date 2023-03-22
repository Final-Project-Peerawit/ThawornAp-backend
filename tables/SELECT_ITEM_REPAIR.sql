CREATE TABLE IF NOT EXISTS SELECT_ITEM_REPAIR (
    repair_id int NOT NULL,
    place_id int NOT NULL ,
    repair_name VARCHAR(255) NOT NULL,
    active boolean DEFAULT false,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (repair_id),
    FOREIGN KEY (place_id) REFERENCES SELECT_PLACE(place_id)) DEFAULT CHARSET= utf8;