const getDataDB = (key) =>
{
    return JSON.parse(localStorage.getItem(key));
}



const addToLocalDB = (key, newValue = [{}]) =>{
const value = [...newValue];
localStorage.setItem(key, JSON.stringify(value))


};




export {addToLocalDB,getDataDB};