// const express = require('express');
import express from 'express';
import HelloRoutes from './hello.js';
import Lab5 from './lab5.js';
import cors from 'cors';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import "dotenv/config";

const app = express();
console.log(process.env.FRONTEND_URL);

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);


app.use(express.json());
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
HelloRoutes(app);
app.listen(process.env.PORT || 4000);

