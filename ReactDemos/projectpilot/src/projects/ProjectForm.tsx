import './ProjectForm.css';

interface ProjectFormProps {
    onCancel: () => void;
}

//function ProjectForm(){
function ProjectForm({onCancel}: ProjectFormProps){
    return(
        <>
            <form className="input-group vertical">
                <label htmlFor="name">Project Name</label>
                <input type="text" name="name" placeholder="Enter project name" />
                <label htmlFor="description">Project Description</label>
                <textarea name="description" placeholder="Enter project description" />
                <label htmlFor="budget">Project Budget</label>
                <input type="number" name="budget" placeholder="Enter project budget" />
                <label htmlFor="isActive">Is Project Active?</label>
                <input type="checkbox" name="isActive" placeholder="Enter project active" />
                <div className="input-group">
                    <button className="primary bordered medium">
                        Save
                    </button>
                    <span />
                    <button type="button" className="bordered medium" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}

export default ProjectForm;