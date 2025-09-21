export default function Home() {
    return (
    <main id="main-content" tabIndex="-1">
        <section className="banner">
        <h2>Bienvenido a la Plataforma de Trámites</h2>
        <p>
            Gestiona tus certificados, inscripciones y solicitudes en línea de manera rápida y accesible.
        </p>
        <img
            src="/EstudiantesUC.webp"
            alt="Estudiantes universitarios usando computadoras"
        />
        </section>

        <section className="noticias">
        <h2>Noticias y Eventos</h2>
        <article>
            <img src="/EFU.jpg" alt="Estudiantes en feria universitaria" />
            <h3>Feria Académica 2025</h3>
            <p>Descubre los nuevos programas de pregrado y posgrado.</p>
        </article>
        <article>
            <img src="/PRC.jpg" alt="Persona recibiendo certificado" />
            <h3>Entrega de Certificados</h3>
            <p>La próxima semana se entregarán certificados de notas y grado.</p>
        </article>
        </section>
    </main>
    );
}
