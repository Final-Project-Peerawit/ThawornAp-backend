INSERT INTO FUNCTION_LIST (function_id, function_name_th, function_name_en) 
VALUES (1, 'หน้าแรก', 'home'), 
       (2, 'แจ้งปัญหา', 'report'), 
       (3, 'รายการแจ้งซ่อม', 'list-report'),
       (4, 'จัดการสาขา', 'branch-management'),
       (5, 'จัดการเจ้าหน้าที่', 'personnel-management'),
       (6, 'ออกจากระบบ', 'logout')
ON DUPLICATE KEY UPDATE function_name_th = VALUES(function_name_th), function_name_en = VALUES(function_name_en);