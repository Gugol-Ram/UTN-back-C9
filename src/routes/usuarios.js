const express = require ("express")
const router = express.Router()

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/userController");

const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:users"), getAllUsers);

router.get("/:id", requiredScopes("read:users"), getUserById);

router.post("/", requiredScopes("write:users"), createUser);

router.put("/:id", requiredScopes("write:users"), updateUser);

router.delete("/:id", requiredScopes("write:users"), deleteUser);

module.exports = router
