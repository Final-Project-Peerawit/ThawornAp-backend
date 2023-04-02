INSERT INTO
    REPORT_STATE (state_id, state_name, active)
VALUES
    (1, 'รอรับเรื่อง', 1),
    (2, 'ยืนยันการรับเรื่อง', 1),
    (3, 'ยืนยันวัน-เวลา', 1),
    (4, 'กำลังดำเนินการ', 1),
    (5, 'ตรวจสอบหลังดำเนินการ', 1),
    (6, 'เสร็จสิ้น', 1) 
ON DUPLICATE KEY UPDATE state_name = VALUES(state_name), active =VALUES(active);