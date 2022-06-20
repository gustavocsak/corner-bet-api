import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PredictionSchema = new Schema({
    home_team: { type: String, maxlength: 50, required: true},
    away_team: { type: String, maxlength: 50, required: true},
    home_score: { type: Number, required: true },
    away_score: { type: Number, required: true },
    home_corner: { type: Number, required: true },
    away_corner: { type: Number, required: true },
    home_attack: { type: Number, required: true },
    away_attack: { type: Number, required: true },
    home_shot: { type: Number, required: true },
    away_shot: { type: Number, required: true },
    match_id: { type: Number, required: true },
    current_minutes: { type: Number, required: true },
    half_finished: { type: Boolean, required: true },
    corner_sum: { type: Number, required: true }
})

export { PredictionSchema };
export let Prediction = mongoose.model("Prediction", PredictionSchema);