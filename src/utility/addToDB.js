const getStoredBook =() =>{

    const storeBookSTR=localStorage.getItem("readList");

    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData
    }
    else{
      []
    }

}
const addToStoreDB =(id)=>{


const storeBookData=getStoredBook();
console.log(storeBookData);

if(storeBookData.includes(id)){
  return
}
else{
    storeBookData.push(id);
const data=JSON.stringify(storeBookData);
localStorage.setItem("readList", data)
     
}
}
export{addToStoreDB,getStoredBook};