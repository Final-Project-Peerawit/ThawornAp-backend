CREATE TABLE IF NOT EXISTS SELECT_PLACE (
    place_id int NOT NULL ,
    type_id int NOT NULL,
    place_name VARCHAR(255) NOT NULL,
    active boolean DEFAULT false,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (place_id),
    FOREIGN KEY (type_id) REFERENCES SELECT_PLACE_TYPE(type_id)) DEFAULT CHARSET= utf8;