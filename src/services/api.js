import { base_url } from "../constants/const";


//Getting Data
export const getData = async ({token, endpoint}) =>{
        const response = await fetch(base_url+endpoint, {
        method:'get',
        headers:{
        'x-access-token':token,
        }
        })
        ;
        const data = await response.json();
        return data;
}

//Posting Data 
export const setData = async ({state, endpoint, token}) => {
        try{
        const response = await fetch(base_url+endpoint, {
                method: 'post',
                headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
                },
                body: JSON.stringify({state})
        })
        const data = await response.json();
        return data;
        }
        catch(error)
        {
                console.log(error);
        }
        
}



//Deleting Data
export const deleteData = async ({endpoint, id, token}) =>{
        try{
        const response = await fetch(base_url+endpoint+id, {
        method: 'delete',
        headers: {
                'Content-Type': 'application/json',
                'x-access-token':token
        },
        }) 
        const data=await response.json();
        return data;
        }
        catch(error){
        console.log(error);
        }
        
}


//Updating Data
export const updateData =async ({state, endpoint, token})=>{
                try{
                const response = await fetch(base_url+endpoint, {
                method: 'put',
                headers: {
                        'Content-Type': 'application/json',
                        'x-access-token':token
                },
                body: JSON.stringify({state}),
                }) 
                const data= await response.json()
                return data;
                }
                catch(error){
                console.log(error);
                }
                
  }
