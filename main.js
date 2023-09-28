const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Display a loading bar or text
    const loadingText = this.add.text(300, 250, 'Loading...', { fontSize: '32px', fill: '#fff' });

    // Simulate a 5-second loading time
    setTimeout(() => {
        // Preload assets like images, sounds, etc.
        this.load.image('logo', 'playy.png');
        
        // Once assets are preloaded, remove the loading text
        this.load.on('complete', () => {
            loadingText.destroy();
            this.scene.start('DisplayImage');
        });
        
        this.load.start();
    }, 4000); // 5000 milliseconds = 5 seconds
}

function create() {
    // This function is empty in the preload scene.
    // We'll start the 'DisplayImage' scene when loading is complete.
}

// Define the scene to display the image
class DisplayImageScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DisplayImage' });
    }

    create() {
        // Add the loaded image to the screen
        const logo = this.add.image(400, 300, 'logo');

        // Add some text below the image
        const text = this.add.text(300, 50, 'MENU SCREEN', {
            fontSize: '24px',
            fill: '#fff'
        });

        // You can add more content or interactions to this scene as needed
    }
}

// Add the 'DisplayImage' scene to the game
game.scene.add('DisplayImage', DisplayImageScene);
