import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import joi from 'joi';
import dayjs from 'dayjs';
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

server.listen(process.env.PORT, () => console.log(`Server running in port: ${process.env.PORT}`));