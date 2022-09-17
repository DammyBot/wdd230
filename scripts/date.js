const option = {month: 'numeric', day: 'numeric', year: 'numeric'};

document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', option);