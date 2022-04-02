import {Server} from "./app/Server";
import express from "express";
import config from "./config";

new Server(express()).start(config.port as number);