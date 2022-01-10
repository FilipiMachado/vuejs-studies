function getRandomAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomHealValue(min, max) {
  return Math.floor(Math.random() * (max + min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      console.log(`This is the current round: ${this.currentRound}`);
      const attackValue = getRandomAttackValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomAttackValue(18, 8);
      this.playerHealth -= attackValue;
    },
    specialAttackPlayer() {
      this.currentRound++;
      const attackValue = getRandomAttackValue(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomHealValue(10, 5);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
  },
});

app.mount("#game");
