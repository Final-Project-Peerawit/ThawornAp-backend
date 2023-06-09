const connection = require("../../connection");

const handlerGetExpensesAllBranch = (req, res) => {
  try {
    connection.query(
      `SELECT branch_id, SUM(item_price) as total_item_price, SUM(wage) as total_wage , SUM(item_price) + SUM(wage) as total_all FROM EXPENSES;`,
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

module.exports = handlerGetExpensesAllBranch;
