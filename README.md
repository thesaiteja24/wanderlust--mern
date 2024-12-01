# Wanderlust

Wanderlust is a **MERN (MongoDB, Express, Node.js, EJS)** application that enables users to browse, create, edit, and delete vacation rental property listings. Whether you're seeking a beachfront cottage or a luxurious penthouse, Wanderlust has it all.

---

## 🚀 Features

- **User Authentication**: Secure user registration and login.  
- **Property Listings**: View detailed property listings with images, descriptions, and pricing.  
- **Manage Listings**: Create, update, and delete your own property listings.  
- **User Reviews**: Leave and view reviews for properties.  
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## 📂 Project Structure

```plaintext
wanderlust-mern/
│
├── README.md
├── cloudConfig.js       # Cloud-related configurations
├── init/
│   ├── index.js         # Database initialization script
│   └── data.js          # Sample data for database population
├── public/
│   ├── css/
│   │   └── rating.css   # Styling for rating functionality
│   ├── html/
│   │   └── index.html   # Static HTML template
│   └── js/
│       └── script.js    # Client-side JavaScript
├── models/
│   ├── listing.js       # MongoDB schema for property listings
│   └── reviews.js       # MongoDB schema for property reviews
├── routes/
│   ├── listing.js       # Routes for property listings
│   ├── review.js        # Routes for reviews
│   └── user.js          # Routes for user authentication and profiles
├── schema.js            # Validation schema
├── middleware.js        # Middleware for error handling and authentication
├── views/               # EJS templates for rendering pages
│   ├── partials/        # Reusable partials like header and footer
│   ├── listings/        # Templates for listing pages
│   └── reviews/         # Templates for review pages
├── utils/
│   └── ExpressError.js  # Custom error handling utility
└── app.js               # Main server file
```

---

## 🛠️ Built With

- **Frontend**: EJS, Bootstrap  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Authentication**: Passport.js  
- **Styling**: Custom CSS, Bootstrap  

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesaiteja24/wanderlust-mern/
   cd wanderlust-mern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:  
   To run locally Create a `.env` file in the root directory and add:
   ```plaintext
   ## 🔑 Environment Variables
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    
    ATLASDB_URL=your_mongodb_connection_string
    
    SECRET=your_secret_key

   ```


4. Initialize the database (optional):  
   Populate your database with sample data:
   ```bash
   cd init
   node index.js
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   [http://localhost:8080](http://localhost:8080)
   
7. local DB or Cloud DB
   You can connect to your local DB by using `MONGO_URL` instead of `dbUrl`
   ```javascript
   const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; 
   const dbUrl = process.env.ATLASDB_URL;
   mongoose
     .connect(dbUrl) // connects to mongo atlas
     .then(() => console.log("Connected to DB"))
     .catch((err) => console.error("Failed to connect to DB:", err));
   (or)
   mongoose
     .connect(MONGO_URL) // connectes to local db
     .then(() => console.log("Connected to DB"))
     .catch((err) => console.error("Failed to connect to DB:", err));
   ```
---

## 🌟 Features Breakdown

- **Listings Management**:
  - Create new property listings with detailed information.
  - Edit or delete your listings easily from your profile.

- **User Reviews**:
  - Add and view reviews for each property, enabling informed decisions.

- **EJS Templates**:
  - Dynamic server-side rendering for all pages using EJS.

- **Responsive Design**:
  - Wanderlust ensures a seamless browsing experience across devices.

---

## 🖥️ Demo

Access the live application: [Wanderlust Demo](https://wanderlust-mern-ic8u.onrender.com/listings)

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.  

---

## 💬 Feedback

Have suggestions or issues? Feel free to create an issue
---

## 📄 Acknowledgments

- Special thanks to the **Unsplash API** for providing property images.  
- Gratitude to the creators of libraries and frameworks used in this project.  

---

Enjoy exploring Wanderlust! 🌍
