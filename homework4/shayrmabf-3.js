class Warrior {
    #level = 1;
    #experience = 100;
    #ranks = ['Pushover', "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    #achievements = [];
    level() {
        return this.#level;
    }
    experience() {
        return this.#experience;
    }
    rank() {
        return this.#ranks[Math.floor(this.#level / 10)];
    }
    achievements() {
        return this.#achievements;
    }
    training([description, experiencePoints, minLevelRequirement]) {
        if (this.#level < minLevelRequirement) return "Not strong enough";
        this.#experience +=  experiencePoints;
        this.#experience = Math.min(this.#experience, 10000);
        this.#level = Math.floor(this.#experience / 100);
        this.#achievements.push(description);
        return description;
    }
    battle(lvl) {
        let getExp = 0;
        let response = '';
        if (1 > lvl || lvl > 100) response = "Invalid level";
        else if (lvl === this.#level) {
            getExp += 10;
            response = "A good fight";
        }
        else if (lvl === this.#level - 1){
            getExp += 5;
            response = "A good fight";
        }
        else if (lvl <= this.#level - 2) response = "Easy fight";
        
        else {
            let dif = lvl - this.#level;
            if (dif >= 5 && this.rank() !== this.#ranks[Math.floor(lvl / 10)]) return "You've been defeated";
            getExp += 20 * dif * dif;
            response = "An intense fight";
        } 
        this.#experience += getExp;
        this.#experience = Math.min(this.#experience, 10000);
        this.#level = Math.floor(this.#experience / 100);
        return response;
    }
}

const bruce_lee = new Warrior();
// console.log(bruce_lee)
// console.log(bruce_lee.battle(1))
// console.log(bruce_lee.experience())
// console.log(bruce_lee.battle(11))
// console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1]))



