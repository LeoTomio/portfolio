import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Page404 = () => (
    <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="h1">Página não encontrada.</p>
        <p className="h3 fw-normal mt-3 mb-5">
            Parece que nada foi encontrado por aqui.
        </p>
        <Link to="/">
            <Button variant="primary">Voltar para o início</Button>
        </Link>
    </div>
);

export default Page404;
