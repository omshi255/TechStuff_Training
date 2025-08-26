
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');


    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page refresh

        // Get field values
        const nameInp = form.querySelector('input[type="text"]');
        const emailInp = form.querySelector('input[type="email"]');
        const empIdInp = form.querySelector('input[type="text"]');


        // Validation
        if (!nameInp.value || !emailInp.value || !empIdInp.value) {
            alert("Please fill all the fields ");
        } else {
            alert("submitted successfully!!");
            form.reset();
        }
    });
});
