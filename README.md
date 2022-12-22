# notifications-services-api

An API that manages a notification microservice. You can add, update, find, delete, read and unread notifications from a 'recipient'.       

Project uses Typescript, Nodejs, Nestjs, POO, sqlite, Prisma, Jest for unit-tests and has the Domain, Driven and Design architecture.       


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contact](#contact)

## Getting Started

This project focuses on deepening Nestjs and microservices, here we use a notification system that can be implemented in 'N' systems and has its functionality separated from other services. The project also uses memory database knowledge for the tests, where this facilitates and increases the productivity by being simple and useful. The Domain, Driven and Design architecture is also used for the synergy with microservices and the Nest framework.       


SOME ENDPOINTS:   

POST 'http://localhost:3000/notifications' to add a new Notification        
GET 'http://localhost:3000/notifications/count/from/:{recipientId}' to count all notifications from a recipient         
GET 'http://localhost:3000/notifications/from/:{recipientId}' to show all notifications from a recipient           
PATCH 'http://localhost:3000/notifications/:{notificationId}/cancel' to cancel a notification    
         
Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version            

### Installation  

Clone the repo:     
```
git clone https://github.com/RuhamLeal/notifications-services-api.git     
```

Go to project folder:     
```
cd notifications-services-api      
```

Install dependencies:     
```
npm install    
```
Run server:
```
npm start    
```           
               
                  
                    
                     
### Tests

The project has unit-test with Jest for use-cases features and for application entities.


Run tests:
```
npm test    
```   


### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
