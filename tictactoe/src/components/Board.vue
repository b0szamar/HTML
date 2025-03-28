<template>
    <div class="container text-center">
        <h2 v-if="winner">Winner: {{ winner }}</h2>
        <h2 v-else>Player Move: {{ player }}</h2>
        <button @click="reset" class="btn btn-success mb-3">Reset</button>
        <div v-for="(row, x) in squares" :key="x" class="row">
            <button v-for="(cell, y) in row" :key="y" class="square" @click="move(x, y)">
                {{ cell }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";

const calculatedWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    const flatSquares = squares.flat(); 
    for (const [a, b, c] of lines) {
        if (flatSquares[a] && flatSquares[a] === flatSquares[b] && flatSquares[a] === flatSquares[c]) {
            return flatSquares[a];
        }
    }
    return null;
};

export default {
    setup() {
        const player = ref("X");
        const squares = ref([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);

        const winner = computed(() => calculatedWinner(squares.value));

        const move = (x, y) => {
            if (winner.value || squares.value[x][y]) return;
            squares.value[x][y] = player.value;
            player.value = player.value === "X" ? "O" : "X";
        };

        const reset = () => {
            player.value = "X";
            squares.value = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ];
        };

        return { winner, player, squares, move, reset };
    }
};
</script>

<style>
.container {
    margin-top: 20px;
}
.row {
    display: flex;
    justify-content: center;
}
.square {
    width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
    border: 1px solid #000;
    margin: 2px;
}
</style>
