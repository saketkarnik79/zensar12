import './ProjectsPage.css';
//import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { useState, useEffect } from 'react';
import { projectAPI } from './ProjectAPI';

function ProjectsPage(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const saveProject = (project: Project): void => {
        //console.log(`Saving project: ${project}`);
        projectAPI.updateProject(project)
            .then((updatedProject) => {
                const updatedProjects= projects.map((p: Project) => {
                    return p.id === project.id ? new Project(updatedProject) : p;
                });
                setProjects(updatedProjects);
            })
            .catch((err) => {
                if(err instanceof Error){
                    setError(err.message);
                }
            });
    };

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try{
                const data = await projectAPI.getProjects(1);
                setError('');
                setProjects(data);
            }
            catch(err){
                if(err instanceof Error){
                    setError(err.message);
                }
            }
            finally{
                setLoading(false);
            }
        }
        loadProjects();
    }, []);

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
            <ProjectList projects={projects} onSave={saveProject} />
        </>
    );
}

export default ProjectsPage;