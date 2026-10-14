<script>
    const contactForm = document.getElementById("contactForm");
    const messageAlert = document.getElementById("messageAlert");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        messageAlert.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Message sent
                <button type="button" class="btn-close"
                        data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>
        `;

        contactForm.reset();
    });
</script>