const mongoose = require("mongoose");

const housingUnitSchema = new mongoose.Schema(
  {
    id: String,
    detail_url: String,
    title: String,
    address: String,
    description: String,
    contact: String,
    price: String,
    image: String,
    bedrooms: String,
    bathrooms: String,
    type: String,
    details: {
      Front: String,
      list_1: [String],
      list_2: [String],
      list_3: [String],

      table_4: {
        Contact: String,
        Phone: String,
        "Phone (Other)": String,
        Email: String,
        Address: String,
      },

      table_5: {
        Pets: String,
        Smoking: String,
        "Trash Service": String,
        "Pest Control": String,
        "Address-Based School District": String,
        "School Information": String,
        Flooring: String,
        "Other Features": String,
      },

      table_6: {
        Microwave: String,
        "Refrigerator / Freezer": String,
        "Clothes Washer": String,
        "Clothes Dryer": String,
        "Laundry Room / Facility": String,
      },

      table_7: {
        "Air Conditioner": String,
        "Heating Type": String,
        "Water Heater": String,
        "Cable Ready": String,
      },

      table_8: {
        "Listing ID": String,
        "Owner is interested in working with Supportive Housing Connection Tenants":
          String,
        "Tax Credit Property": String,
        "Seniors Only": String,
      },

      table_9: {
        "Counter/Vanity": String,
        "Door/Faucet Handles": String,
      },

      table_10: {
        Kitchen: String,
        "Non-digital Kitchen Appliances": String,
        "Front Controls on Stove/Cook-top": String,
        Bathroom: String,
        "Toilet Grab Bars or Reinforcements": String,
        "Bath Grab Bars or Reinforcements": String,
        "Roll-in Shower": String,
        "Walk-in Shower": String,
        "Accessible Height Toilet": String,
        "'T' Turn or 60\" Turning Circle in Bathrooms": String,
      },

      table_11: { "Non-digital Kitchen Appliances": String },
      table_12: { "Front Controls on Stove/Cook-top": String },
      table_13: { "Toilet Grab Bars or Reinforcements": String },
      table_14: { "Bath Grab Bars or Reinforcements": String },
      table_15: { "Roll-in Shower": String },
      table_16: { "Walk-in Shower": String },
      table_17: { "Accessible Height Toilet": String },
      table_18: { "'T' Turn or 60\" Turning Circle in Bathrooms": String },

      table_19: {
        "New Jersey Lead-safety Level": String,
        "Learn More": String,
        "Fire Safety": String,
      },

      table_20: {
        "Parking Type": String,
        "Allotted Parking Spaces": String,
        "Parking in Front of Entrance": String,
        "Additional Parking Comments": String,
        "Entry Location": String,
        "Unit Entry": String,
        "Unit Minimum Door Width": String,
        "Other Entry Options": String,
      },

      table_21: {
        "Shopping Venues": String,
        "Also Nearby": String,
      },

      table_22: {
        "Qualifiers For Sliding Scale or Income Restriction": String,
      },

      text_23: String,
      text_24: String,
      text_25: String,
      text_26: String,
      text_27: String,
      text_28: String,
      text_29: String,
      text_30: String,
      text_31: String,
      text_32: String,
      text_33: String,
      text_34: String,
      text_35: String,
      text_36: String,
      text_37: String,
      text_38: String,
      text_39: String,
      text_40: String,
      text_41: String,
      text_42: String,
      text_43: String,
      text_44: String,
      text_45: String,
      text_46: String,
      text_47: String,
      text_48: String,
      text_49: String,
      text_50: String,
      text_51: String,
      text_52: String,
      text_53: String,
      text_54: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("allproperties", housingUnitSchema);
