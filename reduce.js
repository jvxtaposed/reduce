var input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    input += chunk;
});


var parsedData = JSON.parse(input);
for(var myObj in parsedData){
	var myJSONObject = {parsedData[myObj]};
}


const jen = {
  "node1": {
      "application": "forge",
      "version": "10.0",
      "role": "app-server"
    },
  "node2": {
    "application": "forge",
    "version": "10.0",
    "role": "util",
    "location": "slice"
  },
  "node3": {
    "application": "forge",
    "version": "9.5",
    "role": "db"
  },
  "node4": {
    "application": "forge",
    "location": "slice",
    "role": "worker"
  }
};

const app = Object.entries(jen).reduce((acc, [key, {application}]) => {
  acc[application] = acc[application] || {"application": []}; 
  acc["application"][application].push(key);
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

//const app = Object.

console.log(app);
console.log(ver);
console.log(role);
console.log(loc);

/*
const acc = {}

Object.entries(jen).forEach(([key, value]) => {
  acc[value.application] = key;
}, {});

console.log(acc);
*/



/*output json

process.stdin.on('end', function () {
    var parsedData = JSON.parse(input);
    var outputJSON = JSON.stringify(parsedData, null, '    ');
    process.stdout.write(outputJSON);
});
*/