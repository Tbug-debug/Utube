import express from "express";
import { deleteVideo, getEditVideo, getUpload,  postEidtVideo,  postUpload,  videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

export const videoRouter = express.Router();


// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);


// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.post(routes.editVideo(), postEidtVideo)

export default videoRouter;