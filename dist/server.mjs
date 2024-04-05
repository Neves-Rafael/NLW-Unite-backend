import {
  registerForEvent
} from "./chunk-IUAC6HI3.mjs";
import {
  errorHandler
} from "./chunk-SSC6RBXV.mjs";
import {
  checkIn
} from "./chunk-TWJUF66K.mjs";
import {
  createEvent
} from "./chunk-4ARCRRRW.mjs";
import "./chunk-AKQZMAAJ.mjs";
import {
  getAttendeeBadge
} from "./chunk-BSNEN3WL.mjs";
import {
  getEventAttendees
} from "./chunk-T67OCI3A.mjs";
import {
  getEvent
} from "./chunk-JSDF6QBX.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Specification API to back-end of application pass.in during NLW unite event.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
