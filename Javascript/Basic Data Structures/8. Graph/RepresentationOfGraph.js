const locations = 'a b c d e f'.split(' ');
const routes = [
    ['b','c'],
    ['c','d'],
    ['e','f'],
    ['a','e'],
    ['a','f'],
    ['c','f']
];

//the graph
const adjacencyList = new Map();

//add node
function addNode(location){
    adjacencyList.set(location,[]);
}

//add edge
function addEdge(origin,destination){ 
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

//create graph

locations.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);
