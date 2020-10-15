let products = [
    {item: 'big screen tv', image: "https://e7.pngegg.com/pngimages/978/419/png-clipart-lcd-television-liquid-crystal-display-led-backlit-lcd-backlight-big-screen-tv-television-media-thumbnail.png" }, 
    {item: 'iphone XII', image:"https://e7.pngegg.com/pngimages/66/144/png-clipart-space-gray-iphone-5s-iphone-smartphone-mockup-electronics-gadget-thumbnail.png" },
    {item: 'Bose Soundlink', image: "https://p7.hiclipart.com/preview/431/213/217/loudspeaker-icon-big-horn-speaker-thumbnail.jpg"}
];

function getAll() {
    return products
}

function getId(i) {
    return products[i];
}

module.exports = {
    getAll,
    getId
}