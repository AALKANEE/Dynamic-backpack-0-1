/**
 * @param {number[]} values - آرایه‌ای از ارزش‌های اشیاء
 * @param {number[]} weights - آرایه‌ای از وزن‌های اشیاء
 * @param {number} capacity - ظرفیت کوله پشتی (حداکثر وزن مجاز)
 * @returns {number} - ارزش بیشینه‌ای که می‌توان در کوله پشتی قرار داد
 */

function knapsack(values,weights,capacity){
    const n =values.length; // count of items
    // 2D Array for save result
    const d2=Array.from({length:n+1},()=>Array(capacity+1).fill(0));

    // with Dynamic Algorithem push on Array
    for(let i=1;i<=n;i++){
        for(let w=1;w<=capacity;w++){
            if(weights[i-1]<=w){
                //if W(current weight) less or lower than i-1,calculate i-1 beetwen chose or not 
                d2[i][w]=Math.max(d2[i-1][w],d2[i-1][w-weights[i-1]]+values[i-1]);
            }else{
                //if W > i-1 we can't chose it
                d2[i][w]=d2[i-1][w];
            }
        }
    }
    //best value it's return d2[n][capacity]
    return d2[n][capacity];
}

const values=[7,200,300];
const weights=[5,20,30];
const capacity=25;
const result = knapsack(values,weights,capacity);
console.log('the best value is :',result);

//Belong to Aryan Alkane