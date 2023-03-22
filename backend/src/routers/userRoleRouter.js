import express from "express";
import {
  createUserRole,
  deleteUserRole,
  getUserRoleById,
  getUsersRole,
  updateUserRole,
} from "../services/usersService";

const usersRolesRouter = express.Router();

usersRolesRouter.get("/", async (req, res) => {
  res.json(await getUsersRole());
});

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUserRoleById(id));
});

usersRolesRouter.post("/", async (req, res) => {
  const userRole = req.body;
  res.json(await createUserRole(userRole));
});

usersRolesRouter.put("/:id", async (req, res) => {
  const { id } = req.params.id;
  const userRole = req.body;
  res.json(await updateUserRole(id, userRole));
});

usersRolesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUserRole(id));
});

export default usersRolesRouter;