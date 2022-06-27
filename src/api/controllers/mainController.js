import { Prediction } from "../../../db/models/prediction.js";
import { Result } from "../../../db/models/result.js";

const controllers = {}

controllers.getResults = (req, res, next) => {
    Result.find({})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
} 

controllers.getPredictions = (req, res, next) => {
    Prediction.find({})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
}

export default controllers