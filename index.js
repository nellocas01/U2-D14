const API_KEY = "vmzcPp7SfH64q8oRQ3HJOuYN5LlPVLWLvq43jzkutu889iQMtuxcAVvr";
const URL = "https://api.pexels.com/v1/";
const PARAM = {
    headers: {
        "Authorization": "vmzcPp7SfH64q8oRQ3HJOuYN5LlPVLWLvq43jzkutu889iQMtuxcAVvr"
    }
}

  const resp = async(url, params)=> {
    try{
        const response = await fetch(url, params)
        const data = await response.json()

        if(!response.ok){
            throw new Error("Non è OK");
        }
        return data
    } catch (error) {
    console.log(error);
} 
  }

function hide(){
    var btn = document.querySelectorAll("#edit");
    btn.innerText = "Hide";
}
hide();

function del() {
    const element = document.querySelector(".col-md-4");
    element.remove();
  }

function ricerca(){

}