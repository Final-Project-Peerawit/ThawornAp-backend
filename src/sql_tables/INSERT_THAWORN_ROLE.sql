INSERT INTO THAWORN_ROLE (role_id, role_name, active) 
VALUES (1, 'user', true), 
       (2, 'admin', true), 
       (3, 'superadmin', true)
ON DUPLICATE KEY UPDATE role_name = VALUES(role_name), active = VALUES(active);