#!/usr/bin/env node

/*read in the stream as a string and parse to JSON*/

var fs = require('fs');
var stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
//console.log(stdinBuffer.toString());

var jen = JSON.parse(stdinBuffer);


//for each item in the entries array (which is [key, val] in the original), 
//we're adding a new key val.field to the accumulator, with the value key
const app = Object.entries(jen).reduce((acc, [key, {application}]) => {
  acc[application] = acc[application] || []; 
  acc[application].push(key);
  return acc;
}, {});


const ver = Object.entries(jen).reduce((acc, [key, {version}]) => {
  if(version !== undefined){
    acc[version] = acc[version] || [];
    acc[version].push(key);
  }
  return acc;
}, {});

const role = Object.entries(jen).reduce((acc, [key, {role}]) => {
  if(role !== undefined){
    acc[role] = acc[role] || [];
    acc[role].push(key);
  }
  return acc;
}, {});

const loc = Object.entries(jen).reduce((acc, [key, {location}]) => {
  if(location !== undefined){
    acc[location] = acc[location] || [];
    acc[location].push(key);
  }
  return acc;
}, {});


//wrap around everything
var obj = {
  //app array to hold the arrays
  application: [],
  //version array to hold the version arrays
   version: [],
   //etc
   role: [],
   //etc
   location: []
};

//push the reduced arrays into the specified objects/arrays
obj.application.push(app);
obj.version.push(ver);
obj.role.push(role);
obj.location.push(loc);
var outputFile = JSON.stringify(obj, null, ' ');

/*
to prind to console
console.log(a);
*/

//writing to disk as myoutput.json
var writing = require('fs');
writing.writeFile('myoutput.json', outputFile, 'utf8');

