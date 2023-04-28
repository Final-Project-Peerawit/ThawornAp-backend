INSERT INTO
    REPORT_STATE (state_id, state_name, active)
VALUES
    (1, 'รอรับเรื่อง', true),
    (2, 'ยืนยันการรับเรื่อง', true),
    (3, 'ยืนยันวัน-เวลา', true),
    (4, 'กำลังดำเนินการ', true),
    (5, 'เสร็จสิ้น', true),
    (6, 'ไม่สำเร็จ', true)
ON DUPLICATE KEY UPDATE state_name = VALUES(state_name), active = VALUES(active);