// Code your solution here

let totalBatteries = 0
let batteryBatches = [10, 9, 8, 4]

totalBatteries = batteryBatches.reduce((totalBatteries, battery) => {
  return totalBatteries + battery
}, 0)
