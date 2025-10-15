import { Project } from "./Project";

const baseUrl = 'http://localhost:4000';
const url = `${baseUrl}/projects`;

function translateStatusToErrorMessage(status:number): string {
    switch(status){
        case 401: 
            return 'Please login again.';
        case 403:
            return 'You do not have permission to view the project(s).';
        default:
            return 'There was an error retrieving the project(s). Please try again.';
    };
}

function checkStatus(response: Response) {
    if(response.ok){
        return response;
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url
        };
        console.log(`Log server http error: ${JSON.stringify(httpErrorInfo)}`);

        const errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response) {
    return response.json();
}

function delay(ms: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function(x: any): Promise<any>{
        return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToProjectModel(item: any): Project{
    return new Project(item);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertToProjectModels(res: any): Project[] {
    const projects: Project[] = res.data.map(convertToProjectModel) ;
    return projects;
}

const projectAPI = {
    getProjects(page = 1, limit = 6){
        return fetch(`${url}?_page=${page}&_per_page=${limit}`)
            .then(delay(1000))
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToProjectModels)
            .catch((error: TypeError) => {
                console.log(`Log client error: ${error}`);
                throw new Error('There was an error retrieving the project(s). Please try again.');
            });
    },
    updateProject(project: Project) {
         return fetch(`${url}/${project.id}`, {
            method: 'PUT',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
         })
            .then(checkStatus)
            .then(parseJSON)
            .catch((error: TypeError) => {
                console.log(`Log client error: ${error}`);
                throw new Error('There was an error updating the project. Please try again.');
            });
    },
     getProjectById(id: number){
        return fetch(`${url}/${id}`)
            .then(delay(1000))
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToProjectModel)
            .catch((error: TypeError) => {
                console.log(`Log client error: ${error}`);
                throw new Error('There was an error retrieving the project(s). Please try again.');
            });
    }
};

export {projectAPI};