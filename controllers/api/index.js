const router = require("express").Router();
const userRoutes = require("./userRoutes");
const subBoxRoutes = require("./subBoxRoutes");

router.use("/users", userRoutes);
router.use("/login", userRoutes);
router.use("/logout", userRoutes);
router.use("/signup", userRoutes);
router.use("/sub", subBoxRoutes)

module.exports = router;
