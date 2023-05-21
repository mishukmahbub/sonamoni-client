# Toy Car Website

This is a toy car website built using React, Tailwind CSS, Node.js, Express, and MongoDB. The website allows users to browse and add toy cars, read blogs, and interact with various features.

# Live Website Link: https://toystore-cfebe.web.app/

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Contributors](#contributors)
- [License](#license)

## Features

1. **Navbar and Footer**
   - The navbar is displayed on all pages except the 404 page and includes the website logo, name, navigation links, user profile picture, and login button.
   - The footer contains important information such as contact details, social media links, and copyright.

2. **Login & Registration Systems**
   - The website provides a registration page where users can sign up with their name, email, password, and photo URL.
   - The login page allows users to log in using their email and password or through Google Sign-in.

3. **Home Page**
   - The home page features a banner section with attractive sliders or banners.
   - A gallery section showcases relevant toy car pictures to make it visually appealing.
   - The "Shop by category" section uses tabs or custom CSS to display sub-categories of toy cars, each with a minimum of two toys. Each toy includes information such as picture, name, price, rating, and a "View Details" button.
   - Additional sections can be added to the home page to provide more engaging content.

4. **Blogs Page**
   - The blogs page features informative articles on various topics related to toy cars.
   - The page includes answers to questions such as "What is an access token and refresh token?" and "Compare SQL and NoSQL databases?".

5. **All Toys Page**
   - The all toys page displays toy cars added by all users in a tabular format.
   - Each row shows the seller (if available), toy name, sub-category, price, available quantity, and a "View Details" button.
   - Users can search for toys based on the toy name.
   - Clicking the "View Details" button without logging in redirects the user to the login page.

6. **Single Toy Details Page**
   - After logging in and clicking the "View Details" button on the all toys page, users are redirected to the single toy details page.
   - The page displays detailed information about the toy, including the picture, toy name, seller name, seller email, price, rating, available quantity, and description.
   - Optionally, the details can be displayed in a modal.

7. **Add A Toy Page**
   - The add a toy page allows logged-in users to add new toy cars.
   - The form includes fields for the toy's picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and description.

8. **My Toys Page**
   - The my toys page displays all the toy cars added by the logged-in user.
   - Each row in the table includes information about the toy and buttons for updating and deleting the toy.
   - Clicking the update button allows users to modify the toy's price, quantity, and description.
   - Deleting a toy prompts for confirmation before removing it from the list.

9. **404 Page**
   - The 404 page is displayed when a user navigates to a non-existent page.
   - It includes an interesting image or GIF and a "Back to Home" button to redirect users to the home page.



## Technologies

- React
- Tailwind CSS
- Node.js
- Express
- MongoDB

## Contributors

- Mishuk Mahbub

## License

All rights reserved by Mishuk Mahbub


