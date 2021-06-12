# Pickout

# Capstone 2 (Food/Cuisine Website)

Goal: First website to purchase random food/cuisine with crypto currency.

# Website Goal

Choose food for clients who are indecisive on picking food. Purchases are only made with crypto currency.

# User Demographics

_User Demographics_

- Users who are hungry and have no clue on what to eat.

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

> `Pair Meal`

- Id (primary_key)

> `Purchases`

- Id (primary key)
- product_id (required, API)
- user_id (ForeignKey required)
- purchased_on date/time

# API

- Spoontacular API
- Crypto payment API...

# Potential Issues with API

> Possible issues include:

- Exceeding the limits of the API token quota
- Security on payments
- There may be other issues I haven't foreseen

# Sensitive Information

- Users will need to log in. Therefore, passwords/information will need to be secured.
- Confirming purchases.

# App functionality

- Users can register, login, and logout.
- Users have to login to purchase anything.
- Users are able to see the Deal Of The Day.

# User workflow

1. Place the product for the user to see right away to create interest and have a call to action (ex: 20% discount off right now (set a timer for discount?).
2. Once signed up, can purchase the product/service.
3. Add to cart. (Set up to have a min/max add on to cart)
4. `optional` Have a Modal to show other products in the future before finalizing a sale to create potential add on to cart?
5. Sale -> send email

# CRUD features

- Create account
- Make purchases
- Update account/purchases
- Delete account/purchases

# Stretch Goals

- Once the email has been captured. Optimize email marketing.
- Sell other products for crypto currency
