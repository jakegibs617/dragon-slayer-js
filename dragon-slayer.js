var slaying = true;
var youHit = Math.floor(Math.random() * 2000);
var damageThisRound = Math.floor(Math.random()*5000 + 1000);
var totalDamage = 0;

while(slaying) {
    totalDamage += damageThisRound;

    if (youHit)  {
        console.log("You hit the Dragon! Critial Hit! " + totalDamage + " damage given");
        if (totalDamage >= 4000){
          console.log("You slayed the Dragon!");
          slaying = false;
        } else {
          youHit = Math.floor(Math.random() * 2000);
        };
        
    } else {
        console.log("The dragon defeated you.");
    };
    slaying = false;
};