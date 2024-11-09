import axios from "axios";
import { create } from "zustand";

const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    const res = await axios.get("/api/features");
    if (res.status === 200) {
      set({ FeatureList: res.data["data"] });
    }
  },
}));

export default FeatureStore;
