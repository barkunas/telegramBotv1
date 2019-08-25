export default class Mood {
    constructor(moodValue = 0) {
        this.value = moodValue
    }
    plusValue(num = 1) {
        this.value = this.value + num
    };
    minusValue(num = 1) {
        if (this.value > 0) {
            this.value = this.value - num
        } else if (this.value == 0) {
            break;
        } else {
            this.value = 0
        }
    }
}