const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    // const { name, price } = this.potions;
    for (const { name } of this.potions) {
      if (name === newPotion.name) {
        return `Error! Potion ${name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);

    return this.potions;
  },
  removePotion(potionName) {
    const tempPotions = [];
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        continue;
      }

      tempPotions.push(potion);
    }

    this.potions = tempPotions;

    return this.potions;
    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const tempPotions = [];

    for (const potion of this.potions) {
      if (potion.name === oldName) {
        tempPotions.push(potion);

        const potionIndex = tempPotions.indexOf(potion);

        tempPotions[potionIndex].name = newName;
      } else {
        tempPotions.push(potion);
      }
    }

    this.potions = tempPotions;
    return this.potions;
    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(
  atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'),
  atTheOldToad.getPotions(),
);
