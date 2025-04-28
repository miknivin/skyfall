import Resort from "../models/Resort.js";

export const getAllResorts = async (req, res) => {
  try {
    const resorts = await Resort.find({}).lean();

    if (!resorts || resorts.length === 0) {
      return res.status(404).json({ message: "No resorts found" });
    }

    res.status(200).json({
      message: "Resorts retrieved successfully",
      data: resorts,
    });
  } catch (error) {
    console.error("Error fetching resorts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getResortById = async (req, res) => {
    try {
      const { id } = req.params;
      const resort = await Resort.findById(id).lean();
  
      if (!resort) {
        return res.status(404).json({ message: "Resort not found" });
      }
  
      res.status(200).json({
        message: "Resort retrieved successfully",
        data: resort,
      });
    } catch (error) {
      console.error("Error fetching resort by ID:", error);
      res.status(400).json({ message: "Invalid ID or server error" });
    }
  };