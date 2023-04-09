INSERT INTO SELECT_BRANCH (branch_id, branch_name, active) 
VALUES (0, 'สาขาทั้งหมด', true),
       (1, 'ลาดพร้าว71', true), 
       (2, 'ลาดพร้าว78', true), 
       (3, 'ลาดกระบัง', true) 
ON DUPLICATE KEY UPDATE branch_name = VALUES(branch_name), active = VALUES(active);