
window.addEventListener("load",( ) => {
    fetch("https://api.ipify.org/?format=json").then(
        (response) => {
            return response.json()
        },
        (error) => {
            console.log(error)
        }
    ).then(
        (data) => {
            let divApi = document.getElementsById("ip")
            let p = document.createElement("p")
            p.innerText = divApi
            divApi.append(p)  
        }
    )

}

)

window.addEventListener("load",( ) => {
    fetch("https://ipinfo.io/${divApi}/geo").then(
        (response) => { 
            return response.json()
        },
        (error) => {
            console.log(error)
        }
    ).then(
        (data) => {
            let DivA = document.getElementById("city")
            let a = document.createElement("p")
            p.innerText = DivA
            DivA.append(p)
        }
    )
}
)