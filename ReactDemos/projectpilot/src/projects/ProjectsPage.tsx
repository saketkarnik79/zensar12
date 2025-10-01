import './ProjectsPage.css';
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage(){
    return(
        <>
            <h1>Projects</h1>
            <hr/>
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre>
        </>
    );
}

export default ProjectsPage;