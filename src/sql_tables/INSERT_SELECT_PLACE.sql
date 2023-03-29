INSERT INTO SELECT_PLACE (place_id, type_id, place_name, active) 
VALUES (1, 1, 'ห้องนอน', true), 
       (2, 1, 'ห้องน้ำ', true), 
       (3, 1, 'ระเบียง', true),
       (4, 2, 'ลิฟต์', true),
       (5, 2, 'ชั้นทั้งหมดของอาคาร', true),
       (6, 2, 'ที่จอดรถ', true),
       (7, 2, 'ห้องประชุมรวม / ห้องกิจกรรม', true),
       (8, 2, 'ฟิตเนส', true)
ON DUPLICATE KEY UPDATE type_id = VALUES(type_id), place_name = VALUES(place_name), active = VALUES(active);