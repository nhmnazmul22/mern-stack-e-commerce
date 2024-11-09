import FeaturesModel from "./../model/featuresModel.js";

// Function to get all features
export const FeaturesListService = async () => {
  try {
    const data = await FeaturesModel.find({});
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", data: err.toString() };
  }
};
