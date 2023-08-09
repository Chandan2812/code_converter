document.getElementById('convert-button').addEventListener('click', function() {
    var codeInput = document.getElementById('code-input').value;
    var language = document.getElementById('language-selector').value;
    
    fetch('https://codeconvert.onrender.com/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sourceCode: codeInput,
            targetLanguage: language
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Display the response in the #output element
        document.getElementById('output').innerHTML = `<pre>${data.content}</pre>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


document.getElementById('debug-button').addEventListener('click', function() {
    var codeInput = document.getElementById('code-input').value;
    
    fetch('https://codeconvert.onrender.com/debug', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sourceCode: codeInput,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Display the response in the #output element
        document.getElementById('output').innerHTML = `<pre>${data.content}</pre>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('quality-button').addEventListener('click', function() {
    var codeInput = document.getElementById('code-input').value;
    // Make request to your server's quality check endpoint
    // Display the response in the #output element
    fetch('https://codeconvert.onrender.com/quality', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sourceCode: codeInput,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Display the response in the #output element
        document.getElementById('output').innerHTML = `<pre>${data.content}</pre>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
