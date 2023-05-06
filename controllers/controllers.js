// controllers/index.js

exports.getUsers = (req, res) => {
  // implementation for getting all users
};

exports.getUserById = (req, res) => {
  // implementation for getting a single user by id
  
};

exports.createUser = (req, res) => {
  // implementation for creating a new user
  let { name, email, password, dateOfBirth } = req.body;
  name = name.trim();
  email = email.trim();
  password = password.trim();
  dateOfBirth = dateOfBirth.trim();

  if (name == "" || email == "" || password == "" || dateOfBirth == "") {
    res.json({
      status: "FAILED",
      message: "empty input fields",
    });
  } else if (!/^[a-zA-Z ]*$/.test(name)) {
    res.json({
      status: "FAILED",
      message: "invalid name entered",
    });
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    res.json({
      status: "FAILED",
      message: "invalid email entered",
    });
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;?/<>,.]).{8}/.test(
      password
    )
  ) {
    res.json({
      status: "FAILED",
      message:
        "password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) {
    res.json({
      status: "FAILED",
      message:
        "invalid date of birth entered. Please enter the date of birth in the format YYYY-MM-DD.",
    });
  } else {
    User.find({ email })
      .then((result) => {
        if (result.length) {
          res.json({
            status: "FAILED",
            message: "user already exists",
          });
        } else {
          // try create new user

          //password hashing
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newUser = new User({
                name,
                email,
                password: hashedPassword,
                dateOfBirth,
              });
              newUser
                .save()
                .then((result) => {
                  res.json({
                    status: "SUCCESS",
                    message: "User successfully created",
                    data: result,
                  });
                })
                .catch((err) => {
                  res.json({
                    status: "FAILED",
                    message: "Errr",
                  });
                });
            })
            .catch((err) => {
              res.json({
                status: "FAILED",
                message: "Errr",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "FAILED",
          message: "an error has occured",
        });
      });
  }
};

exports.updateUser = (req, res) => {
  // implementation for updating a user by id
};

exports.deleteUser = (req, res) => {
  // implementation for deleting a user by id
};

exports.getProducts = (req, res) => {
  // implementation for getting all products
};

exports.getProductById = (req, res) => {
  // implementation for getting a single product by id
};

exports.createProduct = (req, res) => {
  // implementation for creating a new product
};

exports.updateProduct = (req, res) => {
  // implementation for updating a product by id
};

exports.deleteProduct = (req, res) => {
  // implementation for deleting a product by id
};

exports.getOrders = (req, res) => {
  // implementation for getting all orders
};

exports.getOrderById = (req, res) => {
  // implementation for getting a single order by id
};

exports.createOrder = (req, res) => {
  // implementation for creating a new order
};

exports.updateOrder = (req, res) => {
  // implementation for updating an order by id
};

exports.deleteOrder = (req, res) => {
  // implementation for deleting an order by id
};
