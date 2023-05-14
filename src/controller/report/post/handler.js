const connection = require("../../../connection");
const request = require("request");
const accessToken = "xQhobCOcCO5KYcZazN5WIqlwFJBWLjiz4HOXOZ1tSoQ";

const handlerReport = (req, res) => {
  const {
    type_id,
    place_id,
    repair_id,
    report_dt,
    image_file,
    description,
    is_allow,
  } = req.body;

  const report_id = String(Math.floor(Math.random() * 90000) + 1000000);
  const login_id = req.user.login_id;
  const state_id = 1;
  const active = 1;
  const branch = ["ทั้งหมด", "ลาดพร้าว 71", "ลาดพร้าว 78", "ลาดกระบัง"];
  const message = `แจ้งซ่อม \nผู้ใช้ ${req.user.firstname} ${
    req.user.lastname
  }\nสาขา${branch[req.user.branch_id]} ห้อง ${
    req.user.room_number
  } \nรหัสการแจ้ง ${report_id} \nวันที่ ${new Date().toLocaleString("th-Th")}`;

  try {
    connection.query(
      `INSERT INTO
        REPORT (
            report_id,
            login_id,
            type_id,
            place_id,
            repair_id,
            report_dt,
            image_file,
            description,
            state_id,
            is_allow,
            active
        )
        VALUES
        (
            ${connection.escape(report_id)},
            ${connection.escape(login_id)},
            ${connection.escape(type_id)},
            ${connection.escape(place_id)},
            ${connection.escape(repair_id)},
            ${connection.escape(report_dt)},
            ${connection.escape(image_file)},
            ${connection.escape(description)},
            ${connection.escape(state_id)},
            ${connection.escape(is_allow)},
            ${connection.escape(active)}
        );`,
      (err, _result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }

        const options = {
          method: "POST",
          url: "https://notify-api.line.me/api/notify",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${accessToken}`,
          },
          body: `message=${message}`,
        };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          return res.status(201).json({ message: "ok" });
        });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerReport;
