import { Project } from "./Project";
import { projectAPI } from "./ProjectAPI";
import { useState, useEffect } from "react";

function useProjects(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const [currentPage, setCurrentPage] = useState(1);
    const [saving, setSaving] = useState(false);
    const [savingError, setSavingError] = useState<string | undefined>(undefined);

    useEffect(() => {
                async function loadProjects() {
                    setLoading(true);
                    try{
                        const data= await projectAPI.getProjects(currentPage);
                        if(currentPage === 1){
                            setProjects(data);
                        } else {
                            setProjects((projects) => [...projects, ...data]);
                        }
                    }
                    catch (err){
                        if(err instanceof Error){
                            setError(err.message);
                        }
                    }
                    finally {
                        setLoading(false);
                    }
                }
                loadProjects();
            }, [currentPage]);
        const saveProject = (project: Project) => {
            setSaving(true);
            projectAPI.updateProject(project)
                .then((updatedProject) => {
                    const updatedProjects = projects.map((p) => {
                        return p.id === project.id ? new Project(updatedProject) : p;
                    });
                    setProjects(updatedProjects);
                })
                .catch((err) => {
                    setSavingError(err.message);
                })
                .finally(() => {
                    setSaving(false);
                });
        };
        return { 
            projects, 
            loading, 
            error,
            currentPage,
            setCurrentPage,
            saving,
            savingError,
            saveProject
         };
}

export {useProjects};