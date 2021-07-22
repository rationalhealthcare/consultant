/* 
    Verifies auth tokens on each request. Called from x.routes modules.
*/
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

exports.verifyFirebaseToken = async function (req, res, next) {
  const me = "verifyFirebaseToken()";
  const idToken = req.header("Authorization").split(" ")[1];
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
    })
    .catch((error) => {
      console.log(error);
      res.status(403).send(error.message);
    });

  next();
};
