const request = require('request-promise-native');

const BASE_URL = "https://api-tihon.glitch.me/"

export const get = async (path) => {
  const options = {
    url: BASE_URL + "/" + path,
    json: true,
    method: "GET"
  }
  
  let data = await request(options)
  
  return JSON.parse(data);
}

export const getCmdsUsage = async () => {
  let log = await get("log/cmds");
  let cmdsData = []
  let timeNow = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  }
  time.forEach(k => {
    cmdsData[k] = 0
  })

  for (let peer in log) {
    for (let time in log[peer]) {
      let t = new Date(time)
      if (timeNow.date === t.getDate() && timeNow.month === t.getMonth() && timeNow.year === t.getFullYear()) {
        cmdsData[t.getHours()] += 1
      }
    }
  }

  for (let i = cmdsData.length - 1; i >= 0; i--) {
    if (cmdsData[i] === 0) cmdsData.pop()
    else break;
  }

  return cmdsData
}

export const time = [
  "0",
  "1", 
  "2", 
  "3", 
  "4", 
  "5", 
  "6", 
  "7", 
  "8", 
  "9", 
  "10", 
  "11", 
  "12", 
  "13", 
  "14", 
  "15", 
  "16", 
  "17", 
  "18", 
  "19", 
  "20", 
  "21", 
  "22", 
  "23"
]
