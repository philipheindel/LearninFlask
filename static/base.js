document.querySelector("#GetStatusButton").addEventListener("click", getStatus);

function getStatus() {
	alert("test");
	
	let data = {"ccmc":"status"}
	try {
		alert("try")
		fetch("/status", {
			method: "POST",
	  		headers: {'Content-Type': 'application/json'} 
			body: JSON.stringify(data)
			}).then(res => {
	  			console.log("Request complete! response:", res);
			});
		});
	} catch (err) {
		alert('broke')
	}
	
}