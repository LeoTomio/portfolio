 
import { useParams } from 'react-router-dom';

const Project = () => {

    const { id } = useParams();
    return (
        <div style={{ paddingTop: '80px' }} >
            <h1>{id} Projeto Detalhado</h1>

        </div>
    );
};

export default Project;
