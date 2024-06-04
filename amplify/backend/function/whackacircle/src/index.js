const shapes = require('./data/shapes.json');
// import shapes from './data/shapes.json';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const SHAPE_MIN_WIDTH = 50;
    const SHAPE_MAX_WIDTH = 500;
    const SHAPE_MIN_HEIGHT = 50;
    const SHAPE_MAX_HEIGHT = 500;

    console.log(`EVENT: ${JSON.stringify(event)}`);
    //console.log(shapes);

    function getRandomShape() {
        //const shapes = ['circle', 'square', 'diamond', 'triangle'];
        const randomIndex = Math.floor(Math.random() * shapes.length);
        return shapes[randomIndex];
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomDimensions(minWidth, maxWidth, minHeight, maxHeight) {
        const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        return { width, height };
    }

    function getRandomAngle(minAngle = 0, maxAngle = 360) {
        return Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
    }

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },//  body: JSON.stringify('Hello from Lambda!'),
        body: JSON.stringify({
            shape: getRandomShape(),
            color: getRandomColor(),
            dimensions: getRandomDimensions(SHAPE_MIN_WIDTH, SHAPE_MAX_WIDTH, SHAPE_MIN_HEIGHT, SHAPE_MAX_HEIGHT),
            angle: getRandomAngle()
        }),
    };
};
