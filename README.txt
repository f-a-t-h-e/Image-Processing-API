SCRIPTS:-
    for fast start: npm i && npm run test && node dist/.
    test: npm run test
    start: node dist/.
    build: npm run build
ENDPOINTS:-
    http://localhost:3000/api/images/   //Image Processing API
    http://localhost:3000/api/images/?name=fjord    //A placeholder api
    http://localhost:3000/api/images/?name=fjord&width=120&height=120   //A placeholder api & Image resizing
