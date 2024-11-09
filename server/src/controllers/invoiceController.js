export const createInvoice = async (req, res) => {
  try {
    return res.json({ status: "Successful", message: "Successful" });
  } catch (err) {
    return res.json({ status: "Failed", message: err.toString() });
  }
};

export const readInvoiceList = async (req, res) => {
  try {
    return res.json({ status: "Successful", message: "Successful" });
  } catch (err) {
    return res.json({ status: "Failed", message: err.toString() });
  }
};

export const readInvoiceDetails = async (req, res) => {
  try {
    return res.json({ status: "Successful", message: "Successful" });
  } catch (err) {
    return res.json({ status: "Failed", message: err.toString() });
  }
};
