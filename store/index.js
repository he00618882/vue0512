import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const index = new Vuex.Store({
    state: {
      user:{
        


      },
      Lv:'3',
      selectData:'',
      type:'機場',
        dailyPortData: [
            {
              date: "20200901",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 1389,
                      entry: 1196,
                      total: 2585,
                    },
                    {
                      location: "高雄機場",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "台中機場",
                      outbound: 0,
                      entry: 1,
                      total: 1,
                    },
                    {
                      location: "松山機場",
                      outbound: 105,
                      entry: 43,
                      total: 148,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 1,
                      entry: 0,
                      total: 1,
                    },
                    {
                      location: "台中港",
                      outbound: 22,
                      entry: 27,
                      total: 48,
                    },
                    {
                      location: "高雄港",
                      outbound: 4,
                      entry: 24,
                      total: 28,
                    },
                    {
                      location: "台北港",
                      outbound: 4,
                      entry: 6,
                      total: 10,
                    },
                    {
                      location: "東港",
                      outbound: 32,
                      entry: 0,
                      total: 32,
                    },
                  ],
                },
              ],
            },
            {
              date: "20200902",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 1739,
                      entry: 1479,
                      total: 3218,
                    },
                    {
                      location: "高雄機場",
                      outbound: 86,
                      entry: 74,
                      total: 160,
                    },
                    {
                      location: "台中機場",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "松山機場",
                      outbound: 240,
                      entry: 160,
                      total: 400,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 1,
                      entry: 2,
                      total: 3,
                    },
                    {
                      location: "台中港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "高雄港",
                      outbound: 17,
                      entry: 24,
                      total: 41,
                    },
                    {
                      location: "台北港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "東港",
                      outbound: 0,
                      entry: 10,
                      total: 10,
                    },
                  ],
                },
              ],
            },
            {
              date: "20200903",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 1591,
                      entry: 1077,
                      total: 2668,
                    },
                    {
                      location: "高雄機場",
                      outbound: 213,
                      entry: 116,
                      total: 329,
                    },
                    {
                      location: "台中機場",
                      outbound: 23,
                      entry: 48,
                      total: 71,
                    },
                    {
                      location: "松山機場",
                      outbound: 64,
                      entry: 52,
                      total: 116,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 0,
                      entry: 3,
                      total: 3,
                    },
                    {
                      location: "台中港",
                      outbound: 4,
                      entry: 1,
                      total: 5,
                    },
                    {
                      location: "高雄港",
                      outbound: 19,
                      entry: 12,
                      total: 31,
                    },
                    {
                      location: "台北港",
                      outbound: 0,
                      entry: 1,
                      total: 1,
                    },
                    {
                      location: "東港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                  ],
                },
              ],
            },
            {
              date: "20200904",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 2173,
                      entry: 2019,
                      total: 4192,
                    },
                    {
                      location: "高雄機場",
                      outbound: 54,
                      entry: 73,
                      total: 127,
                    },
                    {
                      location: "台中機場",
                      outbound: 0,
                      entry: 1,
                      total: 1,
                    },
                    {
                      location: "松山機場",
                      outbound: 152,
                      entry: 179,
                      total: 331,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 0,
                      entry: 1,
                      total: 1,
                    },
                    {
                      location: "台中港",
                      outbound: 0,
                      entry: 1,
                      total: 1,
                    },
                    {
                      location: "高雄港",
                      outbound: 18,
                      entry: 24,
                      total: 42,
                    },
                    {
                      location: "台北港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "東港",
                      outbound: 15,
                      entry: 1,
                      total: 16,
                    },
                  ],
                },
              ],
            },
            {
              date: "20200905",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 543,
                      entry: 416,
                      total: 959,
                    },
                    {
                      location: "高雄機場",
                      outbound: 77,
                      entry: 102,
                      total: 179,
                    },
                    {
                      location: "台中機場",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "松山機場",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "台中港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                    {
                      location: "高雄港",
                      outbound: 46,
                      entry: 12,
                      total: 58,
                    },
                    {
                      location: "台北港",
                      outbound: 1,
                      entry: 1,
                      total: 2,
                    },
                    {
                      location: "東港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                  ],
                },
              ],
            },
            {
              date: "20200906",
              data: [
                {
                  type: "機場",
                  locate: [
                    {
                      location: "桃園機場",
                      outbound: 1619,
                      entry: 2464,
                      total: 4083,
                    },
                    {
                      location: "高雄機場",
                      outbound: 78,
                      entry: 71,
                      total: 149,
                    },
                    {
                      location: "台中機場",
                      outbound: 16,
                      entry: 50,
                      total: 66,
                    },
                    {
                      location: "松山機場",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                  ],
                },
                {
                  type: "港口",
                  locate: [
                    {
                      location: "基隆港",
                      outbound: 1,
                      entry: 7,
                      total: 8,
                    },
                    {
                      location: "台中港",
                      outbound: 6,
                      entry: 1,
                      total: 7,
                    },
                    {
                      location: "高雄港",
                      outbound: 0,
                      entry: 7,
                      total: 7,
                    },
                    {
                      location: "台北港",
                      outbound: 4,
                      entry: 3,
                      total: 7,
                    },
                    {
                      location: "東港",
                      outbound: 0,
                      entry: 0,
                      total: 0,
                    },
                  ],
                },
              ],
            },
          ],
    },
    mutations: {
      
    },
    getters: {
      getChartData: (state, getters) => {
          console.log('in GetChartData')
          let chartData ={
          }
          if(state.type=='機場'){
              chartData = {
                  columns: ['日期', 
                          '桃園機場出境',
                          '桃園機場入境',
                          '桃園機場總人數',
                          '高雄機場出境',
                          '高雄機場入境',
                          '高雄機場總人數',
                          '台中機場出境',
                          '台中機場入境',
                          '台中機場總人數',
                          '松山機場出境',
                          '松山機場入境',
                          '松山機場總人數'
                      ],
                  rows: [
                  ]
              }
          }else{
              chartData = {
                  columns: ['日期', 
                          '基隆港出境',
                          '基隆港入境',
                          '基隆港總人數',
                          '台中港出境',
                          '台中港入境',
                          '台中港總人數',
                          '高雄港出境',
                          '高雄港入境',
                          '高雄港總人數',
                          '台北港出境',
                          '台北港入境',
                          '台北港總人數',
                          '東港出境',
                          '東港入境',
                          '東港總人數'
                      ],
                  rows: [
                  ]
              }
          }
          state.dailyPortData.forEach(element => {
              let e = {'日期':element.date}
              element.data.forEach(value => {
                if(value.type == state.type){ 
                  value.locate.forEach(list=>{
                    e = Object.assign(e,{[list.location+"出境"]:list.outbound,[list.location+"入境"]:list.entry,[list.location+"總人數"]:list.total})
                    
                  })
                }
              });
              chartData.rows.push(e);
          });

          return chartData ;
      },
      
  }

})
    export default index;