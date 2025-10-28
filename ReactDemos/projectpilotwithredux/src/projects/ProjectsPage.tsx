import './ProjectsPage.css';
//import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
//import { Project } from './Project';
//import { useState, useEffect } from 'react';
import { useEffect } from 'react';
//import { projectAPI } from './ProjectAPI';
import { useSelector, useDispatch } from 'react-redux';
import { type AppState } from '../store';
import { type ProjectState } from './state/projectTypes';
import { loadProjects } from './state/projectActions';
import { type AnyAction} from 'redux';
import { type ThunkDispatch } from 'redux-thunk';

function ProjectsPage(){
    // const [projects, setProjects] = useState<Project[]>([]);
    // const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | undefined>(undefined);
    const loading = useSelector((appState: AppState) => appState.projectState.loading);

    const projects = useSelector((appState: AppState) => appState.projectState.projects);

    const error = useSelector((appState: AppState) => appState.projectState.error);

    const currentPage = useSelector((appState: AppState) => appState.projectState.page);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

    const handleMoreClick = () => {
        dispatch(loadProjects(currentPage + 1));
    }

    // const saveProject = (project: Project): void => {
    //     console.log(`Saving project: ${project}`);
    //     projectAPI.updateProject(project)
    //         .then((updatedProject) => {
    //             const updatedProjects= projects.map((p: Project) => {
    //                 return p.id === project.id ? new Project(updatedProject) : p;
    //             });
    //             setProjects(updatedProjects);
    //         })
    //         .catch((err) => {
    //             if(err instanceof Error){
    //                 setError(err.message);
    //             }
    //         });
        
    // };

    // useEffect(() => {
    //     async function loadProjects() {
    //         setLoading(true);
    //         try{
    //             const data = await projectAPI.getProjects(1);
    //             setError('');
    //             setProjects(data);
    //         }
    //         catch(err){
    //             if(err instanceof Error){
    //                 setError(err.message);
    //             }
    //         }
    //         finally{
    //             setLoading(false);
    //         }
    //     }
    //     loadProjects();
    // }, []);

    useEffect(() => {
        dispatch(loadProjects(1));
    }, [dispatch]);

    return(
        <>
            <h1>Projects</h1>
            <hr/>
            {/* <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre> */}
            {/* <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} /> */}

            {
                error && (
                    <div className='row'>
                        <div className='card large error'>
                            <section>
                                <p>
                                    <span className='icon-alert inverse'></span>
                                    {error}
                                </p>
                            </section>
                        </div>
                    </div>
                )
            }

            {
                loading && (
                    <div className='center-page'>
                        <span className='spinner primary'></span>
                        <p>Loading...</p>
                    </div>
                )
            }
            {/* <ProjectList projects={projects} onSave={saveProject} /> */}
            <ProjectList projects={projects}  />
            <button className='button primary' onClick={handleMoreClick} disabled={loading}>
                {loading ? 'Loading...' : 'More'}
            </button>
        </>
    );
}

export default ProjectsPage;