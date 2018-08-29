/*require routes*/

const routesList = [
    "search-images","image-upload"
];

const routesArr = [];

routesList.forEach(route => {
    routesArr.push(require(`./${route}`));
});


module.exports = routesArr;