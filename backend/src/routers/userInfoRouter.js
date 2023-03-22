import express from "express";
import { createUserInfo, deleteUserInfo, getUserInfoById, getUsersInfo, updateUserInfo } from "../services/userInfoService";


const usersInfoRouter = express.Router();

usersInfoRouter.get("/", async (req, res) => {
  res.json(await getUsersInfo());
});

usersInfoRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUserInfoById(id));
});

usersInfoRouter.post("/", async (req, res) => {
  const userInfo = req.body;
  res.json(await createUserInfo(userInfo));
});

usersInfoRouter.put("/:id", async (req, res) => {
  const { id } = req.params.id;
  const userInfo = req.body;
  res.json(await updateUserInfo(id, userInfo));
});

usersInfoRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUserInfo(id));
});

export default usersInfoRouter;