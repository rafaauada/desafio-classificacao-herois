let herosAndExperience = [
    ["Steve", 963],
    ["Alex", 2140],
    ["Arnold", 1304],
    ["Ronnie", 3129],
    ["Raze", 9540],
    ["Deadlock", 6435],
    ["Wills", 7987],
    ["Goggins", 11400],
    ["Hendrick", 4000],
    ["Hunter", 10000],
    ["Cyborg", 5200],
    ["TheRock", 8000]
]

let ranking = ["FERRO", "BRONZE", "PRATA", "OURO", "PLATINA", "DIAMANTE", "ASCENDENTE", "IMORTAL", "RADIANTE"]
let experienceColumn = 1;
let herosColumn = 0;




for (let i = 0; i < herosAndExperience.length; i++) {
    let experience = herosAndExperience[i][experienceColumn];
    let hero = herosAndExperience[i][herosColumn];
    let phrase = "O ranking do herói " + hero + " é: "

    switch (true){

        case (experience < 1000):
            console.log(phrase + ranking[0])
            break;

        case (experience >= 1000 && experience < 2000):
            console.log(phrase + ranking[1])
            break;

        case (experience >= 2000 && experience < 5000):
            console.log(phrase + ranking[2])
            break;

        case (experience >= 5000 && experience < 6000):
            console.log(phrase + ranking[3])
            break;

        case (experience >= 6000 && experience < 7000):
            console.log(phrase + ranking[4])
            break;

        case (experience >= 7000 && experience < 8000):
            console.log(phrase + ranking[5])
            break;

        case (experience >= 8000 && experience < 9000):
            console.log(phrase + ranking[6])
            break;

        case (experience >= 9000 && experience < 10000):
            console.log(phrase + ranking[7])
            break;

        case (experience > 10000):
            console.log(phrase + ranking[8])
            break;
    }
}