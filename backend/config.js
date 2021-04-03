const DB_URI = (process.env.NODE_ENV === "test") 
? "postgresql:///BuyMe_test" 
: "postgresql:///BuyMe";

const PORT = +process.env.PORT || 5001

const SECRET_KEY = process.env.SECRET_KEY || "our_secret_key"

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}