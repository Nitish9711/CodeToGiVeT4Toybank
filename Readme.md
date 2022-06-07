# **Code to give toy bank project backend**


## Onground events realted route  
### 1. Creating onground events
```javascript
Request 
Type: POST
URL: HOST_URL +  '/api/onGroundEvents/create/'
BODY: {
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


