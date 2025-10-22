## NextJourney
- A full-stack travel web app built with Node.js, Express, and MongoDB
- Created as a learning/portfolio project.

## Tech Stack

#Frontend:

- HTML
- CSS
- JavaScript
- Bootstrap
- Font Awesome

#Backend:

- Node.js
- Express.js
  
#Database:

- MongoDB (Mongoose ORM)
  
#Other Tools & Libraries:

- EJS (Templating)
- express-session for authentication
- dotenv for environment variables
- connect-Mongo
- passport | passport-local | passport-local-mongoose | passport-session
- cookie-parser
- connect-flash
- Express Router
- multer


## Features
- | User Auth | Sign up, sign in, secure routes, session or JWT-based auth |

- | Destination Listings | Create, read, update, and delete travel destinations |

- | Reviews / Ratings | Users can leave reviews on destinations |

- | Map Integration | Show destination locations on Google Maps |

- | Responsive UI | Works on desktop and mobile views |

- | Security Middleware | Input validation, authentication checks, error handling |


## Usage / Screenshots

#Accessing the Listings Page

- Navigate to the Listings Page
  
  Open your browser and go to https://nextjourney.onrender.com/listings

  #Homepage

  <img width="1898" height="883" alt="Screenshot 2025-10-13 150237" src="https://github.com/user-attachments/assets/fe556fe8-4793-4383-a8c5-6caf7b804f2e" />

   #Search-Bar:- You can search for your exact listing.

   #Browse Accommodation Categories:- Filter your listings using it.

- View Individual Listings

  Clicking on a listing redirects you to its detailed page.

  <img width="1057" height="823" alt="Screenshot 2025-10-13 150339" src="https://github.com/user-attachments/assets/f782144d-079b-4c1f-b400-a7d9f06c3d0b" />

- Adding a New Listing

  To add a new listing, you must be signed in. Use the "Sign Up" or "Sign In" buttons at the top-right corner to create an account or access your existing one.

  #Sign Up page

  <img width="1919" height="897" alt="Screenshot 2025-10-16 171544" src="https://github.com/user-attachments/assets/47d7ff34-5cc8-47cc-a88e-b7858cd43438" />

  #Sign-in page

  <img width="1919" height="892" alt="Screenshot 2025-10-16 171705" src="https://github.com/user-attachments/assets/4fd0d718-8de5-4951-b10c-3814c6f27c50" />

  #Add new listing page

  <img width="1919" height="878" alt="Screenshot 2025-10-13 150627" src="https://github.com/user-attachments/assets/bc2df2bf-f061-4786-8f87-01f1cee588b5" />
  <img width="1919" height="899" alt="Screenshot 2025-10-13 161245" src="https://github.com/user-attachments/assets/81dcd99c-6aa5-4948-aacb-545dcbd161cb" />


- Edit and Delete your listing

   After creating a new listing, you have access to edit or delete this listing.

    #Edit page

   <img width="1903" height="878" alt="Screenshot 2025-10-13 160819" src="https://github.com/user-attachments/assets/b2c12dec-6b3e-46ae-ad10-abb097ba8e99" />
   <img width="1919" height="882" alt="Screenshot 2025-10-13 160858" src="https://github.com/user-attachments/assets/5351ab14-0416-4885-b5e7-e6f46c449da1" />

    If you sign in, then on the show page you will see a delete button and an edit button

    <img width="1919" height="882" alt="Screenshot 2025-10-13 160928" src="https://github.com/user-attachments/assets/e519965e-54eb-46c9-8c29-1d10c8bae825" />


- Adding and Deleting reviews

  When you sign in, you have access to add or delete reviews.
  
  You can delete only those reviews that you created.

  <img width="1919" height="886" alt="Screenshot 2025-10-13 150718" src="https://github.com/user-attachments/assets/44276ef3-35f9-41f0-9e6d-52d4eb9192fe" />

- Locate listing

  Using Google Maps, you can locate a listing.

  <img width="1919" height="894" alt="Screenshot 2025-10-13 150751" src="https://github.com/user-attachments/assets/0c427f3f-6d22-4518-ad6d-dd9745004873" />

  
## Prerequisites

#Make sure you have the following installed:

- Node.js (v14+)
- npm
- MongoDB (local or Atlas)

  
## Installation

#Follow these steps to set up and run the project on your local machine 👇

#📥 Clone the repository

git clone https://github.com/Gaurv82013/NextJourney.git

cd NextJourney

#📦 Install dependencies


npm install

## ⚙️ Configure environment variables Create a .env file in the project’s root directory and add the following:

- PORT=8080

- CLOUD_NAME = your Cloudinary cloud name

- API_KEY = your Cloudinary API key

- API_SECRET = your Cloudinary API secret

- ATLASDB_URL = your MongoDB Atlas connection string

- SECRET = your session secret key

🗄️ Start MongoDB

If using local MongoDB, make sure your MongoDB server is running:

- mongod

## 🚀 Run the application

#To start the app in development mode with auto-restart:

- nodemon app.js

#Or to start normally (without nodemon):

- node app.js

## 🌐 Open in browser Visit:

- http://localhost:8080/listings

You should now see your NextJourney travel website running locally 🎉

## Folder Structure

NextJourney/

├── controllers/    # Handles logic for routes (e.g. listings, users, reviews)

├── init/    # Initialization scripts (e.g. seeding database or setup)

├── models/   # MongoDB schemas and models (using Mongoose)

├── public/   # Static files like CSS, JS, and images

├── routes/   # Express route definitions

├── utils/   # Utility/helper functions

├── views/   # EJS templates for rendering frontend pages

├── app.js   # Main application entry point

├── cloudConfig.js   # Cloudinary configuration for image storage

├── middleware.js   # Custom middleware (e.g. authentication, validation)

├── schema.js   # Validation schemas (e.g. Joi schemas) │

├── package.json   # Project dependencies and scripts

├── package-lock.json   # Locked dependency versions

├── .gitignore   # Files and folders to ignore in Git

└── README.md   # Project documentation



