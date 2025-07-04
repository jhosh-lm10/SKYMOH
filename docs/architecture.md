# CRM Architecture

## Overview
This document describes the architecture of the CRM system, including backend and frontend components.

## Backend
- Node.js + Express
- PostgreSQL via TypeORM
- JWT authentication middleware
- RESTful API with Socket.io for realtime features
- Services for automation and a simple chatbot

## Frontend
- React + TypeScript
- Vite for development/build
- Component-based UI: PipelineBoard, ChatInbox, ContactProfile

## Database
The database schema is managed separately in PostgreSQL. Entities in the codebase assume the schema already exists.
