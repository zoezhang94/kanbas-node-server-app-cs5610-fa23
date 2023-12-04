// const express = require('express');
import express from 'express';
import session from 'express-session';
import HelloRoutes from './hello.js';
import Lab5 from './lab5.js';
import cors from 'cors';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import UserRoutes from './users/routes.js';
import LikesRoutes from './likes/routes.js';
import mongoose from 'mongoose';
import "dotenv/config";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas-cs5610-fa23")

const app = express();
app.use(cors(
  {
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));


app.use(express.json());
Lab5(app);
UserRoutes(app);
LikesRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
HelloRoutes(app);
app.listen(process.env.PORT || 4000);

