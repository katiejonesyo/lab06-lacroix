import request from 'superagent';

const URL = 'https://cheese-man.herokuapp.com/lacroixs';

export async function getAllCategories() {
    try {
        const response = await request.get(`https://cheese-man.herokuapp.com/categories`);
        return response.body;
    } catch(err) {
        throw err;
    }
}


export async function getAllLacroixs() {
    try {
        const response = await request.get(`${URL}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}



export async function getSingleLacroix(someId) {
    try {
        const response = await request.get(`${URL}/${someId}`);
        return response.body;
    } catch(err) {
        throw err;
    }
}


export async function createLacroix(newLacroixs) {
    try {
        await request
        .post(`${URL}`)
        .send(newLacroixs);
        return;
    } catch(err) {
        throw err;
    }
}


export async function updateLacroix(someId, newLacroixs) {
    try {
        await request
        .put(`${URL}/${someId}`)
        .send(newLacroixs);
        return;
    } catch(err) {
        throw err;
    }
}


export async function deleteLacroix(someId) {
    try {
        await request
        .delete(`${URL}/${someId}`)
        return;
    } catch(err) {
        throw err;
    }
}
