function showAlphabet(alphabet) {
    const alphabetData = {
        A: {image: 'image/apple.jpeg', name:'Apple'},
        B: {image: 'image/ball.jpeg', name:'Ball'},
        C: {image: 'image/cat.jpeg', name:'Cat'},
        D: {image: 'image/dog.jpeg', name:'Dog'},
        E: {image: 'image/elephant.jpeg', name:'Elephant'},
        F: {image: 'image/frog.jpeg', name:'Frog'},
        G: {image: 'image/goat.jpeg', name:'Goat'},
        H: {image: 'image/horse.jpeg', name:'Horse'},
        I: {image: 'image/iron.jpeg', name:'Iron'},
        J: {image: 'image/jug.jpeg', name:'Jug'},
        K: {image: 'image/kettle.jpeg', name:'Kettle'},
        L: {image: 'image/loin.jpeg', name:'Loin'},
        M: {image: 'image/mango.jpeg', name:'Mango'},
        N: {image: 'image/nose.jpeg', name:'Nose'},
        O: {image: 'image/orange.jpeg', name:'Orange'},
        P: {image: 'image/pineapple.jpeg', name:'Pineapple'},
        Q: {image: 'image/queen.jpeg', name:'Queen'},
        R: {image: 'image/rabbit.jpeg', name:'Rabbit'},
        S: {image: 'image/snail.jpeg', name:'Snail'},
        T: {image: 'image/table.jpeg', name:'Table'},
        U: {image: 'image/umbrella.jpeg', name:'Umbrella'},
        V: {image: 'image/van.jpeg', name:'Van'},
        W: {image: 'image/window.jpeg', name:'Window'},
        X: {image: 'image/xylophone.jpeg', name:'Xylophone'},
        Y: {image: 'image/yam.jpeg', name:'Yam'},
        Z: {image: 'image/zebra.jpeg', name:'Zebra'},
    } ;  
    const imageContainer = document.getElementById('image_container');
    const alphabetImage = document.getElementById('alphabet_image');
    const alphabetName = document.getElementById('alphabet_name');

    alphabetImage.src = alphabetData[alphabet].image;
    alphabetName.textContent = `${alphabet} for ${alphabetData[alphabet].name}`;
}