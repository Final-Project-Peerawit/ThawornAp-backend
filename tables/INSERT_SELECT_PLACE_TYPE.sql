INSERT INTO SELECT_PLACE_TYPE (type_id, type_name, active) 
VALUES (1, 'ภายในห้องพัก', true), 
       (2, 'พื้นที่ส่วนกลาง', true)
ON DUPLICATE KEY UPDATE type_name = VALUES(type_name), active = VALUES(active);