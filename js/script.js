document.addEventListener("DOMContentLoaded", () => {

    /*
     * Mobile navigation
     */

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const nav =
        document.getElementById("mainNav");


    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            () => {

                nav.classList.toggle("open");

                const icon =
                    menuButton.querySelector("i");

                if (nav.classList.contains("open")) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );
                }

            }
        );
    }


    /*
     * Close mobile menu when
     * navigation link is clicked.
     */

    document
        .querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav?.classList.remove(
                        "open"
                    );

                }
            );

        });


    /*
     * Simple enquiry form validation
     */

    document
        .querySelectorAll("form")
        .forEach(form => {

            form.addEventListener(
                "submit",
                event => {

                    event.preventDefault();

                    const requiredFields =
                        form.querySelectorAll(
                            "[required]"
                        );

                    let valid = true;


                    requiredFields.forEach(
                        field => {

                            if (
                                !field.value.trim()
                            ) {

                                field.style.borderColor =
                                    "#d64545";

                                valid = false;

                            } else {

                                field.style.borderColor =
                                    "";
                            }

                        }
                    );


                    if (!valid) {

                        alert(
                            "Please fill in all required fields."
                        );

                        return;
                    }


                    /*
                     * Replace this with your
                     * backend / Wix / email API.
                     */

                    alert(
                        "Thank you! Your enquiry has been received."
                    );

                    form.reset();

                }
            );

        });


    /*
     * Lazy loading images that don't have
     * explicit loading configuration.
     */

    document
        .querySelectorAll("img:not([fetchpriority])")
        .forEach(img => {

            img.loading = "lazy";

            img.decoding = "async";

        });

});

const treatmentSearch =
    document.getElementById("treatmentSearch");

if (treatmentSearch) {

    treatmentSearch.addEventListener(
        "input",
        event => {

            const query =
                event.target.value.toLowerCase();

            document
                .querySelectorAll(".searchable")
                .forEach(card => {

                    const name =
                        card.dataset.name
                            .toLowerCase();

                    card.style.display =
                        name.includes(query)
                            ? ""
                            : "none";

                });

        }
    );
}