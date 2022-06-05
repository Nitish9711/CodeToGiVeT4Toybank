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
1. volunteer creation route and controllers
2. onGround Creation route and controllers
3. VirtualEvent Creation route and controllers
4. edit volunteer info route  // all the information will be send again when edit
5. edit virtualEvent route
6. VirtualEvent edit route
7. deletion of onGround Events route with route url be like  /api/onGroundEvents/delete/:objectId
8. deletion of virutal Events route
9. deletion of volunters route


   
