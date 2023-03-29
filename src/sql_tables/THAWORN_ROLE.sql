CREATE TABLE IF NOT EXISTS THAWORN_ROLE (
    role_id int NOT NULL,
    role_name VARCHAR(255) NOT NULL,
    active boolean DEFAULT false,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id)) DEFAULT CHARSET= utf8;