import { useEffect, useState } from "react";
import { Project } from "./Project";
import { projectAPI } from "./ProjectAPI";
import { useParams } from "react-router";
import ProjectDetail from "./ProjectDetail";

function ProjectPage(){
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState<Project | null>(null);
    const[error, setError] = useState<string | null>(null);
    
    const params = useParams();
    const id = Number(params.id);
    
    useEffect(() => {
        setLoading(true);
        projectAPI.getProjectById(id)
            .then((data) => {
                setProject(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return(
        <>
            <h1>Project Detail</h1>
            <hr/>
            {
                loading &&(
                    <div className="center-page">
                        <span className="spinner primary"></span>
                        <p>Loading...</p>
                    </div>
                )
            }
            <div className="row">
                {
                    error && (
                        <div className="card large error">
                            <section>
                                <p>
                                    <span className="icon-alert inverse"></span>
                                    {error}
                                </p>
                            </section>
                        </div>
                    )
                }
            </div>
            {
                project && (
                    <ProjectDetail project={project} />
                )
            }
        </>
    );
}

export default ProjectPage;