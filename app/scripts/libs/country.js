document.addEventListener("DOMContentLoaded", () => {
    const moscow = document.querySelector(".moscow");
    if (moscow != null) {
        const novosibirsk = document.querySelector(".novosibirsk");
        const krasnoyarsk = document.querySelector(".krasnoyarsk");
        moscow.addEventListener("mouseover", e => {
            window1 = window.open("Moscow.html", "Москва", "scrollbars=no, width=600, height=600");
        });
        moscow.addEventListener("mouseout", e => {
            window1.close();
        });
        novosibirsk.addEventListener("mouseover", e => {
            window1 = window.open("Novosibirsk.html", "Новосибирск", "width=600, height=600");
        });
        novosibirsk.addEventListener("mouseout", e => {
            window1.close();
        });
        krasnoyarsk.addEventListener("mouseover", e => {
            window1 = window.open("Krasnoyarsk.html", "Красноярск", "width=600, height=600");
        });
        krasnoyarsk.addEventListener("mouseout", e => {
            window1.close();
        });
    }

    const chongqing = document.querySelector(".chongqing");
    if (chongqing != null) {
        const beijing = document.querySelector(".beijing");
        const shanghai = document.querySelector(".shanghai");
        chongqing.addEventListener("mouseover", a => {
            window1 = window.open("chongqing.html", "Чунцин", "width=600, height=600");
        });
        chongqing.addEventListener("mouseout", e => {
            window1.close();
        });
        beijing.addEventListener("mouseover", e => {
            window1 = window.open("beijing.html", "Пекин", "width=600, height=600");
        });
        beijing.addEventListener("mouseout", e => {
            window1.close();
        });
        shanghai.addEventListener("mouseover", e => {
            window1 = window.open("shanghai.html", "Шанхай", "width=600, height=600");
        });
        shanghai.addEventListener("mouseout", e => {
            window1.close();
        });
    }

    const osaka = document.querySelector(".osaka");
    if (osaka != null) {
        const tokyo = document.querySelector(".tokyo");
        const sapporo = document.querySelector(".sapporo");
        osaka.addEventListener("mouseover", e => {
            window1 = window.open("osaka.html", "Осака", "scrollbars=no, width=600, height=600");
        });
        osaka.addEventListener("mouseout", e => {
            window1.close();
        });
        tokyo.addEventListener("mouseover", e => {
            window1 = window.open("tokyo.html", "Токио", "width=600, height=600");
        });
        tokyo.addEventListener("mouseout", e => {
            window1.close();
        });
        sapporo.addEventListener("mouseover", e => {
            window1 = window.open("sapporo.html", "Саппоро", "width=600, height=600");
        });
        sapporo.addEventListener("mouseout", e => {
            window1.close();
        });
    }
});