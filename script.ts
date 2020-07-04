const Jimp = require('jimp');

/*
    @param1 - imageUrl (can be a local file or remote file)
    
    @param2 - [
        {
            x: number,
            y: number,
            text: string
        }, ...
    ]
*/

async function addTextToImage(imageUrl: string, data: any[]) {
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    const image = await Jimp.read(imageUrl);

    // image.print(font, 560, 224, 'Hello World!');

    data.forEach(datum => image.print(font, datum.x, datum.y, datum.text));
    image.write('output.jpg');
}

// let imageUrl = 'https://i2.wp.com/www.tutorialbrain.com/wp-content/uploads/2019/01/HTML-Form.jpg?fit=1920%2C1080&ssl=1';
let imageUrl = './sample.jpg';
let data = [
    {
        x: 573,
        y: 230,
        text: 'R'
    },
    {
        x: 573,
        y: 333,
        text: 'HemathKumar'
    },
    {
        x: 573,
        y: 443,
        text: '21/01/2000'
    },
    {
        x: 573,
        y: 557,
        text: 'djhemath@gmail.com'
    },
    {
        x: 573,
        y: 685,
        text: '+91 9384288287'
    }
]

addTextToImage(imageUrl, data);