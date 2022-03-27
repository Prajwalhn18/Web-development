//flood fill

const floodFill = (image, sr, sc, newColor) => {
    const oldColor = image[sr][sc];
    if (oldColor !== newColor) rePaint(image, sr, sc, oldColor, newColor);
    return image;
};

const rePaint = (image, sr, sc, oldColor, newColor) => {
    const NotInsideTheGridAnyMore =
        sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length;
    if (NotInsideTheGridAnyMore) {
        return;
    }
    if (image[sr][sc] !== oldColor) {
        return;
    }

    image[sr][sc] = newColor;

    rePaint(image, sr + 1, sc, oldColor, newColor);
    rePaint(image, sr - 1, sc, oldColor, newColor);
    rePaint(image, sr, sc + 1, oldColor, newColor);
    rePaint(image, sr, sc - 1, oldColor, newColor);
};

let image = [
    [0, 0, 0],
    [0, 0, 0],
];
let sr = 0;
let sc = 0;
let newColor = 2;

console.log(floodFill(image, sr, sc, newColor));
