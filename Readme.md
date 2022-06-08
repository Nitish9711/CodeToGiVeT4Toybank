# **Code to give toy bank project backend**


## Onground events realted route  
### 1. Creating onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/create/'
BODY: 
    {
    "name": "event 1",
    "date": "2022-06-07",
    "StartTime": "3:00 PM",
    "EndTime": "4:00 PM",
    "typeOfEvent": "something",
    "description":"something is going to happen for sure",
    "noOfVolunteersRequired": "2",
    "typeOfVolunteers": "professional",
    "languagesRequired": ["English", "Hindi"],
    "skillsRequired":["computer"],
    "venue": "at one of the centeres",
    "town": "Andheri",
    "district":"North District",
    "city":"Mumbai"
}
Response: 
1. Event has created
   status - 201
   response -{
                created doc of event
            }
2. Some error occured
    status - 400
    response - {
        message : "error"
    }
```
### 2. Editing onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/edit/:id' // here id is the object of the event document stored in mongodb
BODY: 
    {
    "name": "event 1",
    "date": "2022-06-07",
    "StartTime": "3:00 PM",
    "EndTime": "4:00 PM",
    "typeOfEvent": "something",
    "description":"something is going to happen for sure",
    "noOfVolunteersRequired": "2",
    "typeOfVolunteers": "professional",
    "languagesRequired": ["English", "Hindi"],
    "skillsRequired":["computer"],
    "venue": "at one of the centeres",
    "town": "Andheri",
    "district":"North District",
    "city":"Mumbai"
}
Response: 
1. Event has edited
   status - 201
   response -{
                created doc of event
            }
```
### 3. Deleting onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/delete/:id'
BODY: 
    {}
Response: 
1. Event has been Deleted
   status - 201
   response -{
        message: "EVENT_DELETED"
}
```
### 4. Sending Mail to All the volunteers assigned
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/sendMail'
BODY: 
        {
    "id": "Event Objectid",
    "message": "message Entered"
}
    
Response: 
1. Mail sent
   status - 201
   response -{
        message: "MAIL_SENT"
}
```
## Virtual events realted route  
### 1. Creating virtual events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/virtualEvents/create/'
BODY: 
   {
    "name": "event 1",
    "date": "2022-06-07",
    "StartTime": "3:00 PM",
    "EndTime": "4:00 PM",
    "typeOfEvent": "something",
    "description":"something is going to happen for sure",
    "noOfVolunteersRequired": "2",
    "typeOfVolunteers": "professional",
    "languagesRequired": ["English", "Hindi"],
    "skillsRequired":["computer"],
    "linksIfAny": "https:somthing.com"
}
Response: 
1. Event has created
   status - 201
   response -{
                created doc of event
            }
2. Some error occured
    status - 400
    response - {
        message : "error"
    }
```
### 2. Editing onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/virtualEvents/edit/:id' // here id is the object of the event document stored in mongodb
BODY: 
   {
    "name": "event 1",
    "date": "2022-06-07",
    "StartTime": "3:00 PM",
    "EndTime": "4:00 PM",
    "typeOfEvent": "something",
    "description":"something is going to happen for sure",
    "noOfVolunteersRequired": "2",
    "typeOfVolunteers": "professional",
    "languagesRequired": ["English", "Hindi"],
    "skillsRequired":["computer"],
    "linksIfAny": "https:somthing.com"
}
Response: 
1. Event has edited
   status - 201
   response -{
                created doc of event
            }
```
### 3. Deleting onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/virtualEvents/delete/:id'
BODY: 
    {}
Response: 
1. Event has been Deleted
   status - 201
   response -{
        message: "EVENT_DELETED"
}
```
### 4. Sending Mail to All the volunteers assigned
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/virtualEvents'
BODY: 
        {
    "id": "Event Objectid",
    "message": "message Entered"
}
    
Response: 
1. Mail sent
   status - 201
   response -{
        message: "MAIL_SENT"
}
```


## Volunteer Events Realted Routes  
### 1. Email verification
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/util/sendOtp/'
BODY: {
    "email": email of the volunteer
}
Response: 
1. If server failed to send the otp for some reason
   status - 410
   response -{
             "message": "OTP_SENT_FAILED"
            }
 
2. OTP sent
    status - 201
    response - {
                 message: "OTP_SENT"
           }
```

### 2. Otp Verification

```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/util/verifyOtp/'
BODY: {
    "email": email of the volunteer
    "otp": otp entered
}
Response: 
1.  
   status - 401
   response -{
             "message": "OTP_EXPIRED"
            }
 
2.  
   status - 402
   response -{
             "message": "WRONG_OTP"
            }
 
3. Email not found
    status - 404
    response - {
                 message: "EMAIL_NOT_FOUND"
           }
4. OTP_VERIFIED
    status - 201
    response - {
                 message: "OTP_VERIFIED"
           }
```
### 3. Sending Mail to a particular volunteer
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/volunteers/sendMail'
BODY: 
        {
    "id": "Volunteer Objectid",
    "message": "message Entered"
}
    
Response: 
1. Mail sent
   status - 201
   response -{
        message: "MAIL_SENT"
}
```