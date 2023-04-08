const connection = require("../../connection");

const handlerGetExpensesBranch = (req, res) => {
  const { branch_id } = req.user;
  try {
    connection.query(
      `SELECT branch_id, SUM(item_price) , SUM(wage) , SUM(item_price) + SUM(wage) as total FROM EXPENSES WHERE branch_id = '${branch_id}' GROUP BY branch_id;`,
      (err, result, _fields) => {
        if (err) {
          return res.status(400).send(err);
        }

        return res.status(200).json({ result: result });
      }
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = handlerGetExpensesBranch;
