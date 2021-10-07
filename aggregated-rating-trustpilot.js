
//Fetch aggregated rating from trustpilot

//Add this to HTML <span data-aggregatedservicerating=""></span>


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    if(parent && el) {
        return parent.appendChild(el);
    }
    return false;
}

const aggregatedservicerating = document.querySelector("[data-aggregatedservicerating]");

function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

function aggregatedrating() {
        const self = this;
        fetch(`https://api.trustpilot.com/v1/business-units/4bf0fce800006400050c6761/?apikey=0SUVte6GJPYYD8rVAdn5g1X1OvmDSOoG&name=sensiseeds.com`, {
            method: "GET",
        })
        .then(self.handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let strong = createNode('strong');
            strong.innerHTML = `${data.score.trustScore}`;
            append(aggregatedservicerating, strong);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
   // aggregatedrating();


