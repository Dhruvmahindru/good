import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Legend,Tooltip,BarChart,Bar} from 'recharts' // yeh charts k component hai jo chart bnane k liye jruri hai 
// chart bnane k liye data ki bhut jruri hai vo api se bhi aa skta hai and vo static dta bhi ho skta hai 



// hr baar data ki value alg honi chahiye . because xcharts mein hr ek object ka chart bnta hai 
const pdata=[
  {
    name:'python',
    students:40,
    fees:75
  },
  {
    name:'c',
    students:25,
    fees:26
  },
  {
    name:'js',
    students:50,
    fees:80
  },
  {
    name:'java',
    students:10,
    fees:287
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
  {
    name:'asp',
    students:-100,
    fees:2000
  },
  {
    name:'asp',
    students:1,
    fees:20
  },
]

export default function Home() {
  return (
    <div className={styles.container} >
     <h1 style={{textAlign:'center'}}>Line Recharts</h1>
     <ResponsiveContainer width={"100%"} aspect={3}>{/*yeh dada container hai*/}
     {/* ab hum line chart bna rhe hai to line chart likhenge  */}
     <LineChart data={pdata} > {/* line chart konse data ka bnega */}
     <XAxis dataKey='name' interval={'preserveStartEnd'}/> {/*interval preseve start end krke sari values dat ki show hogi */}
     <YAxis />{/* jo value line mein hogi vhi hogi iski datakey  and usi k related values bnegi , agr do lines hai to dono line ki data key ki valuue dekh k hi y axis bnega */}
      <Legend/> {/*yeh show krega konsi line konsi value ko darsha rhi hai */}
      <Tooltip/> {/*isse hum3 data ki jankari milegi*/}
      <Line dataKey='students'/>
      <Line dataKey='fees' stroke='blue'/> {/*stroke se hum line ka color change kr skte hai */}
     </LineChart>

     </ResponsiveContainer>
     <hr />
     <h1 style={{textAlign:'center'}}>Bar chart</h1>
     <ResponsiveContainer width={'100%'} aspect={2}>
      <BarChart data={pdata}>
        <XAxis dataKey='name'/>

        <YAxis/> {/*iski data key hogi fees and students because humne do bar bnaye hai . jo bar ki value hogi vhi iski hogi jitne bars honge utne hi analyzze honge */}
        <Legend/>
        <Tooltip/>
        <Bar dataKey='fees' fill='green'/> {/*ismein color krne k liye fill ka use hoga*/}
        <Bar dataKey='students'/>
      </BarChart>

     </ResponsiveContainer>
    </div>
  )
}

// basically data do  keys ka hi show hota hai 
// aap dusri line kheech k bhi bna skte ho 



// jo main cheez hai vo yaad rkho vo hai ki tum kbhi bhi aisa data nhi leke aa skte jinki value same ho . hmesha vhi data leke aana jinki value alg ho . agr ek hi object array k andr do c k objects honge to vo dono c k data kpo analyze krega . 

// isliye array object k array ki ek key ki value to alg honi hi chahiye 