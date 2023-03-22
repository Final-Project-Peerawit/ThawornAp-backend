INSERT INTO ROLE_LIST (role_list_id, role_id, function_id) 
VALUES (1, 1, 1), 
       (2, 1, 2), 
       (3, 1, 3), 
       (4, 1, 6), 
       (5, 2, 1), 
       (6, 2, 2), 
       (7, 2, 3), 
       (8, 2, 4), 
       (9, 2, 6), 
       (10, 3, 1), 
       (11, 3, 2), 
       (12, 3, 3), 
       (13, 3, 4), 
       (14, 3, 5), 
       (15, 3, 6)
ON DUPLICATE KEY UPDATE role_id = VALUES(role_id), function_id = VALUES(function_id);