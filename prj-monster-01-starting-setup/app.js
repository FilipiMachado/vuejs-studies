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
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomAttackValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomAttackValue(18, 8);
      this.playerHealth -= attackValue;
    },
    specialAttackPlayer() {
      const attackValue = getRandomAttackValue(25, 10);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomHealValue(10, 5);
      this.playerHealth += healValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
