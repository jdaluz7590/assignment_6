# AI Collaboration Documentation

## Prompts I used:
1. “Walk me step by step through deploying an Express.js app to Render from a GitHub repository.”
    Very helpful. It gave me a clear outline of the process including pushing the project to GitHub, connecting the repo to Render, and setting the correct start command.
2. “How do I fix a MongoDB Atlas connection error like querySrv ECONNREFUSED?”
    It pointed me in the right direction about checking the connection string and network settings in MongoDB Atlas.
3. “Why are some of my API routes working but others are failing?”
    Helpful. This helped me understand that routes like /health and /products worked because they did not depend on the database, while /orders required MongoDB to be connected.

## Deployment Problems
A deployment problem I had at first was that when testing the MONGO-URI, at first the /products and /health routes were working perfectly, but /orders wasn't working. Then I found out that was because the URI for some reason wasn't working. When I swapped back to the local URI, it worked perfectly. After a few minutes of research I tried it without the SRV and it worked perfectly.

## Reflection
AI was helpful for explaining the deployment process and breaking it into clear steps. It was especially useful when troubleshooting database connection issues and understanding how environment variables and cloud hosting platforms work together. The easiest part of the deployment process was setting up the Express routes and testing them locally. The most confusing part was connecting the database and understanding why some routes worked even when the database connection was failing. Overall, AI helped guide the debugging process, but I still had to test each step and verify that my code and environment settings were correct.