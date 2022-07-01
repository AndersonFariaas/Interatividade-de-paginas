let comedy = [
    {
        title: 'White Chicks',
        director: 'Keenen Ivory Wayans',
        year: '2004'        
    },
    {
        title: 'The Mask',
        director: 'Chuck Russell',
        year: '1994'
    },
    {
        title: 'Ace Ventura: Pet Detective',
        director: 'Tom Shadyac',
        year: '1994'
    }
]
let action = [
    {
        title: 'The Equalizer',
        director: 'Antoine Fuqua',
        year: '2014'        
    },
    {
        title: 'Troia',
        director: 'Wolfgang Petersen',
        year: '2004'
    },
    {
        title: 'Fight Club',
        director: 'David Fincher',
        year: '1999'
    }
];
let fantasy = [
    {
        title: 'Avatar',
        director: 'James Cameron',
        year: '2009'        
    },
    {
        title: 'Alice in Wonderland',
        director: 'Tim Burton',
        year: '2010'
    },
    {
        title: 'Doctor Strange in the Multiverse of Madness',
        director: 'Sam Raimi',
        year: '2022'
    }
];

let favoritMovie = (comedy[1].title);

if (favoritMovie === 'The Mask'){
    console.log(`My favorit movie is ${favoritMovie}`);
}
else{
    console.log("Not even 5 start");
};