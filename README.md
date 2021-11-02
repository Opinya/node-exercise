# node-full-stack-exercise
Opinya Full Stack web development exercise

In this exercise you will build a simple web application using node js and express. The app will serve static html through SSR (server side rendering) using the jade template engine.

    • The app should have data models for product, line item, as defined in the file below
        ◦ You can use mongoose or vanilla classes to define the models
    • The app will load data from a JSON file data.json into memory using the models defined
    • The app will serve 3 endpoints
    • GET /items
        ◦ Will return an html page with a list of grocery items based on the design provided in the file app.pdf
        ◦ The items in the list will be only items with a “pending” status
        ◦ Items with the same product_id should be grouped together
        ◦ Click on V will send a POST request to /items/:id with the id of the item that was clicked and the amount the was gathered as a parameter (the number listed)
        ◦ Click on X will display the out of stock/can’t find it dialog buttons
            ▪ Click on can’t find it will send a POST request to /items/:id with the id of the item that was clicked and amount of 0 as a parameter
            ▪ Click on out of stock will send a DELETE request to /items/:id with the id of the item and no parameters
        ◦ Click on the “break” drop down item will POST to /break/:id with the employee id
        ◦ Click on the “Missing cart” drop down will GET to /cart/:employee_id
        ◦ Click on the “Cart ready” button will POST to /cart/:id with the cart’s id
    • POST /items/:id
        ◦ Update the in-memory model of the corresponding item with the amount that was gathered and update the item’s status accordingly
        ◦ Reload the items page
    • DELETE /items/:id
        ◦ Update the in-memory model of the corresponding item with the item’s status accordingly
        ◦ Reload the items page
    • POST /cart/:id
        ◦ Log to the console “Cart <cart_id> Ready”
    • GET /cart/:id
        ◦ Log to the console “Cart Required for employee <employee_id>”
    • POST /break/:id
        ◦ Will respond with an HTML page with a header “You are now on break”



Models

Product
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

Line Item
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
    • status
        ◦ string
            ▪ pending
            ▪ filled
            ▪ missing
