export const loadData=(key)=>{

 try{
    let temp=JSON.parse(localStorage.getItem(key))
    
    return temp

  }catch(err){

    return undefined
 }
    
}

export const saveData=(key,data)=>{

    localStorage.setItem(key,JSON.stringify(data))

}