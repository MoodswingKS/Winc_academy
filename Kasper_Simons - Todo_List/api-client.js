const apiURL = 'http://localhost:3000/'

const getData = async () => {
    try {
        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
}

const postData = async (task) => {
    try {
        await fetch(apiURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task), 
        });
    } catch (error) {
        console.log('error: ', error);
    }
}

const changeData = async (id) => {
    const change = { done: true };
    try {
        await fetch(apiURL+id, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(change), 
        });
    } catch(error) {
        console.log('error: ', error);
    }
}

const removeData = async (id) => {
    try {
        await fetch(apiURL+id, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch(error) {
        console.log('error: ', error);
    }
}
