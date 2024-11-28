import axios from "axios";
import { create } from "zustand";

const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    const res = await axios.get("/api/features");
    if (res.data.status === "Successful") {
      set({ FeatureList: res.data["data"] });
    }
  },

  LegalDataList: null,
  LegalDataRequest: async (type) => {
    set({ LegalDataList: null });
    const res = await axios.get(`/api/legals/${type}`);
    if (res.data.status === "Successful") {
      set({ LegalDataList: res.data["data"] });
    }
  },
}));

export default FeatureStore;
