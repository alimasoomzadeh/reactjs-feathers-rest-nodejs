# reactjs-feathers-rest-nodejs


1.install nodejs and mysql-server[user:root pass:123456]
2.run db/members-ddl.sql to create db and table
3.go to /backend folder and run backend project:
npm init
npm install express mysql body-parser cors --save
node server.js
4.view app:
open homepage "http://localhost:8080/"
HTTP.GET "http://localhost:8080/members" to view all members
HTTP.GET "http://localhost:8080/members/1" to view note with id:1
HTTP.POST "http://localhost:8080/members" to create a note
HTTP.PUT "http://localhost:8080/members/1" to update a note with id:1
HTTP.DELETE "http://localhost:8080/members/1" to delete a note with id:1
5.go to /frontend folder and run:
npm init
npm install @feathersjs/feathers @feathersjs/rest-client --save
npm start




--------------------------------------
//https://docs.feathersjs.com/api/client/rest.html#rest-baseurl
//https://docs.feathersjs.com/guides/basics/services.html#service-methods
//https://www.taniarascia.com/crud-app-in-react-with-hooks/
//https://www.youtube.com/watch?v=8y33WCVkLwc
