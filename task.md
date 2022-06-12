# Project 
1. Admin Panel



2. Volunteer



3. Meet


4. backend

- Admin User
   admin username 
   admin password
   Email
   contact no:


-  Onground Event
   Name
   Date
   Time
   Type of Event  - bullet options
   Description
   No of volunteers required
   Type of Volunteers
     Students
     Adults
   Languages  -  array
    Skills required - check list
   Venue Full address
   Town,
   District,
   City
   State - 
   Maharashtra
    other
   Voluteers - array of object ids , verififcation status [ { id, status}]

-  Virtual Events
         Name
   Date
   Time
   Type of Event  - bullet options
   Description
   No of volunteers required
   Type of Volunteers
     Students
     Adults
   Languages  -  array
    Skills required - check list
   Links if any
   Voluteers - array of object ids , verififcation status [ { id, status}]

- Volunteer
    Name
    Username 
    passsword
    age 
    Profession
    organization
    Skills
        Story Telling
        Photography
        Writing and editing
        other
    Phone no
    town
    city
    district
    maharashtra
    Prefred District
    Language known
    Nationality
    EmailAddress:
    Academic Qualifications
    Assigned events array event id - [{eventids, contributionStatus - Voluteered|| Not Voluteered || Nonverified || verified}]
    LongTermAvailibility - [array of date and time]
    ShortTermAVailiibility - [array of date and time]


Timeline   backend                       frontend
5           Schema                          Admin Panel 
6           Routes and controllers          Onground events + Virtual Events
7           backend without algo            Volunteers Page + Event page
8           algorithm                       Admin Panel dashboard stats
9           Mailing + meet collaboration    Volunteer frontend Start login and sign up page
10          complete                        Profile Page  + List of events
11          Integration                     avaialibilty page + assigned events
12                                          volunteer frontend complete
13                            Intergrating whole project + ppt 



Routes to be made
make sure routes will be like this domain name/api/typeofROute/routeWork
                                    exampel localhost:5000/api/onGroundEvents/create
1. volunteer creation route and controllers // done 
2. onGround Creation route and controllers // done
3. VirtualEvent Creation route and controllers   done
4. edit volunteer info route  // all the information will be send again when edit/done
5. edit virtualEvent route //done
6. VirtualEvent edit route done
7. deletion of onGround Events route with route url be like  /api/onGroundEvents/delete/:objectId
8. deletion of virutal Events route
9. deletion of volunters route


16. Get info route of a particular event both onground and virtual - done
14. Mail Verification Route



10. Admin Create route - 
11. Admin Edit route  - 
12. Admin Login Route  - 
13. Volunteer Signup route 
15. Volunteer Login Route - 
19. Bulk Meet Route - message, date, time, event id
20. Single Meet Route 

21. long term availibility route
22. Short Term availibility Route
24. upcoming event details event name, date, mode
25. All availibility of an volunteer with its id - 
26. upcoming events // event id, Event Date, Mode
27. Past /// event id, Event Date, Mode
28. meet schedule details with event id




29. ask doubt // volunteer id, event id, message  
23. Mapping Route

   
1. Date
2. Location 
3. Type of Event
<!-- 4. Area of Thing -->
5. Schdule a meet on base of intrest
6. Our side mail


7. Waiting List of event
8. Notify about it the change

9. Turn on/off the assignment



Remaining improvment 
Stats on Dashboards
   1. No of volunteers
   2. No of Onground Events
   3. No of virutal events
For graph
   Month wise data of no of volunteers

Onground Event Section 
   <!-- remove event id -->
   <!-- change address to venue in event detai page -->
   <!-- Mailing issues -->
   route to delete assigned volunteer
   <!-- handle null user at every route -->



Virtual Events secons
   remove event id
volunteer section 
   remove volunteer id

volunteer site
   upcoming events
   and past events not assigned




