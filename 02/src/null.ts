// null.ts

const isShow = true;
let time: number | null; // unia

if(isShow) {
    time = new Date().getMilliseconds();
} else {
    time = null;
}