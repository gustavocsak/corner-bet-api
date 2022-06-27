import { Prediction } from "../../../db/models/prediction";
import { Result } from "../../../db/models/result";

const getResults = (req, res, next) => {
    Result.find({})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
} 

const getPredictions = (req, res, next) => {
    Prediction.find({})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
}

export { getResults, getPredictions }