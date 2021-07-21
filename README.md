# Pickout
DEMO: https://pickout-service.surge.sh/

Pickout is a full stack web app built using React, NodeJS, Express, and PostgreSQL. The web apps goal is to have users who are indecisive of what foods to eat when users have assumed of every single possiblity. The web API is hosted on Heroku and Front End Repository on GitHub.

# Preview 
<img src="pickout-images/Screen Shot 2021-07-21 at 11.29.47 AM.png">

# Food chosen for you (variety cuisines) when you use Pickout

<img src="pickout-images/Screen Shot 2021-07-21 at 1.09.02 PM.png">

# Project creation plan

Database Models

> `User`

- Id (primary key)
- username (required, unique)
- password (required)
- first_name (optional)
- last_name (optional)
- email (required) `very important to email market for future products`
- timestamp (when the user was created)

> `Address`

- user_id (PK/FK)
- street_address
- address_number
- city
- state
- zip_code
- country

> `Signature Meal`

- Id (primary_key)
- price 

> `Pair Meal`

- Id (primary_key)
- price 


> `Purchases`

- Id (primary key)
- product_id (required, API)
- user_id (ForeignKey required)
- purchased_on date/time

# API

- Spoontacular API (for products)
- React Stripe API (for payment)

# Potential Issues with API

> Possible issues include:

- Exceeding the limits of the API token quota
- Security on payments
- Authorization

# Sensitive Information

- Users will need to log in. Therefore, passwords/information will need to be secured.
- Confirming purchases.

# App functionality

- Users can register, login, edit account, and logout.
- Users have to login to purchase anything.
- Users are able to add/remove wine optionally (extra charge for wine).

# User workflow

1. Place the product for the user to see right away to create interest and have a call to action (future feature ex: 20% discount off right now (set a timer for discount?).
2. Once signed up, can purchase the product/service.
3. Add to cart. Proceed to checkout (users must shipping address in order to continue purchase)
4. `optional` Have a Modal to show other products in the future before finalizing a sale to create potential add on to cart?
5. Sale -> send email

# CRUD features

- Create account
- Make purchases
- Update account/purchases
- Delete account/purchases

# Stretch Goals

- Email promotions
- Add on features with Meals
- Other payment method
- Discount codes
