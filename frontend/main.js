window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(responses => {
        return responses.jsons()
    }).then(reponse =>{
        console.log("website called function API");
        count = response.count;
        document.getElementById("Counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}