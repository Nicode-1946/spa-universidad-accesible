export default function Tramites() {
    return (
    <main id="main-content" tabIndex="-1">
        <h2>Trámites disponibles</h2>
        <ul className="tramites-list">
        <li>
            <img src="certificados.png" alt="" aria-hidden="true" />
            <div>
            <h3>Solicitud de certificados</h3>
            <p>Pide certificados de estudio y calificaciones en línea.</p>
            <button aria-label="Iniciar trámite de certificado">Iniciar trámite</button>
            </div>
        </li>
        <li>
            <img src="inscripcion.png" alt="" aria-hidden="true" />
            <div>
            <h3>Inscripción de materias</h3>
            <p>Selecciona tus materias para el próximo semestre.</p>
            <button aria-label="Iniciar inscripción de materias">Iniciar inscripción</button>
            </div>
        </li>
        <li>
            <img src="pagos.png" alt="" aria-hidden="true" />
            <div>
            <h3>Pagos en línea</h3>
            <p>Realiza tus pagos de matrícula y otros trámites de manera segura.</p>
            <button aria-label="Realizar pago en línea">Pagar ahora</button>
            </div>
        </li>
        </ul>
    </main>
    );
}
