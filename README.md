# Pickout
DEMO: https://pickout-service.surge.sh/

Pickout is a full stack web app built using React, NodeJS, Express, and PostgreSQL. The web apps goal is to have users who are indecisive of what foods to eat when users have assumed of every single possibility. The web API is hosted on Heroku and Front End Repository on GitHub.

# Preview 
<img src="pickout-images/Screen Shot 2021-07-21 at 11.29.47 AM.png">

# Food chosen for you (variety cuisines) when you use Pickout

<img src="pickout-images/Screen Shot 2021-07-21 at 1.09.02 PM.png">

# Project creation plan

Database Models

<img src="pickout-images/Screen Shot 2021-07-22 at 10.42.01 PM.png">

# API

- Pickout API (for authorization/authentication/meal purchases)
- Spoontacular API (for products)
- React Stripe API (for payment)
> If you want to make a mock payment use: `4242-4242-4242-4242 444 90001` in credit card checkout section.

# User workflow

1. Place the product for the user to see right away to create interest and have a call to action (future feature ex: 20% discount off right now (set a timer for discount?).
2. Once signed up, can purchase the product/service.
3. Add to cart. Proceed to checkout (users must shipping address in order to continue purchase)
4. `optional` Have a Modal to show other products in the future before finalizing a sale to create potential add on to cart?
5. Sale -> send email

# Usage
> <b>Endpoints for users:</b>

- GET `/users/{id}` - get user by ID
- POST `/auth/register` - register a new user
- POST `/auth/login` - login existing user
- PATCH `/users/{id}` - update a user
- DELETE `/users/{id}` - delete a user

> <b>Endpoints for users address:</b>
- GET `/address/{id}` - get users address by user ID
- PATCH `/address/{id}` - update a users address by users ID

> <b>Endpoints for purchases:</b>
- POST `/meals/signature/{:mealId}/purchase/{:userId}/` - posts a signature-meal purchase based on mealID *(pre-existing)* and user id
- POST `/meals/pair-meal/:mealId/:pairId/purchase/:userId'/` -  posts a paired meal purchase based on mealID and pairID *(both pre-existing)* and user id

# CRUD features

- Create account
- Make purchases
- Update account/purchases
- Delete account/purchases

# Stretch Goals

- [ ] Email promotions
- [ ] Add on features with Meals
- [ ] Other payment method
- [ ] Discount codes
