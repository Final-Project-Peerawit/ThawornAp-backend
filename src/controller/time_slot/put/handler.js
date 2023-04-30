const connection = require("../../../connection");

const handlerUpdateTimeSlot = (req, res) => {
  const { time_slot1, time_slot2, time_slot3, time_slot4 } = req.body;
  const { time_id } = req.params;

  const updateTimeSlot1 = (timeSlot1) => {
    if (timeSlot1 || timeSlot1 === null) {
      return `time_slot1 = ${connection.escape(time_slot1)}`;
    }
    return "";
  };

  const updateTimeSlot2 = (timeSlot2) => {
    if (timeSlot2 || timeSlot2 === null) {
      return `time_slot2 = ${connection.escape(time_slot2)}`;
    }
    return "";
  };

  const updateTimeSlot3 = (timeSlot3) => {
    if (timeSlot3 || timeSlot3 === null) {
      return `time_slot3 = ${connection.escape(time_slot3)}`;
    }
    return "";
  };

  const updateTimeSlot4 = time_slot4
    ? `time_slot4 = ${connection.escape(time_slot4)}`
    : "";
  try {
    connection.query(
      `UPDATE TIME_SLOT SET ${updateTimeSlot1(
        time_slot1
      )} ${updateTimeSlot2} ${updateTimeSlot3} ${updateTimeSlot4} WHERE time_id = ${connection.escape(
        time_id
      )};`,
      (err, _result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(201).json({ message: "ok" });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerUpdateTimeSlot;
