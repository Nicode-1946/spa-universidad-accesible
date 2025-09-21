export default function Contacto() {
    return (
    <main id="main-content" tabIndex="-1">
        <h2 className="contactos">Contáctanos</h2>
        <p className="contactos">Si necesitas ayuda, completa el siguiente formulario o comunícate con nosotros:</p>

        <p className="contactos">
        <a className="con" href="mailto:soporte@universidad.edu" aria-label="Correo electrónico de soporte">soporte@universidad.edu</a><br/>
        <a className="con" href="tel:+573001112233" aria-label="Teléfono de soporte">+57 300 111 2233</a>
        </p>

        <form>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" type="text" name="nombre" required />

        <label htmlFor="email">Correo:</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit" aria-label="Enviar formulario de contacto">Enviar</button>
        </form>
    </main>
    );
}
