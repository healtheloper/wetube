import express from "express";
import routes from "../routes";
import {upload, home} from "../controllers/videoContoller"

const videoRouter = express.Router();

videoRouter.get(routes.home, home);
videoRouter.get(routes.upload, upload);

export default videoRouter;