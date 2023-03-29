CREATE TABLE IF NOT EXISTS ROLE_LIST (
    role_list_id int NOT NULL,
    role_id int NOT NULL,
    function_id int NOT NULL,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_list_id),
    FOREIGN KEY (role_id) REFERENCES THAWORN_ROLE(role_id),
    FOREIGN KEY (function_id) REFERENCES FUNCTION_LIST(function_id)) DEFAULT CHARSET= utf8;