# ThawornAp เว็บแอปพลิเคชันสำหรับแจ้งปัญหาในหอขนาดเล็ก
เป็นแอปพลิเคชันที่พัฒนาด้วย React-Javascript

## โครงสร้างโฟลเดอร์

```bash
├── src
│   ├── connection
│   ├── controller
│   │   ├── authen
│   │   ├── change_state
│   │   ├── expeses_all_branch
│   │   ├── expeses_branch
│   │   ├── list_report
│   │   ├── login
│   │   ├── menu_list
│   │   ├── register
│   │   ├── register_admin
│   │   ├── report
│   │   ├── report_state
│   │   ├── select_branch
│   │   ├── select_place
│   │   ├── select_place_type
│   │   ├── table_admin
│   │   ├── thaworn_role
│   │   ├── time_slot
│   │   ├── update_repair_date_list_report
│   │   └── user_profile
│   ├── enums
│   ├── sql_tables
│   │   ├── EXPENSES.sql
│   │   ├── FUNCTION_LIST.sql
│   │   ├── INSERT_FUNCTION_LIST.sql
│   │   ├── INSERT_REPORT_STATE.sql
│   │   ├── INSERT_ROLE_LIST.sql
│   │   ├── INSERT_SELECT_BRANCH.sql
│   │   ├── INSERT_SELECT_ITEM_REPAIR.sql
│   │   ├── INSERT_SELECT_PLACE.sql
│   │   ├── INSERT_SELECT_PLACE_TYPE.sql
│   │   ├── INSERT_THAWORN_ROLE.sql
│   │   ├── REPORT.sql
│   │   ├── REPORT_STATE.sql
│   │   ├── ROLE_LIST.sql
│   │   ├── SELECT_BRANCH.sql
│   │   ├── SELECT_ITEM_REPAIR.sql
│   │   ├── SELECT_PLACE.sql
│   │   ├── SELECT_PLACE_TYPE.sql
│   │   ├── THAWORN_ROLE.sql
│   │   ├── TIME_SLOT.sql
│   │   └── USER_INFO.sql
│   └── utils
├── .env
├── .gitignore
├── docker-compose.yml
├── index.js
├── package-lock.json
├── package.json
├── readme.md
└── sql_query.js
```

## ขั้นตอนในการติดตั้ง
1. ติดตั้ง node version 14.18.1 ที่นี่ https://nodejs.org/en/blog/release/v14.18.1

2. ติดตั้ง Docker desktop ที่นี่ https://docs.docker.com/desktop/install/windows-install/

3. ติดตั้ง git ผ่าน Command Prompt หรือ Powershell
```
winget install --id Git.Git -e --source winget
```
4. ใช้คำสั่ง git clone เพื่อทำการคัดลอกโปรเจกต์
```
git clone https://github.com/Final-Project-Peerawit/ThawornAp-backend.git
```
5. ติดตั้ง node module ผ่านคำสั่ง
```
npm install
```
6. เปิด Docker desktop โดยเราจะใช้ Docker เป็น container จากนั้นใช้คำสั่งด้านล่างเพื่อรัน mySQL
```
docker-compose up -d
```

## วิธีใช้งาน
เมื่อทำการติดตั้งตามขั้นตอนทั้งหมดแล้ว สามารถ run ตามคำสั่งด้านล่างได้เลย
```
npm run dev
```
