# PadulJualan E-Commerce Server Setup 👍🏼🤸🏽‍♂️

## Commands

### Contributing

- First run `npm install` to get all packages.
- Then run `npm run gen:dev` to generate database for development.
- Add / Edit / Remove stuffs.
- To lint ( using [Eslint! 🧾](https://github.com/eslint/eslint) ) run `npm run lint`.
- Auto hooks is installed ( using [Husky! 🐶](https://github.com/typicode/husky) ), before commiting and push  
  `npm` will lint and fix your code.

## Features ✨✨✨

### Main Configurations

- Servers created using Express.js
- PostgreSQL database built with Sequelize ORM
- Simple Routes and Error Handling

### Deploy Link

- https://paduljualan-user.herokuapp.com

## RESTful API 🤩

### GET 💵

- **BASE**/_items_

  - _Response_ :

    ```javascript
    {
      message: 'Successfully getting all products!',
      items: [<array_of_objects>]
    }
    ```

  - _Errors_ :

    ```javascript
    // Forbidden 403 ( Not an Admin || Authentication )

    {
      message: 'Token not found!';
    }
    ```

- **BASE**/_cart_

  - _Response_ :

    ```javascript
    {
      message: 'Successfully getting shopping cart!',
      cart: [<array_of_objects>]
    }
    ```

  - _Errors_ :

    ```javascript
    // Forbidden 403 ( Not an Admin || Authentication )

    {
      message: 'Token not found!';
    }
    ```

### POST 📝

- **BASE**/_register_

  - _Request_ :

    ```javascript
    {
      email: <string_of_email>,
      username: <string_of_username>,
      password: <string_of_password>,
      role: 'user' // Will be given automatically
    }
    ```

  - _Response_ :

    ```javascript
    {
      message: 'Successfully registered new user!',
      success: 1
    }
    ```

  - _Errors_ :

    ```javascript
      // Bad Request 400 (Validation)

    {
      message: <validation_message_based_on_request_properties>
    }
    ```

- **BASE**/_login_

  - _Request_ :

    ```javascript
    {
      email: <string_of_email>,
      password: <string_of_password>,
    }
    ```

  - _Response_ :

    ```javascript
    {
      message: 'Successfully logged in!',
      token: <string_of_token>,
    }
    ```

  - _Errors_ :

    ```javascript
      // Bad Request 400 (Validation)

    {
      message: <validation_message_based_on_request_properties>
    }

      // Forbidden 403 (Wrong Token || Authorization)

    {
      message: "Token not found!"
    }
    ```

- **BASE**/_buy_/_:id_

  - _Request_ :

    ```javascript
    {
      id: <ProductId_to_buy>
      qty: <quantity_of_items>,
    }
    ```

  - _Response_ :

    ```javascript
    {
      message: 'Successfully bought item!',
      success: 1
      // Stock in database will decrease
    }
    ```

  - _Errors_ :

    ```javascript
    // Forbidden 403 (Wrong Token || Authorization)

    {
      message: 'Token not found!';
    }
    ```
