const DB_URI = (process.env.NODE_ENV === "test") 
? "postgresql:///Pickout_test" 
: "postgresql:///Pickout";

const PORT = +process.env.PORT || 5001

const SECRET_KEY = process.env.SECRET_KEY || "our_secret_key"

const BCRYPT_WORK_FACTOR = 12;

const SQUARE_ACCESS_TOKEN = "EAAAEKtsRZ3co5jeY_9BlckvYbF5Y2iwG4uKu5vVQ5rFXvxrkPjAW7nuVULbcFk7"

module.exports = {
    DB_URI,
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    SQUARE_ACCESS_TOKEN
}