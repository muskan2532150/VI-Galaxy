const urlLike = ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RJjXXfLZVNow7n5VSnHJ/likes'

const getLike = async () => {
    await fetch(urlLike)
   .then((response) => response.json())
   .then((data)=>{
    const pText =document.querySelectorAll('.card-p');
    console.log([...data]);
    [...data].forEach((el,index)=>{
       [...pText][index].append(el.likes + ' likes');
    })
   })
};

const setLike =  async (id) => {
    fetch(urlLike,{
        method:'POST',
        body: JSON.stringify({
           "item_id": `1`
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
}

export const Like =document.querySelectorAll('.fa-solid');
export { getLike,setLike };