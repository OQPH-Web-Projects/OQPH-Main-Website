import { useEffect } from "react";

const Animation = (selector) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll(selector);
        hiddenElements.forEach((el) => observer.observe(el));

        // Clean up function
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [selector]);
};

export default Animation;