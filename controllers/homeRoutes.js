const router = require("express").Router();
const { Project, User, Sub } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("hit")
    if (req.session.user_id) {
      const subData = await Sub.findAll({
        where: {
          user_id: req.session.user_id
        },
        raw: true
      })
      console.log(subData)
      res.render("homepage", {
        //   projects,
        subData,
        logged_in: req.session.logged_in,
      });
      return
    }
    
    res.render("homepage", {
      //   projects,
      logged_in: false,
    });


  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render("login", {
      ...project,
      logged_in: req.session.logged_in,
      layout: "loginmain",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("loginmain");
});

router.get("/subscribe", withAuth, (req, res) => {
  res.render("customsubbox", {
    logged_in: true,
  });
});

module.exports = router;