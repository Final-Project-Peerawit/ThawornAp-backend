CREATE TABLE IF NOT EXISTS TIME_SLOT (
    time_id varchar(36) NOT NULL,
    report_id varchar(36) NOT NULL,
    time_slot1 TIMESTAMP NULL,
    time_slot2 TIMESTAMP NULL,
    time_slot3 TIMESTAMP NULL,
    time_slot4 TIMESTAMP NULL,
    active boolean DEFAULT false,
    create_dt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (time_id),
    FOREIGN KEY (report_id) REFERENCES REPORT(report_id)) DEFAULT CHARSET= utf8;