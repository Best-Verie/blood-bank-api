<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A robust API backend for the Blood Bank Platform, built with <a href="http://nodejs.org" target="_blank">Node.js</a>, <a href="https://www.prisma.io/" target="_blank">Prisma ORM</a>, and <a href="https://swagger.io/" target="_blank">Swagger</a>.</p>
<p align="center">
  <a href="https://nodejs.org/en/" target="_blank"><img src="https://img.shields.io/badge/node-%3E%3D%2016-green" alt="Node Version" /></a>
  <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/postgresql-%3E%3D%2013-blue" alt="PostgreSQL Version" /></a>
  <a href="https://swagger.io/" target="_blank"><img src="https://img.shields.io/badge/swagger-api-orange" alt="Swagger API Docs" /></a>
  <a href="https://github.com/your-repo/blood-bank-api/actions" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/your-repo/blood-bank-api/ci.yml" alt="CI Status" /></a>
</p>

## Description

This repository powers the backend for the **Blood Bank Platform**, enabling efficient management of hospitals, donors, appointments, and events with comprehensive API support. The API is documented using Swagger and designed to integrate seamlessly into scalable systems.

## Features

- **User Authentication**: Role-based (Admin, Super Admin, Volunteer).  
- **Hospital Management**: CRUD operations for hospital data.  
- **Donor Management**: Register and manage donors.  
- **Appointment Management**: Schedule and manage blood donation appointments.  
- **Event Management**: Create and manage blood donation drives.  

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/blood-bank-api.git
   cd blood-bank-api

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A robust API backend for the Blood Bank Platform, built with <a href="http://nodejs.org" target="_blank">Node.js</a>, <a href="https://www.prisma.io/" target="_blank">Prisma ORM</a>, and <a href="https://swagger.io/" target="_blank">Swagger</a>.</p>
<p align="center">
  <a href="https://nodejs.org/en/" target="_blank"><img src="https://img.shields.io/badge/node-%3E%3D%2016-green" alt="Node Version" /></a>
  <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/postgresql-%3E%3D%2013-blue" alt="PostgreSQL Version" /></a>
  <a href="https://swagger.io/" target="_blank"><img src="https://img.shields.io/badge/swagger-api-orange" alt="Swagger API Docs" /></a>
  <a href="https://github.com/your-repo/blood-bank-api/actions" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/your-repo/blood-bank-api/ci.yml" alt="CI Status" /></a>
</p>

## Description

This repository powers the backend for the **Blood Bank Platform**, enabling efficient management of hospitals, donors, appointments, and events with comprehensive API support. The API is documented using Swagger and designed to integrate seamlessly into scalable systems.

---

## Features

- **User Authentication**: Role-based (Admin, Super Admin, Volunteer).  
- **Hospital Management**: CRUD operations for hospital data.  
- **Donor Management**: Register and manage donors.  
- **Appointment Management**: Schedule and manage blood donation appointments.  
- **Event Management**: Create and manage blood donation drives.  

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-repo/blood-bank-api.git
cd blood-bank-api
```

### Install Dependencies

```
npm install
```
### Set Up Environment Variables

#### Create a .env file in the root directory with the following content:

```
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database_name>
JWT_SECRET=<your-jwt-secret>
```
## Running the App
#### Database Setup with Prisma

    Run Migrations:
    Generate and migrate the database schema:

```
npx prisma migrate dev
```

#### Generate Prisma Client:

    ```
    npx prisma generate
    ```

#### Start the Server

#### Development mode
```
npm run start:dev
```

#### Production mode
```
npm run start:prod
```

#### The API will be available at http://localhost:3000.
API Documentation

Access Swagger API documentation at:
```
http://localhost:3000/api
```

### API Documentation

#### The API documentation is accessible via Swagger:
```
http://localhost:3000/api
```

Authentication Endpoints

    POST /auth/register: Register a new user.
    POST /auth/login: Log in a user.

Hospital Endpoints

    GET /hospitals: Retrieve all hospitals.
    POST /hospitals: Add a new hospital.
    PUT /hospitals/:id: Update hospital details.
    DELETE /hospitals/:id: Delete a hospital.

Donor Endpoints

    GET /donors: Retrieve all donors.
    POST /donors: Register a new donor.
    PUT /donors/:id: Update donor details.
    DELETE /donors/:id: Delete a donor.

Appointment Endpoints

    GET /appointments: Retrieve all appointments.
    POST /appointments: Schedule a new appointment.
    PUT /appointments/:id: Update appointment details.
    DELETE /appointments/:id: Cancel an appointment.

Event Endpoints

    GET /events: Retrieve all events.
    POST /events: Create a new event.
    PUT /events/:id: Update event details.
    DELETE /events/:id: Delete an event.





