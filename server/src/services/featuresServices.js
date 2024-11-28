import FeaturesModel from "./../model/featuresModel.js";
import LegalModel from "./../model/legalsModel.js";

// Function to get all features
export const FeaturesListService = async () => {
  try {
    const data = await FeaturesModel.find({});
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};

// Function get All legals Details
export const LegalsDetailsService = async (req) => {
  try {
    const type = req.params.type;
    const data = await LegalModel.findOne({ type: type });
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
