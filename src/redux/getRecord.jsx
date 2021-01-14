import axios from 'axios'

const GetRecord = (payload) => {
    const config={
        headers:{
             headers:{
            "Content-Type":"application/json"
        }
        }
    }
    return(dispatch)=>{
axios.get('https://api.enye.tech/v1/challenge/records',config)
.then(res=>{
    dispatch({
        type:'GET RECORD',
        payload:res.data.records.profiles
    })
})
.catch(err=>{
    dispatch({
        type:'GET RECORD ERROR',
        err
    })
})
    }
}

export default GetRecord