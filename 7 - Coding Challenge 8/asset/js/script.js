//////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 8

class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;  // km2
        this.numTrees = numTrees;
    }

    treeDensity(){
        const density = this.numTrees / this.area;

        const resultDensity = Math.abs(density).toFixed(3);

        console.log(`${this.name} has a tree density of ${resultDensity} trees per square km.`);
    }
}

class Street extends Element{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a `
        +`${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 2541),
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr){

    const sum = arr.reduce((prev, cur, index) =>
        prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportParks(p){

    console.log('-----------PARKS REPORT-----------');
    
    // Destiny
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const[totalAge, avgAge] = calc(ages);

    const resultAvgAge = Math.abs(avgAge).toFixed(3);

    console.log(`Our ${p.length} parks have an average of ${resultAvgAge} years.`);

    // Wich park has more than 1000 trees
    const treesThousand = p.map(el => el.numTrees).findIndex(el =>
        el >= 1000);
    console.log(`${p[treesThousand].name} has more than 1000 trees.`);

    console.log('');
}

function reportStreets(s){

    console.log('----------STREETS REPORT----------');

    // Total and average length of the town's streets
    const[totalLength, avgLength] = calc(s.map(el =>
        el.length));

    const resultTotalLength = Math.abs(totalLength).toFixed(3);
    const resultAvgLength = Math.abs(avgLength).toFixed(3);
    
    console.log(`Our ${s.length} streets have a total length of `
        +`${resultTotalLength} km, with an average of ${resultAvgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);