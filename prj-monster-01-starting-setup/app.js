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
      gameOverMessage: "Game Over!",
      gameIsOver: true,
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
    gameOver() {
      if (this.playerHealth === 0) {
        return this.gameOverMessage;
      }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
      } else if (value <= 0) {
        // Player lost
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // draw
      } else if (value <= 0) {
        // Monster lost
      }
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
      this.currentRound++;
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
