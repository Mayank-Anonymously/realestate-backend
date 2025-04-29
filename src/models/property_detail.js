const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  address: String,
  image: String,
  rent: Number,
  deposit: Number,
  availability: String,
  lease_term: String,
  utilities_included: [String],
  application_fee: Number,
  background_check_required: Boolean,
  unit: {
    bedrooms: Number,
    bathrooms: Number,
    type: String,
    sizeSqFt: Number,
    year_built: Number
  },
  contact: {
    name: String,
    role: String,
    phone: String,
    language: String
  },
  features: {
    pets: {
      allowed: Boolean,
      policy: String
    },
    smoking_allowed: Boolean,
    trash_service: Boolean,
    school_district: String,
    flooring: [String],
    other_features: [String]
  },
  appliances: {
    microwave: Boolean,
    refrigerator: String,
    washer: String,
    dryer: String,
    laundry_facility: String,
    other_appliances: [String]
  },
  utilities: {
    airConditioner: String,
    heating: String,
    water_heater: String,
    internet_ready: Boolean,
    cable_ready: Boolean
  },
  specialized_info: {
    listing_id: String,
    tax_credit_property: Boolean,
    seniors_only: Boolean
  },
  accessibility: {
    counters: String,
    door_handles: String,
    kitchen: String,
    bathroom: String,
    door_width: String,
    entry: {
      location: String,
      steps: Boolean,
      features: [String]
    },
    elevator: Boolean,
    multi_story_unit: Boolean
  },
  safety: {
    lead_safety: String,
    fire_safety: [String]
  },
  parkingAndEntry: {
    type: String,
    spaces_allotted: Number,
    in_front_of_entrance: Boolean
  },
  nearbyServices: {
    busStop: String,
    shopping: String,
    groceryShopping: String,
    senior_center: String,
    hospital: String,
    pharmacy: String,
    additional: [String]
  },
  legal_notice: String
});

module.exports = mongoose.model('Property', propertySchema);
