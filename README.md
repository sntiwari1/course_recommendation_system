# Course Recommendation System

## Description

The Course Recommendation System is designed to provide personalized course suggestions to users based on their preferences and past interactions. It leverages a powerful Django backend to manage courses, recommendations, and user data, coupled with a React-based frontend for a responsive user experience.

## Components

### Backend (Django)

The backend is structured into several Django apps, each serving distinct functions within the system:

1. **courses**

    - Manages course data and interactions.
    - Provides APIs for course creation, modification, and querying.
    - Uses Django Rest Framework for API functionality.

2. **recommendations**

    - Handles the generation and management of course recommendations.
    - Integrates machine learning algorithms to suggest courses based on user behavior and preferences.

3. **users**
    - Manages user authentication and profile information.
    - Supports user registration, login, and profile management.

### Frontend (React)

The frontend is built using React to provide a dynamic and interactive user experience:

-   Implements user interfaces for viewing and interacting with course recommendations.
-   Allows users to manage their profiles and course enrollments.
-   Connects to the Django backend via RESTful APIs for real-time data processing.

### Utilities and Setup

-   **Docker**: Used for containerizing the application, ensuring consistent environments across development, testing, and production.

    #### Install Docker on Ubuntu

    -   https://docs.docker.com/engine/install/ubuntu/

    ##### Build your containers

    ```bash
    docker-compose build
    ```

    ##### Start your application

    ```bash
    docker-compose up
    ```

## Manual Setup and Installation

To get the system up and running on your local machine, follow these steps:

1. **Backend Setup**

    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install required Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    - Run migrations to set up the database:
        ```bash
        python manage.py migrate
        ```
    - Start the Django server:
        ```bash
        python manage.py runserver
        ```

2. **Frontend Setup**

    - Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    - Install required Node.js packages:
        ```bash
        npm install
        ```
    - Start the development server:
        ```bash
        npm start
        ```

3. **Access the Application**
    - Open your web browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions or issues, please feel free to fork the repository and submit a pull request. You can also open issues if you encounter any problems or have suggestions for enhancements.
