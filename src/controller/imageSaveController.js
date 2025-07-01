const housingUnitSchema = require("../models/housingUnits");

const saveIMage = async (req, res) => {
  try {
    // Access uploaded file info
    const file = req.file;
    const { unit_id } = req.params;
    const findUnit = await housingUnitSchema.find({ id: unit_id });
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    if (!findUnit) {
      return res.status(400).json({ message: "No unit exist" });
    }
    // Access other form data (unit_id, source_url, image_url)
    const findAndUpdate = await housingUnitSchema.updateMany(
      { id: unit_id },
      { $set: { image: file.filename } },
      { new: true }
    );
    // TODO: Save info to DB or further processing...
    return res.status(200).json({
      message: "Image uploaded successfully",
      filename: findAndUpdate,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveIMage };
