# node-full-stack-exercise
Opinya Full Stack web development exercise

In this exercise you will build a simple web application using node js and express. The app will serve html via SSR (server side rendering) using the jade template engine.

    • The app should have data models for product, line item, as defined below
        ◦ You can use mongoose or vanilla classes to define the models
    • The app will load data from a JSON file (resources/data.json) into memory using the models defined
    • The app will serve the following endpoints
    • GET /items
        ◦ Will return an html page with a list of items based on the design provided in the mock file (resources/app.pdf)
        ◦ The items in the list will be only items with a “pending” status
        ◦ Items with the same product_id should be grouped together
        ◦ Click on V will send a POST request to /items/:id with the id of the item that was clicked and the amount the was gathered as a parameter (the number listed)
        ◦ Click on X will :
            ▪ Click on out of stock will send a DELETE request to /items/:id with the id of the item and no parameters
    • PUT /items/:id
        ◦ Update the model of the corresponding item with the amount that was gathered and update the item’s status accordingly, and set the item's cart id to current cart
        ◦ Reload the items page
    • DELETE /items/:id
        ◦ Update the model of the corresponding item with the item’s status accordingly
        ◦ Reload the items page
    • POST /carts
        ◦ Generate a new cart in active status and return in
    • PUT /carts/:id
        ◦ change the cart status to filled, generate a new cart and set it as working cart

## Models

### Product
    • id
        ◦ number
    • section
        ◦ string
    • type
        ◦ string
    • name
        ◦ string
    • price
        ◦ number
    • image_path
        ◦ string
    • unit of measure
        ◦ string

### Line Item
    • id
        ◦ number
    • order_id
        ◦ number
    • product_id
        ◦ number
    • quantity
        ◦ number
    • filled_quantity
        ◦ number
    • cart_id
        ◦ number
    • status
        ◦ string
            ▪ pending
            ▪ filled
            ▪ missing


### Cart
    • id
        ◦ number
    • status
        ◦ string
            ▪ active
            ▪ filled
